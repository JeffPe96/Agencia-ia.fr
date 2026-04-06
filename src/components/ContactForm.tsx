import { useState } from "react";
import { Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import ScrollReveal from "./ScrollReveal";

const ContactForm = () => {
  const [type, setType] = useState("");
  const [interest, setInterest] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
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
                  Nous vous recontacterons très rapidement pour planifier votre démo.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="card-soft space-y-5">
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Nom complet</label>
                  <Input placeholder="Jean Dupont" required />
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Établissement</label>
                  <Input placeholder="Salon Élégance" required />
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Téléphone</label>
                  <Input type="tel" placeholder="06 12 34 56 78" required />
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Type de commerce</label>
                  <Select value={type} onValueChange={setType} required>
                    <SelectTrigger className="rounded-xl">
                      <SelectValue placeholder="Sélectionnez votre secteur" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="coiffeur">Coiffeur</SelectItem>
                      <SelectItem value="toiletteur">Toiletteur</SelectItem>
                      <SelectItem value="restauration">Restauration</SelectItem>
                      <SelectItem value="bien-etre">Bien-être</SelectItem>
                      <SelectItem value="autre">Autre</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {type === "autre" && (
                  <div className="animate-fade-in">
                    <label className="text-sm font-medium text-foreground mb-1.5 block">Précisez votre activité</label>
                    <Textarea placeholder="Décrivez votre activité…" required className="rounded-xl" />
                  </div>
                )}

                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Je suis intéressé par</label>
                  <Select value={interest} onValueChange={setInterest} required>
                    <SelectTrigger className="rounded-xl">
                      <SelectValue placeholder="Choisissez une option" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="agent-ia">Agent IA uniquement</SelectItem>
                      <SelectItem value="pack-complet">Pack Complet (Agent + Site)</SelectItem>
                    </SelectContent>
                  </Select>
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
