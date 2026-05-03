import { useState } from "react";
import { Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import ScrollReveal from "./ScrollReveal";

interface ContactFormProps {
  formContext?: "vocal" | "web" | "global";
}

const interestOptions: Record<string, { value: string; label: string }[]> = {
  vocal: [
    { value: "Vocal AgencIA (Réceptionniste IA)", label: "Vocal AgencIA (Réceptionniste IA)" },
    { value: "Les deux, Vocal et Web AgencIA", label: "Les deux, Vocal et Web AgencIA" },
    { value: "Autre", label: "Autre" },
  ],
  web: [
    { value: "Web AgencIA (Site Haute Performance)", label: "Web AgencIA (Site Haute Performance)" },
    { value: "Les deux, Vocal et Web AgencIA", label: "Les deux, Vocal et Web AgencIA" },
    { value: "Autre", label: "Autre" },
  ],
  global: [
    { value: "Vocal AgencIA (Réceptionniste IA)", label: "Vocal AgencIA (Réceptionniste IA)" },
    { value: "Web AgencIA (Site Haute Performance)", label: "Web AgencIA (Site Haute Performance)" },
    { value: "Les deux, Vocal et Web AgencIA", label: "Les deux, Vocal et Web AgencIA" },
    { value: "Autre", label: "Autre" },
  ],
};

const fieldClass =
  "rounded-xl bg-secondary/60 border border-border/60 focus-visible:border-primary/60 focus-visible:ring-2 focus-visible:ring-primary/30 transition-colors";

const selectClass =
  "flex h-10 w-full rounded-xl border border-border/60 bg-secondary/60 px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/60 focus:ring-2 focus:ring-primary/30 transition-colors";

const ContactForm = ({ formContext = "global" }: ContactFormProps) => {
  const [secteur, setSecteur] = useState("");
  const [taille, setTaille] = useState("");
  const [interest, setInterest] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [formError, setFormError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const options = interestOptions[formContext];

  // Validation stricte : local@domaine.tld (TLD 2+ lettres, pas de double point)
  const EMAIL_REGEX = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9-]+(?:\.[A-Za-z0-9-]+)*\.[A-Za-z]{2,}$/;

  const validateEmail = (value: string) => {
    const trimmed = value.trim();
    if (!trimmed) return "L'adresse mail est requise.";
    if (trimmed.length > 255) return "L'adresse mail est trop longue.";
    if (trimmed.includes("..")) return "Veuillez saisir une adresse mail valide (ex : nom@domaine.com).";
    if (!EMAIL_REGEX.test(trimmed)) return "Veuillez saisir une adresse mail valide (ex : nom@domaine.com).";
    return "";
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    if (emailError) setEmailError(validateEmail(value));
  };

  const handleEmailBlur = () => {
    setEmailError(validateEmail(email));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormError("");

    const form = e.currentTarget;
    const fd = new FormData(form);

    const requiredFields: { name: string; label: string }[] = [
      { name: "nom_prenom", label: "Nom / Prénom" },
      { name: "email", label: "Adresse mail" },
      { name: "telephone", label: "Téléphone" },
      { name: "entreprise", label: "Nom de l'entreprise" },
      { name: "role", label: "Votre rôle dans l'entreprise" },
      { name: "secteur", label: "Secteur de l'entreprise" },
      { name: "taille_entreprise", label: "Taille de l'entreprise" },
      { name: "interet", label: "Je suis intéressé par" },
    ];

    const missing = requiredFields.filter((f) => !String(fd.get(f.name) ?? "").trim());
    if (missing.length > 0) {
      setFormError(`Merci de remplir tous les champs obligatoires : ${missing.map((m) => m.label).join(", ")}.`);
      return;
    }

    const error = validateEmail(email);
    if (error) {
      setEmailError(error);
      setFormError("Veuillez corriger l'adresse mail avant d'envoyer.");
      return;
    }

    try {
      const res = await fetch("https://formspree.io/f/mpqoopyb", {
        method: "POST",
        body: fd,
        headers: { Accept: "application/json" },
      });
      if (res.ok) setSubmitted(true);
      else setFormError("Une erreur est survenue lors de l'envoi. Merci de réessayer.");
    } catch {
      setFormError("Une erreur est survenue lors de l'envoi. Merci de réessayer.");
    }
  };

  return (
    <section id="contact" className="py-20 sm:py-28">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <p className="text-sm font-medium text-primary text-center mb-3 tracking-wide uppercase">Contact</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-center tracking-tight mb-4">
            Réservez votre <span className="text-gradient">démo gratuite</span>
          </h2>
          <p className="text-center text-muted-foreground mb-14 max-w-xl mx-auto">
            Chaque entreprise est unique. Parlons de vos besoins pour créer votre solution sur-mesure.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <div className="max-w-xl mx-auto">
            {submitted ? (
              <div
                className="service-card text-center py-16"
                style={{ ["--card-glow" as string]: "hsl(190 80% 50% / 0.35)" }}
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#00d2ff] to-[#3a7bd5] flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Send className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">Demande envoyée !</h3>
                <p className="text-muted-foreground text-sm">
                  Merci ! Votre message a été envoyé. Nous vous répondrons sous 24h.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                noValidate
                className="service-card group space-y-5"
                style={{ ["--card-glow" as string]: "hsl(217 91% 53% / 0.3)" }}
              >
                <p className="text-xs text-muted-foreground -mt-1">
                  Les champs marqués d'un <span className="text-destructive font-semibold">*</span> sont obligatoires pour l'envoi du message.
                </p>

                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">
                    Nom / Prénom <span className="text-destructive">*</span>
                  </label>
                  <Input name="nom_prenom" placeholder="Jean Dupont" required maxLength={100} className={fieldClass} />
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Adresse mail</label>
                  <Input
                    name="email"
                    type="email"
                    inputMode="email"
                    autoComplete="email"
                    placeholder="jean.dupont@exemple.com"
                    required
                    maxLength={255}
                    value={email}
                    onChange={handleEmailChange}
                    onBlur={handleEmailBlur}
                    pattern="[A-Za-z0-9._%+\-]+@[A-Za-z0-9.\-]+\.[A-Za-z]{2,}"
                    aria-invalid={!!emailError}
                    aria-describedby={emailError ? "email-error" : undefined}
                    className={`${fieldClass} ${emailError ? "border-destructive focus-visible:border-destructive focus-visible:ring-destructive/30" : ""}`}
                  />
                  {emailError && (
                    <p id="email-error" className="mt-1.5 text-xs text-destructive">
                      {emailError}
                    </p>
                  )}
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Téléphone</label>
                  <Input name="telephone" type="tel" placeholder="06 12 34 56 78" required maxLength={30} className={fieldClass} />
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Nom de l'entreprise</label>
                  <Input name="entreprise" placeholder="Salon Élégance" required maxLength={150} className={fieldClass} />
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Votre rôle dans l'entreprise</label>
                  <Input name="role" placeholder="Gérant, Directeur, Responsable…" required maxLength={100} className={fieldClass} />
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Secteur de l'entreprise</label>
                  <Input
                    name="secteur"
                    value={secteur}
                    onChange={(e) => setSecteur(e.target.value)}
                    placeholder="Ex : Coiffure, Restauration, Santé…"
                    required
                    maxLength={150}
                    className={fieldClass}
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">
                    Site web entreprise <span className="text-muted-foreground font-normal">(laissez vide si vous n'en avez pas)</span>
                  </label>
                  <Input name="site_web" type="url" placeholder="https://…" maxLength={255} className={fieldClass} />
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Taille de l'entreprise</label>
                  <select
                    name="taille_entreprise"
                    value={taille}
                    onChange={(e) => setTaille(e.target.value)}
                    required
                    className={selectClass}
                  >
                    <option value="" disabled>Sélectionnez la taille</option>
                    <option value="Moins de 10">Moins de 10</option>
                    <option value="10-50">10 - 50</option>
                    <option value="50-100">50 - 100</option>
                    <option value="100-500">100 - 500</option>
                    <option value="Plus de 500">Plus de 500</option>
                  </select>
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Je suis intéressé par</label>
                  <select
                    name="interet"
                    value={interest}
                    onChange={(e) => setInterest(e.target.value)}
                    required
                    className={selectClass}
                  >
                    <option value="" disabled>Choisissez une option</option>
                    {options.map((opt) => (
                      <option key={opt.value} value={opt.value}>{opt.label}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">
                    Message / Besoins spécifiques
                  </label>
                  <Textarea
                    name="message"
                    placeholder="Décrivez brièvement votre projet ou vos défis actuels..."
                    rows={4}
                    maxLength={1000}
                    className={fieldClass}
                  />
                </div>

                <button
                  type="submit"
                  className="contact-submit-btn w-full text-base font-semibold px-8 py-4 rounded-2xl flex items-center justify-center gap-2 text-white"
                >
                  <Send size={18} className="contact-submit-icon" />
                  Réserver ma démo gratuite
                </button>
              </form>
            )}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ContactForm;
