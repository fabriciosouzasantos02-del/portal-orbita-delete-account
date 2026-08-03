const RESEND_API_KEY = process.env.RESEND_API_KEY;
const SUPPORT_EMAIL = "unterstutzung.service@gmail.com";
const RESEND_API_URL = "https://api.resend.com/emails";

const reasonLabels = {
  privacy: {
    pt: "Privacidade e proteção de dados",
    en: "Privacy and data protection",
    es: "Privacidad y protección de datos",
    fr: "Confidentialité et protection des données",
    de: "Datenschutz und Datensicherheit",
    it: "Privacy e protezione dei dati",
    ja: "プライバシーとデータ保護",
    ko: "개인 정보 보호 및 데이터 보안",
    zh: "隐私和数据保护",
    ar: "الخصوصية وحماية البيانات",
    ru: "Конфиденциальность и защита данных",
    hi: "गोपनीयता और डेटा सुरक्षा",
  },
  no_longer_use: {
    pt: "Não uso mais o aplicativo",
    en: "No longer use the app",
    es: "Ya no uso la aplicación",
    fr: "Je n'utilise plus l'application",
    de: "Ich nutze die App nicht mehr",
    it: "Non uso più l'app",
    ja: "アプリを使用しなくなった",
    ko: "앱을 더 이상 사용하지 않음",
    zh: "我不再使用该应用",
    ar: "لم أعد أستخدم التطبيق",
    ru: "Я больше не использую приложение",
    hi: "मैं अब ऐप का उपयोग नहीं करता",
  },
  switching: {
    pt: "Estou migrando para outro serviço",
    en: "Switching to another service",
    es: "Cambio a otro servicio",
    fr: "Passage à un autre service",
    de: "Wechsel zu einem anderen Dienst",
    it: "Passaggio a un altro servizio",
    ja: "別のサービスへの移行",
    ko: "다른 서비스로 전환",
    zh: "切换到其他服务",
    ar: "التحول إلى خدمة أخرى",
    ru: "Переход на другой сервис",
    hi: "किसी अन्य सेवा पर स्विच करना",
  },
  dissatisfied: {
    pt: "Insatisfação com o serviço",
    en: "Dissatisfaction with the service",
    es: "Insatisfacción con el servicio",
    fr: "Insatisfaction du service",
    de: "Unzufriedenheit mit dem Dienst",
    it: "Insoddisfazione del servizio",
    ja: "サービスへの不満",
    ko: "서비스에 대한 불만족",
    zh: "对服务不满意",
    ar: "عدم الرضا عن الخدمة",
    ru: "Неудовлетворённость сервисом",
    hi: "सेवा से असंतोष",
  },
  technical: {
    pt: "Problemas técnicos",
    en: "Technical problems",
    es: "Problemas técnicos",
    fr: "Problèmes techniques",
    de: "Technische Probleme",
    it: "Problemi tecnici",
    ja: "技術的な問題",
    ko: "기술적 문제",
    zh: "技术问题",
    ar: "مشاكل تقنية",
    ru: "Технические проблемы",
    hi: "तकनीकी समस्याएं",
  },
  other: {
    pt: "Outro motivo",
    en: "Other reason",
    es: "Otro motivo",
    fr: "Autre raison",
    de: "Anderer Grund",
    it: "Altro motivo",
    ja: "その他の理由",
    ko: "기타 이유",
    zh: "其他原因",
    ar: "سبب آخر",
    ru: "Другая причина",
    hi: "अन्य कारण",
  },
};

