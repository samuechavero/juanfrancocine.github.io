import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Step1Vault from "@/components/Step1Vault";
import Step2Video from "@/components/Step2Video";
import Step3Chat from "@/components/Step3Chat";
import Step4TikTok from "@/components/Step4TikTok";
import Step5Conversion from "@/components/Step5Conversion";

function ProgressBar({ step }: { step: number }) {
  const pct = ((step - 1) / 4) * 100;
  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-0.5 bg-zinc-900">
      <div
        className="h-full bg-gradient-to-r from-red-800 to-yellow-700 transition-all duration-700"
        style={{ width: `${pct}%` }}
      />
    </div>
  );
}

export default function App() {
  const [currentStep, setCurrentStep] = useState(1);

  return (
    <div className="bg-zinc-950 min-h-screen">
      {currentStep < 4 && <ProgressBar step={currentStep} />}
      <AnimatePresence mode="wait">
        {currentStep === 1 && (
          <Step1Vault key="step1" onNext={() => setCurrentStep(2)} />
        )}
        {currentStep === 2 && (
          <Step2Video key="step2" onNext={() => setCurrentStep(3)} />
        )}
        {currentStep === 3 && (
          <Step3Chat key="step3" onNext={() => setCurrentStep(4)} />
        )}
        {currentStep === 4 && (
          <Step4TikTok key="step4" onNext={() => setCurrentStep(5)} />
        )}
        {currentStep === 5 && (
          <Step5Conversion key="step5" />
        )}
      </AnimatePresence>
    </div>
  );
}
