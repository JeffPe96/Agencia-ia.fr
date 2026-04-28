import { lazy, Suspense } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import ScrollToTopOnNav from "./components/ScrollToTopOnNav.tsx";
import CustomCursor from "./components/CustomCursor.tsx";

// Lazy-loaded routes — keep landing eager for first paint
const VocalPage = lazy(() => import("./pages/VocalPage.tsx"));
const WebPage = lazy(() => import("./pages/WebPage.tsx"));
const AgentPage = lazy(() => import("./pages/AgentPage.tsx"));
const PricingPage = lazy(() => import("./pages/PricingPage.tsx"));
const NotFound = lazy(() => import("./pages/NotFound.tsx"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <CustomCursor />
      <BrowserRouter>
        <ScrollToTopOnNav />
        <Suspense fallback={<div className="min-h-screen bg-background" />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/vocal" element={<VocalPage />} />
            <Route path="/web" element={<WebPage />} />
            <Route path="/agent" element={<AgentPage />} />
            <Route path="/tarifs" element={<PricingPage />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
