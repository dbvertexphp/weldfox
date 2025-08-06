import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import AboutUs from "./pages/About-us";
import Services from "./pages/Services/Services";
import RollingShutter from "./pages/Services/rolling-shutter";
import WindowGrills from "./pages/Services/window-grills";
import StairCases from "./pages/Services/staircases";
import ShedWork from "./pages/Services/shed-work";
import SafetyGrills from "./pages/Services/safety-grills";
import PEBWork from "./pages/Services/peb-works";
import Railings from "./pages/Services/railigs";
import Ladders from "./pages/Services/ladders";
import InvisibleGrills from "./pages/Services/invisible-grills";
import GlassSkylights from "./pages/Services/glass-skylights";
import GlassPergolas from "./pages/Services/glass-pergolas";
import GlassGlazing from "./pages/Services/glass-glazing";
import Gates from "./pages/Services/gates";
import Fencing from "./pages/Services/fencing";
import CoveringGrills from "./pages/Services/covering-grills";
import ClayTiles from "./pages/Services/clay-tiles";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import { News } from "./pages/News";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <div className="font-dmsans">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/pages/About-us" element={<AboutUs />} />
            <Route path="/pages/Services/Services" element={<Services />} />
              <Route path="/pages/Services/rolling-shutter" element={<RollingShutter />} />
              <Route path="/pages/Services/staircases" element={<StairCases />} />
              <Route path="/pages/Services/ladders" element={<Ladders />} />
              <Route path="/pages/Services/peb-works" element={<PEBWork />} />
              <Route path="/pages/Services/glass-glazing" element={<GlassGlazing />} />
              <Route path="/pages/Services/glass-pergolas" element={<GlassPergolas />} />
              <Route path="/pages/Services/glass-skyights" element={<GlassSkylights />} />
              <Route path="/pages/Services/invisible-grills" element={<InvisibleGrills />} />
              <Route path="/pages/Services/railings" element={<Railings />} />
              <Route path="/pages/Services/gates" element={<Gates />} />
              <Route path="/pages/Services/clay-tiles" element={<ClayTiles />} />
              <Route path="/pages/Services/fencing" element={<Fencing />} />
              <Route path="/pages/Services/safety-grills" element={<SafetyGrills />} />
              <Route path="/pages/Services/shed-work" element={<ShedWork />} />
              <Route path="/pages/Services/covering-grills" element={<CoveringGrills />} />
              <Route path="/pages/Services/window-grills" element={<WindowGrills />} />
            <Route path="/pages/Projects" element={<Projects />} />
            <Route path="/pages/Contact" element={<Contact />} />
            <Route path="/pages/news" element={<News/>} />
       

            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </div>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
