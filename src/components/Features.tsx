import { MessageSquareText, CalendarCheck, PhoneForwarded, FileText } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const features = [
  {
    icon: MessageSquareText,
    title: "ChatBot IA (Web)",
    desc: "Bien plus qu'un chatbot classique. Un vendeur expert 24/7 qui guide vos clients et booste vos conversions e-commerce.",
  },
  {
    icon: CalendarCheck,
    title: "Prise de RDV Intelligente",
    desc: "Synchronisation native avec Google Calendar, Cal.com, et vos outils métier via Zapier & Make.",
  },
  {
    icon: PhoneForwarded,
    title: "Transfert d'Appel Instantané",
    desc: "Redirection fluide vers un humain si l'IA détecte un besoin spécifique. Compatible Aircall, Ringover.",
  },
  {
    icon: FileText,
    title: "Intelligence Post-Appel",
    desc: "Résumés automatiques et retranscriptions envoyés directement par email après chaque échange.",
  },
];

const integrations = ["Google Calendar", "Zapier", "Make", "Aircall", "Cal.com"];

const Features = () => (
  <section id="avantages" className="py-28">
    <div className="container mx-auto px-4">
      <ScrollReveal>
        <p className="text-sm font-medium text-primary text-center mb-3 tracking-wide uppercase">Nos Solutions</p>
        <h2 className="text-3xl sm:text-4xl font-bold text-center tracking-tight mb-4">
          Des outils <span className="text-gradient">d'automatisation d'élite</span>
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-xl mx-auto">
          Une suite complète pour ne plus jamais perdre une opportunité.
        </p>
      </ScrollReveal>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {features.map((f, i) => (
          <ScrollReveal key={f.title} delay={i * 100}>
            <div className="card-glass text-center h-full group">
              <div className="w-14 h-14 rounded-2xl bg-primary/[0.06] flex items-center justify-center mx-auto mb-5 group-hover:bg-primary/[0.12] transition-colors duration-300">
                <f.icon className="text-primary" size={24} />
              </div>
              <h3 className="font-semibold text-lg mb-2 text-foreground">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal delay={500}>
        <div className="mt-14 flex flex-wrap items-center justify-center gap-3">
          <span className="text-xs text-muted-foreground/60 mr-2">Compatible avec</span>
          {integrations.map((name) => (
            <span key={name} className="text-xs bg-secondary/80 text-muted-foreground px-3 py-1.5 rounded-full border border-border/30 font-medium">
              {name}
            </span>
          ))}
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default Features;
