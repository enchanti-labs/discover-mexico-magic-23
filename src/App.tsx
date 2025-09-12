import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import TerminosCondiciones from "./pages/TerminosCondiciones";
import TerminosClientes from "./pages/TerminosClientes";
import TerminosNegocios from "./pages/TerminosNegocios";
import TerminosRepartidores from "./pages/TerminosRepartidores";
import PoliticaPrivacidad from "./pages/PoliticaPrivacidad";
import AvisoLegal from "./pages/AvisoLegal";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/terminos" element={<TerminosCondiciones />} />
          <Route path="/terminos-clientes" element={<TerminosClientes />} />
          <Route path="/terminos-negocios" element={<TerminosNegocios />} />
          <Route path="/terminos-repartidores" element={<TerminosRepartidores />} />
          <Route path="/privacidad" element={<PoliticaPrivacidad />} />
          <Route path="/aviso-legal" element={<AvisoLegal />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
