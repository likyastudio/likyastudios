import { useState } from "react";
import { useT } from "@/lib/i18n";
import { useServerFn } from "@tanstack/react-start";
import { submitContactRequest } from "@/lib/contact.functions";

const serviceOptions = [
  { value: "mobil-uygulama", label: "Mobil Uygulama" },
  { value: "oyun", label: "Oyun" },
  { value: "web-sitesi", label: "Web Sitesi" },
  { value: "danismanlik", label: "Fikir / Danışmanlık" },
  { value: "diger", label: "Diğer" },
];

const budgetOptions = [
  { value: "50k-alti", label: "50.000 ₺ altı" },
  { value: "50k-150k", label: "50.000 – 150.000 ₺" },
  { value: "150k-ustu", label: "150.000 ₺ üzeri" },
  { value: "belirsiz", label: "Henüz bilmiyorum" },
];

const inputClass =
  "w-full rounded-xl border-0 bg-frost/5 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 ring-1 ring-frost/15 transition outline-none focus:ring-2 focus:ring-glow/60";

export function ContactSection() {
  const t = useT();
  const submit = useServerFn(submitContactRequest);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [serviceType, setServiceType] = useState("mobil-uygulama");
  const [budget, setBudget] = useState("belirsiz");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    setError(null);
    try {
      await submit({ data: { name, email, phone, serviceType, budget, message } });
      setStatus("sent");
    } catch (err) {
      setStatus("idle");
      setError(
        t(
          err instanceof Error && err.message
            ? err.message
            : "Talebiniz gönderilemedi. Lütfen tekrar deneyin.",
        ),
      );
    }
  }

  return (
    <section id="iletisim" className="relative z-10 mx-auto max-w-6xl scroll-mt-20 px-6 py-24">
      <div className="mb-12">
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-ember/80">
          {t("08 — İletişim")}
        </span>
        <h2 className="mt-2 max-w-2xl font-display text-4xl font-semibold tracking-tight md:text-6xl">
          {t("Yeni bir şey üretelim.")}
        </h2>
        <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">
          {t(
            "Uygulama, oyun ya da yeni bir dijital ürün — formu doldurun; talebinizi inceleyip size e-posta yoluyla dönüş yapalım.",
          )}
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-3xl bg-panel/60 p-8 ring-1 ring-frost/10 backdrop-blur-xl">
          <h3 className="font-display text-lg font-semibold">{t("Doğrudan ulaşın")}</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            {t(
              "Form doldurmak istemiyorsanız e-posta yazın; ya da aşağıdaki bilgilerle bize ulaşın.",
            )}
          </p>
          <div className="mt-6 space-y-5 text-sm">
            <div>
              <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                {t("E-posta")}
              </span>
              <a
                href="mailto:likyastudios@gmail.com"
                className="mt-1 block text-foreground transition hover:text-glow"
              >
                likyastudios@gmail.com
              </a>
            </div>
            <div>
              <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                {t("Konum")}
              </span>
              <span className="mt-1 block text-foreground">Antalya, Türkiye</span>
            </div>
            <div>
              <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                {t("Dönüş Süresi")}
              </span>
              <span className="mt-1 block text-foreground">{t("E-posta ile yanıt")}</span>
            </div>
          </div>
        </div>

        <div className="rounded-3xl bg-panel/70 p-8 ring-1 ring-frost/10 backdrop-blur-xl">
          {status === "sent" ? (
            <div className="flex h-full flex-col items-center justify-center py-10 text-center">
              <div className="mb-5 grid h-14 w-14 place-items-center rounded-full bg-mint/15 ring-1 ring-mint/40">
                <svg
                  className="h-7 w-7 text-mint"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="font-display text-xl font-semibold">{t("Talebiniz bize ulaştı")}</h3>
              <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted-foreground">
                {t("Teşekkürler")} {name.split(" ")[0]}.{" "}
                {t("En kısa sürede e-posta yoluyla size dönüş yapacağız.")}
              </p>
              <button
                type="button"
                onClick={() => {
                  setStatus("idle");
                  setName("");
                  setEmail("");
                  setPhone("");
                  setMessage("");
                }}
                className="mt-6 rounded-full bg-frost/5 px-5 py-2.5 text-sm font-medium text-foreground ring-1 ring-frost/15 transition hover:bg-frost/10"
              >
                {t("Yeni talep gönder")}
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <label htmlFor="cf-name" className="block">
                  <span className="mb-1.5 block text-xs font-medium text-muted-foreground">
                    {t("Ad Soyad *")}
                  </span>
                  <input
                    id="cf-name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={t("Adınız")}
                    className={inputClass}
                    maxLength={80}
                  />
                </label>
                <label htmlFor="cf-email" className="block">
                  <span className="mb-1.5 block text-xs font-medium text-muted-foreground">
                    {t("E-posta *")}
                  </span>
                  <input
                    id="cf-email"
                    required
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={t("ornek@mail.com")}
                    className={inputClass}
                  />
                </label>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <label htmlFor="cf-phone" className="block">
                  <span className="mb-1.5 block text-xs font-medium text-muted-foreground">
                    {t("Telefon (opsiyonel)")}
                  </span>
                  <input
                    id="cf-phone"
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+90 5xx xxx xx xx"
                    className={inputClass}
                    maxLength={30}
                  />
                </label>
                <label htmlFor="cf-service" className="block">
                  <span className="mb-1.5 block text-xs font-medium text-muted-foreground">
                    {t("Konu")}
                  </span>
                  <select
                    id="cf-service"
                    value={serviceType}
                    onChange={(e) => setServiceType(e.target.value)}
                    className={inputClass}
                  >
                    {serviceOptions.map((o) => (
                      <option key={o.value} value={o.value} className="bg-background">
                        {t(o.label)}
                      </option>
                    ))}
                  </select>
                </label>
              </div>

              <label htmlFor="cf-budget" className="block">
                <span className="mb-1.5 block text-xs font-medium text-muted-foreground">
                  {t("Bütçe (opsiyonel)")}
                </span>
                <select
                    id="cf-budget"
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  className={inputClass}
                >
                  {budgetOptions.map((o) => (
                    <option key={o.value} value={o.value} className="bg-background">
                      {t(o.label)}
                    </option>
                  ))}
                </select>
              </label>

              <label htmlFor="cf-message" className="block">
                <span className="mb-1.5 block text-xs font-medium text-muted-foreground">
                  {t("Projenizden bahsedin *")}
                </span>
                <textarea
                    id="cf-message"
                  required
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder={t(
                    "Fikrinizi, hedeflerinizi ve varsa örnek uygulamaları kısaca anlatın…",
                  )}
                  className={`${inputClass} resize-none`}
                  maxLength={2000}
                />
              </label>

              {error && (
                <p className="rounded-xl bg-ember/10 px-4 py-3 text-sm text-ember ring-1 ring-ember/30">
                  {error}
                </p>
              )}

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background transition hover:bg-frost disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status === "sending" ? t("Gönderiliyor…") : t("Talebi Gönder")}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
