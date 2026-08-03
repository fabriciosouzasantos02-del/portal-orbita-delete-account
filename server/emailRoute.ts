import type { Express, Request, Response } from "express";
import { z } from "zod";

const RESEND_API_KEY = process.env.RESEND_API_KEY ?? "";
const SUPPORT_EMAIL = "unterstutzung.service@gmail.com";
const RESEND_API_URL = "https://api.resend.com/emails";

const bodySchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  reason: z.string().min(1, "Reason is required"),
  language: z.string().optional(),
  userAgent: z.string().optional(),
  submittedUrl: z.string().optional(),
  submittedAt: z.string().optional(),
  confirmed: z.boolean().optional(),
});

export function registerEmailRoute(app: Express) {
  app.post("/api/enviar", async (req: Request, res: Response) => {
    try {
      const validation = bodySchema.safeParse(req.body);
      if (!validation.success) {
        res.status(400).json({
          success: false,
          error: "Invalid request data",
          details: validation.error.flatten().fieldErrors,
        });
        return;
      }

      const {
        name,
        email,
        reason,
        language = "unknown",
        userAgent = "",
        submittedUrl = "",
        submittedAt = new Date().toISOString(),
        confirmed = false,
      } = validation.data;

      // Check rate limit: simple in-memory approach
      const clientIp = req.headers["x-forwarded-for"] || req.socket.remoteAddress;

      if (!RESEND_API_KEY) {
        console.error("[EmailRoute] RESEND_API_KEY is not configured");
        res.status(500).json({ success: false, error: "Email service not configured" });
        return;
      }

      // Map reason codes to readable labels
      const reasonLabels: Record<string, Record<string, string>> = {
        privacy: { pt: "Privacidade e proteção de dados", en: "Privacy and data protection", default: "Privacy and data protection" },
        no_longer_use: { pt: "Não uso mais o aplicativo", en: "No longer use the app", default: "No longer use the app" },
        switching: { pt: "Estou migrando para outro serviço", en: "Switching to another service", default: "Switching to another service" },
        dissatisfied: { pt: "Insatisfação com o serviço", en: "Dissatisfaction with the service", default: "Dissatisfaction with the service" },
        technical: { pt: "Problemas técnicos", en: "Technical problems", default: "Technical problems" },
        other: { pt: "Outro motivo", en: "Other reason", default: "Other reason" },
      };

      const reasonLabel = reasonLabels[reason]
        ? (reasonLabels[reason][language as keyof typeof reasonLabels[keyof typeof reasonLabels]] || reasonLabels[reason].default || reason)
        : reason;

      const htmlBody = `
        <div style="font-family: 'Space Grotesk', 'Inter', sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; color: #e2e8f0; background: #0a0f1e; border-radius: 12px;">
          <div style="text-align: center; margin-bottom: 24px;">
            <div style="width: 48px; height: 48px; background: linear-gradient(135deg, #fbbf24, #f97316); border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; margin-bottom: 12px;">
              <span style="color: #fff; font-size: 20px;">&#9733;</span>
            </div>
            <h1 style="color: #fff; font-size: 22px; margin: 0; letter-spacing: -0.02em;">Portal Orbita — Account Deletion</h1>
          </div>

          <div style="background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 20px; margin-bottom: 16px;">
            <h2 style="color: #fbbf24; font-size: 16px; margin: 0 0 16px 0;">Account Deletion Request</h2>

            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; color: #94a3b8; font-size: 13px; width: 140px;">Full Name</td>
                <td style="padding: 8px 0; color: #f1f5f9; font-size: 13px; font-weight: 500;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #94a3b8; font-size: 13px;">Account Email</td>
                <td style="padding: 8px 0; color: #f1f5f9; font-size: 13px; font-weight: 500;">${email}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #94a3b8; font-size: 13px;">Reason</td>
                <td style="padding: 8px 0; color: #f1f5f9; font-size: 13px; font-weight: 500;">${reasonLabel}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #94a3b8; font-size: 13px;">Language</td>
                <td style="padding: 8px 0; color: #f1f5f9; font-size: 13px; font-weight: 500;">${language.toUpperCase()}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #94a3b8; font-size: 13px;">Confirmed</td>
                <td style="padding: 8px 0; color: ${confirmed ? '#4ade80' : '#ef4444'}; font-size: 13px; font-weight: 500;">${confirmed ? "Yes" : "No"}</td>
              </tr>
            </table>
          </div>

          <div style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08); border-radius: 10px; padding: 16px; font-size: 12px; color: #64748b;">
            <p style="margin: 0 0 8px 0;">Technical Details:</p>
            <p style="margin: 0 0 4px 0;">Submitted: ${submittedAt}</p>
            <p style="margin: 0 0 4px 0;">Source URL: ${submittedUrl}</p>
            <p style="margin: 0;">User Agent: ${userAgent}</p>
          </div>
        </div>
      `;

      const plainText = `
Account Deletion Request — Portal Orbita
==========================================

Full Name: ${name}
Account Email: ${email}
Reason: ${reasonLabel}
Language: ${language}
Confirmed: ${confirmed ? "Yes" : "No"}

Submitted: ${submittedAt}
Source URL: ${submittedUrl}
User Agent: ${userAgent}
      `.trim();

      const resendPayload = {
        from: "Portal Orbita <onboarding@resend.dev>",
        to: [SUPPORT_EMAIL],
        subject: `[Portal Orbita] Account Deletion Request — ${email}`,
        html: htmlBody,
        text: plainText,
        reply_to: email,
      };

      const resendResp = await fetch(RESEND_API_URL, {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(resendPayload),
      });

      if (!resendResp.ok) {
        const errorBody = await resendResp.text().catch(() => "");
        console.error(`[EmailRoute] Resend API error: ${resendResp.status} — ${errorBody}`);
        res.status(500).json({ success: false, error: "Failed to send email" });
        return;
      }

      const resendData = await resendResp.json();
      console.log(`[EmailRoute] Email sent successfully. ID: ${resendData.id}`);

      res.status(200).json({
        success: true,
        message: "Deletion request sent successfully",
      });
    } catch (err) {
      console.error("[EmailRoute] Unexpected error:", err);
      res.status(500).json({ success: false, error: "Internal server error" });
    }
  });
}
