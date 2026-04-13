import Sparkles from "./Sparkles";

interface Props {
  text: string;
  variant?: "primary" | "accent";
}

const SectionBanner = ({ text }: Props) => (
  <div className="py-16 text-center">
    <Sparkles className="px-8 py-4 mx-auto">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-[hsl(260,60%,58%)]">
          {text}
        </span>
      </h2>
    </Sparkles>
  </div>
);

export default SectionBanner;
