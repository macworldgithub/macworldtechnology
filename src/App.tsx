import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ThankYou from "./pages/ThankYou";
import NotFound from "./pages/NotFound";
import AgenticAI from "./pages/AgenticAI";
import DigitalMarketing from "./pages/DigitalMarketing";
import AICustomerService from "./pages/AICustomerService";
import Agentic from "./pages/Agentic";
import Marketing from "./pages/Marketing";
import CustomerService from "./pages/CustomerService";
import CaseStudiesPage from "./pages/CaseStudiesPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/CaseStudies" element={<CaseStudiesPage />} />
          {/* <Route path="*" element={<NotFound />} /> */}
          <Route path="/thank-you" element={<ThankYou />} />{" "}
          <Route path="/lp/agentic-ai" element={<AgenticAI />} />
          <Route
            path="/lp/digital-marketing-services"
            element={<DigitalMarketing />}
          />
          <Route
            path="/lp/ai-customer-service-agent"
            element={<AICustomerService />}
          />
          <Route path="/agentic-ai" element={<Agentic />} />
          <Route path="/digital-marketing-services" element={<Marketing />} />
          <Route path="/ai-customer-service-agent" element={<CustomerService />} />

        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