module.exports = async (req, res) => {
  // Allow only POST
  if (req.method !== "POST") {
    return res.status(405).json({ success: false, error: "Method not allowed" });
  }

  // CORS headers
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  try {
    const { name, email, reason, language, userAgent, submittedUrl, submittedAt, confirmed } = req.body;

    // Validation
    const errors = {};
    if (!name || typeof name !== "string" || !name.trim()) {
      errors.name = "Name is required";
    }
    if (!email || typeof email !== "string" || !email.trim()) {
      errors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.email = "Invalid email address";
    }
    if (!reason || typeof reason !== "string" || !reason.trim()) {
      errors.reason = "Reason is required";
    }

    if (Object.keys(errors).length > 0) {
      return res.status(400).json({ success: false, error: "Invalid request data", details: errors });
    }

    if (!RESEND_API_KEY) {
      console.error("[API] RESEND_API_KEY is not configured");
      return res.status(500).json({ success: false, error: "Email service not configured" });
    }

    const cleanName = name.trim();
    const cleanEmail = email.trim();
    const cleanReason = reason.trim();
    const lang = language || "unknown";
    const now = submittedAt || new Date().toISOString();
    const url = submittedUrl || "";
    const ua = userAgent || "";

    // Map reason to label
    const reasonMap = reasonLabels[cleanReason];
    const reasonLabel = reasonMap
      ? (reasonMap[lang] || reasonMap.en || cleanReason)
      : cleanReason;

    // Build HTML email
    const htmlBody = `
<div style="font-family: 'Space Grotesk', 'Inter', sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; color: #e2e8f0; background: #0a0f1e; border-radius: 12px;">
  <div style="text-align: center; margin-bottom: 24px;">
    <div style="width: 48px; height: 48px; background: linear-gradient(135deg, #fbbf24, #f97316); border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; margin-bottom: 12px;">
      <span style="color: #fff; font-size: 20px;">&#9733;</span>
    </div>
    <h1 style="color: #fff; font-size: 22px; margin: 0; letter-spacing: -0.02em;">Portal Orbita &mdash; Account Deletion</h1>
  </div>

  <div style="background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 20px; margin-bottom: 16px;">
    <h2 style="color: #fbbf24; font-size: 16px; margin: 0 0 16px 0;">Account Deletion Request</h2>

    <table style="width: 100%; border-collapse: collapse;">
      <tr>
        <td style="padding: 8px 0; color: #94a3b8; font-size: 13px; width: 140px;">Full Name</td>
        <td style="padding: 8px 0; color: #f1f5f9; font-size: 13px; font-weight: 500;">${cleanName}</td>
      </tr>
      <tr>
        <td style="padding: 8px 0; color: #94a3b8; font-size: 13px;">Account Email</td>
        <td style="padding: 8px 0; color: #f1f5f9; font-size: 13px; font-weight: 500;">${cleanEmail}</td>
      </tr>
      <tr>
        <td style="padding: 8px 0; color: #94a3b8; font-size: 13px;">Reason</td>
        <td style="padding: 8px 0; color: #f1f5f9; font-size: 13px; font-weight: 500;">${reasonLabel}</td>
      </tr>
      <tr>
        <td style="padding: 8px 0; color: #94a3b8; font-size: 13px;">Language</td>
        <td style="padding: 8px 0; color: #f1f5f9; font-size: 13px; font-weight: 500;">${lang.toUpperCase()}</td>
      </tr>
      <tr>
        <td style="padding: 8px 0; color: #94a3b8; font-size: 13px;">Confirmed</td>
        <td style="padding: 8px 0; color: ${confirmed ? "#4ade80" : "#ef4444"}; font-size: 13px; font-weight: 500;">${confirmed ? "Yes" : "No"}</td>
      </tr>
    </table>
  </div>

  <div style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08); border-radius: 10px; padding: 16px; font-size: 12px; color: #64748b;">
    <p style="margin: 0 0 8px 0;">Technical Details:</p>
    <p style="margin: 0 0 4px 0;">Submitted: ${now}</p>
    <p style="margin: 0 0 4px 0;">Source URL: ${url}</p>
    <p style="margin: 0;">User Agent: ${ua}</p>
  </div>
</div>`;

    const plainText = `
Account Deletion Request — Portal Orbita
==========================================

Full Name: ${cleanName}
Account Email: ${cleanEmail}
Reason: ${reasonLabel}
Language: ${lang}
Confirmed: ${confirmed ? "Yes" : "No"}

Submitted: ${now}
Source URL: ${url}
User Agent: ${ua}
`.trim();

    // Send via Resend
    const resendPayload = {
      from: "Portal Orbita <onboarding@resend.dev>",
      to: [SUPPORT_EMAIL],
      subject: `[Portal Orbita] Account Deletion Request — ${cleanEmail}`,
      html: htmlBody,
      text: plainText,
      reply_to: cleanEmail,
    };

    const resendResp = await fetch(RESEND_API_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(resendPayload),
    });

    if (!resendResp.ok) {
      const errorBody = await resendResp.text().catch(() => "");
      console.error(`[API] Resend error: ${resendResp.status} — ${errorBody}`);
      return res.status(500).json({ success: false, error: "Failed to send email" });
    }

    const resendData = await resendResp.json();
    console.log(`[API] Email sent successfully. ID: ${resendData.id}`);

    return res.status(200).json({
      success: true,
      message: "Deletion request sent successfully",
    });
  } catch (err) {
    console.error("[API] Unexpected error:", err);
    return res.status(500).json({ success: false, error: "Internal server error" });
  }
};
