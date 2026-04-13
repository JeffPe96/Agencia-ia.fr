import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import VocalPage from "./pages/VocalPage.tsx";
import WebPage from "./pages/WebPage.tsx";
import PricingPage from "./pages/PricingPage.tsx";
import NotFound from "./pages/NotFound.tsx";
import ScrollToTopOnNav from "./components/ScrollToTopOnNav.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTopOnNav />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/vocal" element={<VocalPage />} />
          <Route path="/web" element={<WebPage />} />
          <Route path="/tarifs" element={<PricingPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
