import { useMemo, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Search, X, type LucideIcon } from "lucide-react";

export type FAQItem = {
  icon: LucideIcon;
  q: string;
  a: string;
  tags?: string[];
};

interface FAQSearchProps {
  items: FAQItem[];
  keywords?: string[];
}

const normalize = (s: string) =>
  s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

const FAQSearch = ({ items, keywords = [] }: FAQSearchProps) => {
  const [query, setQuery] = useState("");
  const [activeKeyword, setActiveKeyword] = useState<string | null>(null);

  const effectiveQuery = activeKeyword ?? query;

  const filtered = useMemo(() => {
    const q = normalize(effectiveQuery.trim());
    if (!q) return items;
    return items.filter((it) => {
      const hay = normalize(`${it.q} ${it.a} ${(it.tags ?? []).join(" ")}`);
      return hay.includes(q);
    });
  }, [items, effectiveQuery]);

  const handleKeyword = (kw: string) => {
    if (activeKeyword === kw) {
      setActiveKeyword(null);
      setQuery("");
    } else {
      setActiveKeyword(kw);
      setQuery(kw);
    }
  };

  const reset = () => {
    setActiveKeyword(null);
    setQuery("");
  };

  return (
    <div className="max-w-3xl mx-auto">
      <div className="mb-6">
        <div className="relative">
          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none"
          />
          <Input
            type="search"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setActiveKeyword(null);
            }}
            placeholder="Rechercher dans la FAQ (ex : prix, installation…)"
            className="pl-11 pr-10 h-12 rounded-xl"
            aria-label="Rechercher dans la FAQ"
          />
          {query && (
            <button
              type="button"
              onClick={reset}
              aria-label="Effacer la recherche"
              className="absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded-md text-muted-foreground hover:text-foreground transition-colors"
            >
              <X size={16} />
            </button>
          )}
        </div>

        {keywords.length > 0 && (
          <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
            <span className="text-xs text-muted-foreground mr-1">Filtres rapides :</span>
            {keywords.map((kw) => {
              const active = activeKeyword === kw;
              return (
                <button
                  key={kw}
                  type="button"
                  onClick={() => handleKeyword(kw)}
                  className={`text-xs px-3 py-1.5 rounded-full border transition-all ${
                    active
                      ? "bg-primary text-primary-foreground border-primary shadow-sm"
                      : "border-border bg-background/60 text-muted-foreground hover:text-foreground hover:border-primary/40"
                  }`}
                  aria-pressed={active}
                >
                  {kw}
                </button>
              );
            })}
          </div>
        )}

        <p className="mt-3 text-center text-xs text-muted-foreground">
          {filtered.length} résultat{filtered.length > 1 ? "s" : ""} sur {items.length}
        </p>
      </div>

      {filtered.length === 0 ? (
        <div className="text-center py-12 border border-dashed border-border rounded-xl">
          <p className="text-sm text-muted-foreground">
            Aucune question ne correspond à votre recherche.
          </p>
          <button
            type="button"
            onClick={reset}
            className="mt-3 text-sm text-primary hover:underline"
          >
            Réinitialiser
          </button>
        </div>
      ) : (
        <Accordion type="single" collapsible className="space-y-4">
          {filtered.map((item, i) => (
            <AccordionItem
              key={item.q}
              value={`item-${i}`}
              className="web-faq-item group"
            >
              <AccordionTrigger className="web-faq-trigger hover:no-underline">
                <div className="flex items-center gap-4 flex-1 text-left">
                  <div className="web-faq-icon">
                    <item.icon size={18} strokeWidth={1.8} />
                  </div>
                  <div className="flex-1">
                    <span className="web-faq-index">{String(i + 1).padStart(2, "0")}</span>
                    <h3 className="text-sm sm:text-base font-semibold text-foreground leading-snug">
                      {item.q}
                    </h3>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="web-faq-content">
                <div className="pl-[3.25rem] pr-2 pb-2">
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.a}</p>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      )}
    </div>
  );
};

export default FAQSearch;
