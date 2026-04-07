import { useState } from "react";
import { Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import ScrollReveal from "./ScrollReveal";

const ContactForm = () => {
  const [type, setType] = useState("");
  const [interest, setInterest] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    try {
      const res = await fetch("https://formspree.io/f/mpqoopyb", {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      if (res.ok) setSubmitted(true);
    } catch {
      // silent fail — form still shows
    }
  };

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <h2 className="text-3xl sm:text-4xl font-bold text-center tracking-tight mb-4">
            Réservez votre <span className="text-primary">démo gratuite</span>
          </h2>
          <p className="text-center text-muted-foreground mb-14 max-w-xl mx-auto">
            Chaque entreprise est unique. Parlons de vos besoins pour créer votre Agent IA sur-mesure.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <div className="max-w-lg mx-auto">
            {submitted ? (
              <div className="card-soft text-center py-16">
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
                  <Send className="text-accent" size={28} />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">Demande envoyée !</h3>
                <p className="text-muted-foreground text-sm">
                  Merci ! Votre message a été envoyé. Nous vous répondrons sous 24h.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="card-soft space-y-5">
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Nom complet</label>
                  <Input name="nom" placeholder="Jean Dupont" required />
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Établissement</label>
                  <Input name="etablissement" placeholder="Salon Élégance" required />
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Téléphone</label>
                  <Input name="telephone" type="tel" placeholder="06 12 34 56 78" required />
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Type de commerce</label>
                  <select
                    name="type_commerce"
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                    required
                    className="flex h-10 w-full rounded-xl border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  >
                    <option value="" disabled>Sélectionnez votre secteur</option>
                    <option value="Coiffeur">Coiffeur</option>
                    <option value="Toiletteur">Toiletteur</option>
                    <option value="Restauration">Restauration</option>
                    <option value="Bien-être">Bien-être</option>
                    <option value="Autre">Autre</option>
                  </select>
                </div>

                {type === "Autre" && (
                  <div className="animate-fade-in">
                    <label className="text-sm font-medium text-foreground mb-1.5 block">Précisez votre activité</label>
                    <Textarea name="activite_autre" placeholder="Décrivez votre activité…" required className="rounded-xl" />
                  </div>
                )}

                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Je suis intéressé par</label>
                  <select
                    name="interet"
                    value={interest}
                    onChange={(e) => setInterest(e.target.value)}
                    required
                    className="flex h-10 w-full rounded-xl border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  >
                    <option value="" disabled>Choisissez une option</option>
                    <option value="Agent IA uniquement">Agent IA uniquement</option>
                    <option value="Pack Complet (Agent + Site)">Pack Complet (Agent + Site)</option>
                  </select>
                </div>

                <button type="submit" className="btn-primary-neu w-full text-base px-8 py-4 rounded-2xl flex items-center justify-center gap-2">
                  <Send size={18} />
                  Envoyer ma demande
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
