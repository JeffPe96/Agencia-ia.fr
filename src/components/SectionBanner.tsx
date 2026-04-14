import Sparkles from "./Sparkles";

interface Props {
  text: string;
  subtitle?: string;
  variant?: "primary" | "accent";
}

const SectionBanner = ({ text, subtitle }: Props) => (
  <div className="min-h-[85vh] flex flex-col items-center justify-center text-center px-4">
    <Sparkles className="px-8 py-4 mx-auto">
      <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight leading-tight">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-[hsl(260,60%,58%)]">
          {text}
        </span>
      </h1>
    </Sparkles>
    {subtitle && (
      <p className="mt-6 text-lg sm:text-xl lg:text-2xl text-muted-foreground font-light max-w-2xl mx-auto">
        {subtitle}
      </p>
    )}

    <div className="mt-10 flex flex-col items-center gap-2 opacity-60">
      <span className="text-xs text-muted-foreground/60 uppercase tracking-widest">Scrollez pour découvrir</span>
      <div className="w-5 h-8 rounded-full border border-border/50 flex items-start justify-center p-1.5">
        <div className="w-1 h-2 rounded-full bg-primary/40 animate-bounce" />
      </div>
    </div>
  </div>
);

export default SectionBanner;
