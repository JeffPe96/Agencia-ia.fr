import Sparkles from "./Sparkles";

interface Props {
  text: string;
  variant?: "primary" | "accent";
}

const SectionBanner = ({ text }: Props) => (
  <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
    <Sparkles className="px-8 py-4 mx-auto">
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-[hsl(260,60%,58%)]">
          {text}
        </span>
      </h1>
    </Sparkles>
    <p className="mt-6 text-lg text-muted-foreground font-light max-w-xl mx-auto">
      Découvrez nos solutions sur-mesure ci-dessous
    </p>
  </div>
);

export default SectionBanner;
