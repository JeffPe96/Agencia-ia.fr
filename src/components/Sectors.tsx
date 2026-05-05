import { useState } from "react";
import { Scissors, Dog, Utensils, Heart, HelpCircle, ArrowRight, Send, Play, Sparkles, Clock } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
type DemoLine = { time: number; speaker: "ai" | "client"; text: string };
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

interface SectorDemoConfig {
  businessName: string;
  lines: DemoLine[];
  duration: number;
  finishedLabel: string;
}

interface Sector {
  id: string;
  icon: typeof Scissors;
  label: string;
  title: string;
  text: string;
  accent: string;
  stats?: { value: string; label: string }[];
  demo?: SectorDemoConfig;
  cta?: true;
}

const sectors: Sector[] = [
  {
    id: "coiffure",
    icon: Scissors,
    label: "Salons de coiffures/Beauté",
    title: "Salons de coiffures/Beauté",
    text:
      "Libérez-vous de la prise de rendez-vous. Notre Agent IA qualifie les demandes, gère votre calendrier en temps réel et relance vos clients automatiquement pour réduire les rendez-vous manqués.",
    accent: "from-[#00BFFF] to-[#3a7bd5]",
    stats: [
      { value: "−70%", label: "RDV manqués" },
      { value: "24/7", label: "Calendrier géré" },
    ],
    demo: {
      businessName: "Salon Élégance",
      duration: 30,
      finishedLabel: "Rendez-vous confirmé & enregistré",
      lines: [
        { time: 0, speaker: "ai", text: "Bonjour, Salon Élégance, comment puis-je vous aider ?" },
        { time: 3, speaker: "client", text: "Bonjour, je voudrais prendre un rendez-vous." },
        { time: 6, speaker: "ai", text: "Bien sûr, vous souhaitez un rendez-vous pour quelle prestation ?" },
        { time: 10, speaker: "client", text: "Une coupe et un brushing, s'il vous plaît." },
        { time: 13, speaker: "ai", text: "Parfait. Je regarde les disponibilités… Je vous propose jeudi à 14h ou vendredi à 10h." },
        { time: 18, speaker: "client", text: "Jeudi à 14h, c'est parfait." },
        { time: 21, speaker: "ai", text: "C'est noté ! À quel nom, s'il vous plaît ?" },
        { time: 24, speaker: "client", text: "Madame Dupont." },
        { time: 26, speaker: "ai", text: "Merci Madame Dupont, votre rendez-vous est confirmé. À jeudi !" },
      ],
    },
  },
  {
    id: "toilettage",
    icon: Dog,
    label: "Cliniques Vétérinaires",
    title: "Vétérinaires & Toilettage",
    text:
      "Une gestion fluide pour vos clients à quatre pattes. L'Agent IA identifie le type de soin nécessaire et optimise vos créneaux pour maximiser votre journée sans stress.",
    accent: "from-[#7b5cff] to-[#00BFFF]",
    stats: [
      { value: "100%", label: "Soins qualifiés" },
      { value: "+30%", label: "Créneaux optimisés" },
    ],
    demo: {
      businessName: "Clinique VetCare",
      duration: 32,
      finishedLabel: "Consultation programmée",
      lines: [
        { time: 0, speaker: "ai", text: "Clinique VetCare bonjour, en quoi puis-je vous aider ?" },
        { time: 3, speaker: "client", text: "Bonjour, mon chien tousse depuis hier, je m'inquiète." },
        { time: 7, speaker: "ai", text: "Je comprends. Quelle est la race et l'âge de votre chien ?" },
        { time: 11, speaker: "client", text: "Un Labrador de 6 ans." },
        { time: 13, speaker: "ai", text: "D'accord. Une consultation est recommandée. Le Dr. Martin a une disponibilité demain à 9h30." },
        { time: 19, speaker: "client", text: "C'est parfait, je prends." },
        { time: 21, speaker: "ai", text: "Très bien. À quel nom dois-je enregistrer le rendez-vous ?" },
        { time: 25, speaker: "client", text: "Monsieur Bernard, avec mon chien Max." },
        { time: 28, speaker: "ai", text: "Noté Monsieur Bernard. À demain 9h30 avec Max !" },
      ],
    },
  },
  {
    id: "restauration",
    icon: Utensils,
    label: "Restauration",
    title: "Restauration",
    text:
      "Ne perdez plus aucune réservation. Notre Agent Vocal IA répond aux questions sur le menu, gère les réservations de tables et recueille les avis pour booster votre réputation.",
    accent: "from-[#00BFFF] to-[#7b5cff]",
    stats: [
      { value: "< 2s", label: "Temps de réponse" },
      { value: "★ +", label: "Avis Google" },
    ],
    demo: {
      businessName: "Le Bistrot du Lac",
      duration: 30,
      finishedLabel: "Table réservée",
      lines: [
        { time: 0, speaker: "ai", text: "Le Bistrot du Lac, bonsoir. Comment puis-je vous aider ?" },
        { time: 4, speaker: "client", text: "Bonsoir, je souhaiterais réserver une table pour samedi." },
        { time: 8, speaker: "ai", text: "Avec plaisir. Pour combien de personnes et à quelle heure ?" },
        { time: 12, speaker: "client", text: "Quatre personnes, vers 20h." },
        { time: 15, speaker: "ai", text: "Parfait. Une table en terrasse ou en salle ?" },
        { time: 19, speaker: "client", text: "En terrasse si possible." },
        { time: 21, speaker: "ai", text: "C'est noté. À quel nom, s'il vous plaît ?" },
        { time: 24, speaker: "client", text: "Monsieur Lefèvre." },
        { time: 26, speaker: "ai", text: "Merci Monsieur Lefèvre. Table de 4 en terrasse, samedi 20h. À bientôt !" },
      ],
    },
  },
  {
    id: "bien-etre",
    icon: Heart,
    label: "Bien-être & Spa",
    title: "Bien-être & Spa",
    text:
      "Accompagnez vos clients avant même leur arrivée. L'IA conseille sur les séances adaptées, gère les inscriptions aux cours et assure un suivi personnalisé.",
    accent: "from-[#3a7bd5] to-[#00BFFF]",
    stats: [
      { value: "VIP", label: "Conseil personnalisé" },
      { value: "Suivi", label: "Post-séance" },
    ],
    demo: {
      businessName: "Spa Sérénité",
      duration: 32,
      finishedLabel: "Séance réservée",
      lines: [
        { time: 0, speaker: "ai", text: "Spa Sérénité bonjour, comment puis-je vous accompagner ?" },
        { time: 4, speaker: "client", text: "Bonjour, j'aimerais offrir un soin à ma compagne." },
        { time: 8, speaker: "ai", text: "Quelle belle attention. Souhaitez-vous un massage, un soin du visage ou un duo ?" },
        { time: 13, speaker: "client", text: "Un massage relaxant d'une heure." },
        { time: 16, speaker: "ai", text: "Excellent choix. J'ai une disponibilité samedi 15h ou dimanche 11h." },
        { time: 21, speaker: "client", text: "Dimanche 11h, parfait." },
        { time: 23, speaker: "ai", text: "Je prépare un bon cadeau personnalisé. À quel nom ?" },
        { time: 27, speaker: "client", text: "Pour Madame Laurent." },
        { time: 29, speaker: "ai", text: "C'est noté ! Le bon cadeau vous est envoyé par email." },
      ],
    },
  },
  {
    id: "autre",
    icon: HelpCircle,
    label: "Votre secteur ?",
    title: "Votre secteur n'est pas listé ?",
    text:
      "Nous créons des Agents IA sur-mesure pour tout type d'activité. Décrivez-nous votre besoin et un expert vous recontacte sous 24h.",
    accent: "from-[#7b5cff] to-[#00BFFF]",
    cta: true,
  },
];

