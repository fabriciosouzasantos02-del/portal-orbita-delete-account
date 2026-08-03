// Portal Orbita — Delete Account Page
// Design: Dark cosmic theme matching Portal Orbita brand identity
// Features: i18n auto-detection, Google Play compliant, API email submission via Resend

import { useState, useEffect, useRef } from "react";
import { useAuth } from "@/_core/hooks/useAuth";
import { getTranslations, getLocale, isRTL } from "@/lib/i18n";
import type { Translations } from "@/lib/i18n";
import { motion, AnimatePresence } from "framer-motion";
import {
  AlertTriangle,
  CheckCircle2,
  Trash2,
  FileText,
  Mail,
  Clock,
  ShieldCheck,
  XCircle,
  ChevronDown,
  Star,
  Globe,
} from "lucide-react";

// ─── Starfield background ──────────────────────────────────────────────────
function Starfield() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let animId: number;
    const stars: { x: number; y: number; r: number; o: number; s: number }[] =
      [];
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);
    for (let i = 0; i < 180; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.4 + 0.3,
        o: Math.random(),
        s: Math.random() * 0.005 + 0.002,
      });
    }
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      stars.forEach((st) => {
        st.o += st.s;
        if (st.o > 1 || st.o < 0) st.s *= -1;
        ctx.beginPath();
        ctx.arc(st.x, st.y, st.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(200,210,255,${st.o * 0.7})`;
        ctx.fill();
      });
      animId = requestAnimationFrame(draw);
    };
    draw();
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);
  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.55 }}
    />
  );
}

// ─── Step card ─────────────────────────────────────────────────────────────
function StepCard({
  number,
  title,
  desc,
  delay,
}: {
  number: number;
  title: string;
  desc: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="relative flex gap-4 p-5 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm hover:border-amber-400/40 hover:bg-white/8 transition-all duration-300"
    >
      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-amber-400/20 border border-amber-400/50 flex items-center justify-center text-amber-300 font-bold text-sm">
        {number}
      </div>
      <div>
        <h3 className="font-semibold text-white mb-1">{title}</h3>
        <p className="text-sm text-slate-400 leading-relaxed">{desc}</p>
      </div>
    </motion.div>
  );
}

// ─── Main page ─────────────────────────────────────────────────────────────
export default function Home() {
  // The useAuth hook provides authentication state.
  // To implement login/logout, call logout(), or start login from an event
  // handler: onClick={() => startLogin()} (imported from "@/const"). Never call
  // startLogin() during render (no href={startLogin()}) — it mints a one-time
  // nonce cookie and must run only at the moment of navigation.
  let { user, loading, error, isAuthenticated, logout } = useAuth();

  const [t, setT] = useState<Translations>(getTranslations());
  const [locale, setLocale] = useState(getLocale());
  const [rtl, setRtl] = useState(false);

  // Form state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [reason, setReason] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [selectOpen, setSelectOpen] = useState(false);

  useEffect(() => {
    const translations = getTranslations();
    const loc = getLocale();
    setT(translations);
    setLocale(loc);
    setRtl(isRTL(loc));
    document.title = translations.pageTitle;
    document.documentElement.lang = loc;
    document.documentElement.dir = isRTL(loc) ? "rtl" : "ltr";
  }, []);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!name.trim()) newErrors.name = t.formRequired;
    if (!email.trim()) newErrors.email = t.formRequired;
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      newErrors.email = t.formEmailInvalid;
    if (!reason) newErrors.reason = t.formRequired;
    if (!confirmed) newErrors.confirmed = t.formConfirmRequired;
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("submitting");

    try {
      const response = await fetch("/api/enviar", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          reason,
          language: locale,
          userAgent: navigator.userAgent,
          submittedUrl: window.location.href,
          submittedAt: new Date().toISOString(),
          confirmed,
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const fadeUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 },
  };

  return (
    <div
      className="min-h-screen bg-[#070b14] text-white relative overflow-x-hidden"
      dir={rtl ? "rtl" : "ltr"}
    >
      {/* Background */}
      <Starfield />
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full bg-indigo-900/20 blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[400px] rounded-full bg-purple-900/15 blur-[100px]" />
      </div>

      {/* ── HEADER ── */}
      <header className="relative z-10 border-b border-white/8 bg-[#070b14]/80 backdrop-blur-xl">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            {/* Logo mark */}
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center shadow-lg shadow-amber-500/30">
              <Star className="w-4 h-4 text-white fill-white" />
            </div>
            <div>
              <span className="font-bold text-white tracking-tight text-lg leading-none block">
                PORTAL ORBITA
              </span>
              <span className="text-[10px] text-slate-500 uppercase tracking-widest leading-none">
                {t.developerName}
              </span>
            </div>
          </div>
          <div className="flex items-center gap-2 text-xs text-slate-500">
            <Globe className="w-3.5 h-3.5" />
            <span className="uppercase">{locale}</span>
          </div>
        </div>
      </header>

      {/* ── HERO ── */}
      <section className="relative z-10 pt-20 pb-16 px-4 sm:px-6 text-center overflow-hidden">
        <OrbitDecoration className="absolute top-8 left-1/2 -translate-x-1/2 w-[560px] opacity-80" />
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
          className="max-w-3xl mx-auto"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-medium mb-8">
            <Trash2 className="w-3.5 h-3.5" />
            <span>{t.appName} — Account Deletion</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6 leading-none">
            <span className="bg-gradient-to-b from-white to-slate-400 bg-clip-text text-transparent">
              {t.heroTitle}
            </span>
          </h1>
          <p className="text-lg text-slate-400 max-w-xl mx-auto leading-relaxed">
            {t.heroSubtitle}
          </p>

          {/* Scroll cue */}
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="mt-12 flex justify-center"
          >
            <ChevronDown className="w-6 h-6 text-slate-600" />
          </motion.div>
        </motion.div>
      </section>

      {/* ── WARNING BANNER ── */}
      <section className="relative z-10 px-4 sm:px-6 pb-12">
        <motion.div
          {...fadeUp}
          className="max-w-3xl mx-auto p-5 rounded-2xl border border-amber-500/30 bg-amber-500/8 backdrop-blur-sm"
        >
          <div className="flex gap-3">
            <AlertTriangle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
            <div>
              <h2 className="font-bold text-amber-300 mb-2">{t.warningTitle}</h2>
              <p className="text-sm text-amber-200/70 mb-3">{t.warningDesc}</p>
              <ul className="space-y-1.5">
                {t.warningItems.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-amber-200/60">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-amber-400/60 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ── HOW TO STEPS ── */}
      <section className="relative z-10 px-4 sm:px-6 pb-20">
        <div className="max-w-3xl mx-auto">
          <motion.div {...fadeUp} className="text-center mb-10">
            <p className="text-xs uppercase tracking-widest text-amber-400/70 mb-2">
              Step by Step
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              {t.stepsTitle}
            </h2>
            <p className="text-slate-400 mt-2 text-sm">{t.stepsSubtitle}</p>
          </motion.div>
          <div className="grid sm:grid-cols-2 gap-4">
            <StepCard number={1} title={t.step1Title} desc={t.step1Desc} delay={0} />
            <StepCard number={2} title={t.step2Title} desc={t.step2Desc} delay={0.1} />
            <StepCard number={3} title={t.step3Title} desc={t.step3Desc} delay={0.2} />
            <StepCard number={4} title={t.step4Title} desc={t.step4Desc} delay={0.3} />
          </div>
        </div>
      </section>

      {/* ── DATA TRANSPARENCY ── */}
      <section className="relative z-10 px-4 sm:px-6 pb-20">
        <div className="max-w-3xl mx-auto">
          <motion.div {...fadeUp} className="text-center mb-10">
            <p className="text-xs uppercase tracking-widest text-indigo-400/70 mb-2">
              Data Policy
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              {t.dataTitle}
            </h2>
            <p className="text-slate-400 mt-2 text-sm">{t.dataSubtitle}</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-5 mb-6">
            {/* Deleted */}
            <motion.div
              {...fadeUp}
              className="p-5 rounded-2xl border border-red-500/20 bg-red-500/5 backdrop-blur-sm"
            >
              <div className="flex items-center gap-2 mb-4">
                <XCircle className="w-5 h-5 text-red-400" />
                <h3 className="font-semibold text-red-300">
                  {t.deletedDataTitle}
                </h3>
              </div>
              <ul className="space-y-2">
                {t.deletedDataItems.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-slate-400">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-400/60 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Retained */}
            <motion.div
              {...fadeUp}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="p-5 rounded-2xl border border-indigo-500/20 bg-indigo-500/5 backdrop-blur-sm"
            >
              <div className="flex items-center gap-2 mb-4">
                <Clock className="w-5 h-5 text-indigo-400" />
                <h3 className="font-semibold text-indigo-300">
                  {t.retainedDataTitle}
                </h3>
              </div>
              <ul className="space-y-2">
                {t.retainedDataItems.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-slate-400">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-indigo-400/60 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Retention period */}
          <motion.div
            {...fadeUp}
            className="p-5 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm flex gap-3"
          >
            <ShieldCheck className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-semibold text-green-300 mb-1">
                {t.retentionPeriodTitle}
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                {t.retentionPeriodDesc}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── FORM ── */}
      <section className="relative z-10 px-4 sm:px-6 pb-24" id="form">
        <div className="max-w-2xl mx-auto">
          <motion.div {...fadeUp} className="text-center mb-10">
            <p className="text-xs uppercase tracking-widest text-red-400/70 mb-2">
              Request
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              {t.formTitle}
            </h2>
            <p className="text-slate-400 mt-2 text-sm">{t.formSubtitle}</p>
          </motion.div>

          <AnimatePresence mode="wait">
            {status === "success" ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="p-8 rounded-2xl border border-green-500/30 bg-green-500/8 text-center"
              >
                <CheckCircle2 className="w-14 h-14 text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-green-300 mb-2">
                  {t.formSuccess}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed max-w-md mx-auto">
                  {t.formSuccessDesc}
                </p>
                <div className="mt-6 p-3 rounded-xl bg-white/5 border border-white/10 inline-flex items-center gap-2 text-sm text-slate-400">
                  <Mail className="w-4 h-4 text-amber-400" />
                  <span>unterstutzung.service@gmail.com</span>
                </div>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                onSubmit={handleSubmit}
                className="p-6 sm:p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm space-y-5"
              >
                {/* Name */}
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-1.5">
                    {t.formName} <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                      if (errors.name) setErrors((p) => ({ ...p, name: "" }));
                    }}
                    placeholder={t.formNamePlaceholder}
                    className={`w-full px-4 py-3 rounded-xl bg-white/8 border text-white placeholder-slate-600 text-sm transition-all duration-200 outline-none focus:ring-2 focus:ring-amber-400/40 ${
                      errors.name
                        ? "border-red-500/60 focus:border-red-500"
                        : "border-white/12 focus:border-amber-400/50"
                    }`}
                  />
                  {errors.name && (
                    <p className="mt-1 text-xs text-red-400">{errors.name}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-1.5">
                    {t.formEmail} <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (errors.email) setErrors((p) => ({ ...p, email: "" }));
                    }}
                    placeholder={t.formEmailPlaceholder}
                    className={`w-full px-4 py-3 rounded-xl bg-white/8 border text-white placeholder-slate-600 text-sm transition-all duration-200 outline-none focus:ring-2 focus:ring-amber-400/40 ${
                      errors.email
                        ? "border-red-500/60 focus:border-red-500"
                        : "border-white/12 focus:border-amber-400/50"
                    }`}
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs text-red-400">{errors.email}</p>
                  )}
                </div>

                {/* Reason custom select */}
                <div className="relative">
                  <label className="block text-sm font-medium text-slate-300 mb-1.5">
                    {t.formReason} <span className="text-red-400">*</span>
                  </label>
                  <button
                    type="button"
                    onClick={() => setSelectOpen((p) => !p)}
                    className={`w-full px-4 py-3 rounded-xl bg-white/8 border text-sm text-left flex items-center justify-between transition-all duration-200 outline-none focus:ring-2 focus:ring-amber-400/40 ${
                      errors.reason
                        ? "border-red-500/60"
                        : "border-white/12 focus:border-amber-400/50"
                    } ${reason ? "text-white" : "text-slate-600"}`}
                  >
                    <span>
                      {reason
                        ? t.formReasonOptions.find((o) => o.value === reason)
                            ?.label
                        : t.formReasonPlaceholder}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-slate-500 transition-transform duration-200 ${
                        selectOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <AnimatePresence>
                    {selectOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -8, scale: 0.97 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -8, scale: 0.97 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-full mt-1 left-0 right-0 z-50 rounded-xl border border-white/15 bg-[#0d1425]/95 backdrop-blur-xl shadow-2xl overflow-hidden"
                      >
                        {t.formReasonOptions.map((opt) => (
                          <button
                            key={opt.value}
                            type="button"
                            onClick={() => {
                              setReason(opt.value);
                              setSelectOpen(false);
                              if (errors.reason)
                                setErrors((p) => ({ ...p, reason: "" }));
                            }}
                            className={`w-full text-left px-4 py-2.5 text-sm transition-colors duration-150 ${
                              reason === opt.value
                                ? "bg-amber-400/15 text-amber-300"
                                : "text-slate-300 hover:bg-white/8"
                            }`}
                          >
                            {opt.label}
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                  {errors.reason && (
                    <p className="mt-1 text-xs text-red-400">{errors.reason}</p>
                  )}
                </div>

                {/* Confirmation checkbox */}
                <div
                  className={`p-4 rounded-xl border transition-colors duration-200 ${
                    errors.confirmed
                      ? "border-red-500/40 bg-red-500/5"
                      : "border-white/10 bg-white/3"
                  }`}
                >
                  <label className="flex items-start gap-3 cursor-pointer group">
                    <div
                      onClick={() => {
                        setConfirmed((p) => !p);
                        if (errors.confirmed)
                          setErrors((p) => ({ ...p, confirmed: "" }));
                      }}
                      className={`mt-0.5 w-5 h-5 rounded-md border-2 flex-shrink-0 flex items-center justify-center transition-all duration-200 ${
                        confirmed
                          ? "bg-amber-400 border-amber-400"
                          : "border-white/30 bg-transparent group-hover:border-amber-400/50"
                      }`}
                    >
                      {confirmed && (
                        <svg
                          className="w-3 h-3 text-black"
                          fill="none"
                          viewBox="0 0 12 12"
                        >
                          <path
                            d="M2 6l3 3 5-5"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      )}
                    </div>
                    <span className="text-sm text-slate-400 leading-relaxed">
                      {t.formConfirm}
                    </span>
                  </label>
                  {errors.confirmed && (
                    <p className="mt-2 text-xs text-red-400 ml-8">
                      {errors.confirmed}
                    </p>
                  )}
                </div>

                {/* Error state */}
                {status === "error" && (
                  <div className="p-3 rounded-xl border border-red-500/30 bg-red-500/8 flex gap-2 text-sm text-red-300">
                    <AlertTriangle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">{t.formError}</p>
                      <p className="text-xs text-red-400/70 mt-0.5">
                        {t.formErrorDesc}
                      </p>
                    </div>
                  </div>
                )}

                {/* Submit */}
                <motion.button
                  type="submit"
                  disabled={status === "submitting"}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 text-white font-semibold text-sm transition-all duration-200 shadow-lg shadow-red-500/20 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {status === "submitting" ? (
                    <>
                      <svg
                        className="animate-spin w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                        />
                      </svg>
                      {t.formSubmitting}
                    </>
                  ) : (
                    <>
                      <Trash2 className="w-4 h-4" />
                      {t.formSubmit}
                    </>
                  )}
                </motion.button>

                {/* Direct email fallback */}
                <p className="text-center text-xs text-slate-600">
                  {locale === "pt"
                    ? "Ou envie diretamente para"
                    : locale === "es"
                    ? "O envíe directamente a"
                    : locale === "fr"
                    ? "Ou envoyez directement à"
                    : locale === "de"
                    ? "Oder senden Sie direkt an"
                    : "Or send directly to"}{" "}
                  <a
                    href="mailto:unterstutzung.service@gmail.com"
                    className="text-amber-400 hover:text-amber-300 transition-colors underline underline-offset-2"
                  >
                    unterstutzung.service@gmail.com
                  </a>
                </p>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="relative z-10 border-t border-white/8 bg-[#070b14]/80 backdrop-blur-xl">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center">
                <Star className="w-3 h-3 text-white fill-white" />
              </div>
              <span className="text-sm font-semibold text-slate-400">
                PORTAL ORBITA
              </span>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-slate-600">
              <a
                href="mailto:unterstutzung.service@gmail.com"
                className="hover:text-slate-400 transition-colors flex items-center gap-1"
              >
                <Mail className="w-3 h-3" />
                {t.footerSupport}
              </a>
              <span>·</span>
              <a
                href="https://portal-orbita.blogspot.com/2026/08/privacy-policy.html"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-slate-400 transition-colors flex items-center gap-1"
              >
                <FileText className="w-3 h-3" />
                {t.footerPrivacy}
              </a>
              <span>·</span>
              <a
                href="https://portal-orbita.blogspot.com/2026/08/portal-terms-of-use.html"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-slate-400 transition-colors"
              >
                {t.footerTerms}
              </a>
            </div>
            <p className="text-xs text-slate-700">
              © {new Date().getFullYear()} {t.developerName} {t.footerRights}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
// Design: Dark Celestial Utility — deep navy, solar-gold brand accent, orbit geometry

// ─── Orbit ring SVG decoration ─────────────────────────────────────────────
function OrbitDecoration({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`pointer-events-none select-none ${className}`}
      viewBox="0 0 400 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <ellipse cx="200" cy="80" rx="190" ry="60" stroke="rgba(251,191,36,0.10)" strokeWidth="1" />
      <ellipse cx="200" cy="80" rx="150" ry="45" stroke="rgba(251,191,36,0.06)" strokeWidth="0.8" />
      <circle cx="200" cy="20" r="5" fill="rgba(251,191,36,0.30)" />
      <circle cx="388" cy="88" r="3" fill="rgba(251,191,36,0.18)" />
      <circle cx="14" cy="75" r="2.5" fill="rgba(251,191,36,0.12)" />
      <circle cx="200" cy="140" r="2" fill="rgba(251,191,36,0.10)" />
    </svg>
  );
}
