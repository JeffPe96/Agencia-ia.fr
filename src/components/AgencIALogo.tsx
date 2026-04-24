const AgencIALogo = () => (
  <span className="inline-flex items-baseline text-xl font-extrabold tracking-tight">
    <span className="text-foreground">Agenc</span>
    <span
      className="relative ml-0.5 bg-clip-text text-transparent font-black tracking-tight"
      style={{
        backgroundImage:
          "linear-gradient(135deg, hsl(195 100% 60%) 0%, hsl(217 91% 60%) 50%, hsl(260 70% 65%) 100%)",
        textShadow: "0 0 24px hsl(195 100% 50% / 0.35)",
        filter: "drop-shadow(0 0 8px hsl(195 100% 50% / 0.45))",
      }}
    >
      IA
    </span>
  </span>
);

export default AgencIALogo;