const Sectors = () => {
  const [active, setActive] = useState("coiffure");
  const [open, setOpen] = useState(false);
  const [demoOpen, setDemoOpen] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", sector: "", message: "" });
  const { toast } = useToast();
  const current = sectors.find((s) => s.id === active)!;

  const handleSelect = (id: string) => {
    setActive(id);
    setDemoOpen(false);
  };

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
            Secteurs & Démos
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-center tracking-tight mb-4">
            Adapté à <span className="text-gradient">votre secteur</span>
          </h2>
          <p className="text-center text-muted-foreground mb-16 max-w-xl mx-auto">
            Un Agent IA entraîné pour les besoins de chaque métier. Écoutez une démo en direct.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <div className="max-w-4xl mx-auto">
            {/* Tabs */}
            <div className="flex justify-center gap-2 mb-10 flex-wrap">
              {sectors.map((s) => {
                const isActive = active === s.id;
                return (
                  <button
                    key={s.id}
                    onClick={() => handleSelect(s.id)}
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

            {/* Card */}
            <div
              className="sector-card group relative animate-fade-in"
              key={current.id}
            >
              <div className="web-feature-glow" aria-hidden="true" />

              <div className="grid md:grid-cols-[1fr_auto] gap-6 items-center">
                <div className="flex items-start gap-5">
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

                {/* Giant Play button for demo */}
                {current.demo && (
                  <button
                    onClick={() => setDemoOpen((v) => !v)}
                    className="group/play relative shrink-0 mx-auto md:mx-0"
                    aria-label={`Écouter la démo ${current.demo.businessName}`}
                  >
                    <span
                      className={`absolute inset-0 rounded-full bg-gradient-to-br ${current.accent} blur-xl opacity-50 group-hover/play:opacity-80 transition-opacity animate-pulse`}
                      aria-hidden="true"
                    />
                    <span
                      className={`relative flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br ${current.accent} shadow-2xl ring-2 ring-white/20 group-hover/play:scale-110 transition-transform duration-300`}
                    >
                      <Play
                        size={36}
                        strokeWidth={2}
                        className="text-white ml-1"
                        fill="currentColor"
                      />
                    </span>
                    <span className="block mt-2 text-xs font-semibold text-foreground/80 text-center">
                      {demoOpen ? "Masquer la démo" : "Écouter la démo"}
                    </span>
                  </button>
                )}
              </div>

              {current.stats && (
                <div className="grid grid-cols-2 gap-3 pt-5 mt-6 border-t border-border/40">
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

              {current.cta && (
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

            {/* Coming soon message, appears below the card */}
            {current.demo && demoOpen && (
              <div className="mt-6 max-w-2xl mx-auto animate-fade-in" key={`demo-${current.id}`}>
                <div className="card-glass p-6 sm:p-8 text-center relative overflow-hidden">
                  <div
                    className={`absolute inset-0 opacity-[0.06] bg-gradient-to-br ${current.accent}`}
                    aria-hidden="true"
                  />
                  <div className="relative flex flex-col items-center gap-4">
                    <div
                      className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${current.accent} flex items-center justify-center shadow-lg`}
                    >
                      <Sparkles size={26} className="text-white" />
                    </div>
                    <div className="space-y-2 max-w-md">
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 ring-1 ring-primary/20 text-[11px] font-semibold text-primary uppercase tracking-wider">
                        <Clock size={11} />
                        Bientôt disponible
                      </div>
                      <h4 className="text-lg sm:text-xl font-semibold text-foreground">
                        Démo en préparation
                      </h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Nous finalisons des exemples audio personnalisés pour chaque secteur.
                        Très prochainement, vous pourrez écouter une démonstration réaliste de
                        l'Agent Vocal IA en action pour <span className="text-foreground font-medium">{current.title}</span>.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Sectors;
