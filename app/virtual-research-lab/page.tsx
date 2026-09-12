"use client";


import HeroSection from "./components/HeroSection";
import LabModules from "./components/LabModules";
import DesignPipeline from "./components/DesignPipeline";
import ModelViewer from "./components/ModelViewer";
import SimulationResults from "./components/SimulationResults";
import ResearchPapers from "./components/ResearchPapers";
import PrintReady from "./components/PrintReady";
import AIAssistant from "./components/AIAssistant";

export default function VirtualResearchLab() {
  return (
    <div className="vrl-page">
        <HeroSection />
        <LabModules />
        <DesignPipeline />
        <ModelViewer />
        <SimulationResults />
        <ResearchPapers />
        <PrintReady />

      {/* <AIAssistant /> */}

    </div>
  );
}
