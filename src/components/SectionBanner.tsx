interface Props {
  text: string;
  variant?: "primary" | "accent";
}

const SectionBanner = ({ text, variant = "primary" }: Props) => (
  <div
    className={`py-5 text-center text-sm sm:text-base font-semibold uppercase tracking-widest ${
      variant === "primary"
        ? "bg-primary/[0.04] text-primary border-y border-primary/[0.08]"
        : "bg-accent/[0.04] text-accent border-y border-accent/[0.08]"
    }`}
  >
    {text}
  </div>
);

export default SectionBanner;
