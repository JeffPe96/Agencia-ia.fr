import { useState } from "react";
import { Scissors, Dog, Utensils, Heart, HelpCircle, ArrowRight, Send } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const sectors = [
  {
    id: "coiffure",
    icon: Scissors,
    label: "Coiffure",
    title: "Coiffure & Beauté",
    text:
      "L'agent aide à choisir la prestation de beauté, répond aux questions sur les tarifs et oriente le client vers la prise de rendez-vous adaptée.",
    accent: "from-[#00BFFF] to-[#3a7bd5]",
    stats: [
      { value: "100%", label: "Questions traitées" },
      { value: "24/7", label: "Conseil instantané" },
    ],
  },
  {
    id: "toilettage",
    icon: Dog,
    label: "Toilettage",
    title: "Toilettage",
    text:
      "L'agent guide le maître sur les soins recommandés selon la race et le pelage, et qualifie chaque demande avant la prise de rendez-vous.",
    accent: "from-[#7b5cff] to-[#00BFFF]",
    stats: [
      { value: "+40%", label: "Demandes qualifiées" },
      { value: "0", label: "Question sans réponse" },
    ],
  },
  {
    id: "restauration",
    icon: Utensils,
    label: "Restauration",
    title: "Restauration",
    text:
      "L'agent répond aux questions sur la carte, les allergènes, les horaires et les options. Il oriente vers la réservation sans monopoliser votre équipe.",
    accent: "from-[#00BFFF] to-[#7b5cff]",
    stats: [
      { value: "< 1s", label: "Temps de réponse" },
      { value: "Menu", label: "Maîtrisé" },
    ],
  },
  {
    id: "bien-etre",
    icon: Heart,
    label: "Bien-être",
    title: "Bien-être",
    text:
      "L'agent conseille la séance adaptée, répond aux interrogations sur les protocoles et accompagne le client avant et après chaque expérience.",
    accent: "from-[#3a7bd5] to-[#00BFFF]",
    stats: [
      { value: "VIP", label: "Conseil sur-mesure" },
      { value: "100%", label: "Suivi assuré" },
    ],
  },
  {
    id: "autre",
    icon: HelpCircle,
    label: "Votre secteur ?",
    title: "Votre secteur ?",
    text:
      "Votre métier n'est pas listé ? Nous créons des agents sur-mesure pour tout type d'activité. Décrivez-nous votre besoin et un expert vous recontacte sous 24h.",
    accent: "from-[#7b5cff] to-[#00BFFF]",
    cta: true as const,
  },
];

const AgentSectors = () => {
  const [active, setActive] = useState("coiffure");
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", sector: "", message: "" });
  const { toast } = useToast();
  const current = sectors.find((s) => s.id === active)!;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.sector) {
      toast({
        title: "Champs requis",
        description: "Merci de renseigner votre nom, email et secteur.",
        variant: "destructive",
      });
      return;
    }
    toast({
      title: "Demande reçue ✨",
      description: "Notre équipe vous recontacte sous 24h pour étudier votre projet.",
    });
    setForm({ name: "", email: "", sector: "", message: "" });
    setOpen(false);
  };

  return (
    <section id="secteurs" className="py-28 relative">
      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal>
          <p className="text-sm font-medium text-primary text-center mb-3 tracking-wide uppercase">
            Secteurs
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-center tracking-tight mb-4">
            Adapté à <span className="text-gradient">votre secteur</span>
          </h2>
          <p className="text-center text-muted-foreground mb-16 max-w-xl mx-auto">
            Un Agent IA entraîné pour les besoins spécifiques de chaque métier.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <div className="max-w-3xl mx-auto">
            <div className="flex justify-center gap-2 mb-10 flex-wrap">
              {sectors.map((s) => {
                const isActive = active === s.id;
                return (
                  <button
                    key={s.id}
                    onClick={() => setActive(s.id)}
                    className={`sector-tab group ${isActive ? "sector-tab-active" : ""}`}
                  >
                    {isActive && (
                      <span
                        className={`sector-tab-bg bg-gradient-to-r ${s.accent}`}
                        aria-hidden="true"
                      />
                    )}
                    <span className="relative flex items-center gap-2">
                      <s.icon size={15} strokeWidth={2} />
                      {s.label}
                    </span>
                  </button>
                );
              })}
            </div>

            <div
              className="sector-card group relative animate-fade-in"
              key={current.id}
            >
              <div className="web-feature-glow" aria-hidden="true" />

              <div className="flex items-start gap-5 mb-6">
                <div
                  className={`web-feature-icon shrink-0 bg-gradient-to-br ${current.accent}`}
                >
                  <current.icon size={24} strokeWidth={1.8} className="text-white" />
                </div>
                <div className="flex-1 text-left">
                  <h3 className="text-xl sm:text-2xl font-semibold mb-2 text-foreground">
                    {current.title}
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    {current.text}
                  </p>
                </div>
              </div>

              {"stats" in current && current.stats && (
                <div className="grid grid-cols-2 gap-3 pt-5 border-t border-border/40">
                  {current.stats.map((stat, idx) => (
                    <div key={idx} className="sector-stat">
                      <span
                        className={`sector-stat-value bg-gradient-to-r ${current.accent}`}
                      >
                        {stat.value}
                      </span>
                      <span className="sector-stat-label">{stat.label}</span>
                    </div>
                  ))}
                </div>
              )}

              {"cta" in current && current.cta && (
                <Dialog open={open} onOpenChange={setOpen}>
                  <DialogTrigger asChild>
                    <button className="sector-cta-btn group/btn">
                      <span>Décrire mon projet</span>
                      <ArrowRight
                        size={16}
                        className="transition-transform duration-300 group-hover/btn:translate-x-1"
                      />
                    </button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-md bg-card/95 backdrop-blur border-border/60">
                    <DialogHeader>
                      <DialogTitle className="text-xl">
                        Parlons de <span className="text-gradient">votre secteur</span>
                      </DialogTitle>
                      <DialogDescription>
                        Décrivez-nous votre activité, un expert vous recontacte sous 24h.
                      </DialogDescription>
                    </DialogHeader>
                    <form onSubmit={handleSubmit} className="space-y-4 mt-2">
                      <div className="grid sm:grid-cols-2 gap-3">
                        <Input
                          placeholder="Votre nom"
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                        />
                        <Input
                          type="email"
                          placeholder="Email"
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                        />
                      </div>
                      <Input
                        placeholder="Votre secteur d'activité"
                        value={form.sector}
                        onChange={(e) => setForm({ ...form, sector: e.target.value })}
                      />
                      <Textarea
                        placeholder="Décrivez brièvement votre besoin (optionnel)"
                        rows={4}
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                      />
                      <Button type="submit" className="w-full sector-cta-btn !mt-2 justify-center">
                        <Send size={16} />
                        <span>Envoyer ma demande</span>
                      </Button>
                    </form>
                  </DialogContent>
                </Dialog>
              )}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default AgentSectors;
