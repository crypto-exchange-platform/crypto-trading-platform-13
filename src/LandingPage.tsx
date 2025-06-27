import { FC, useState, useEffect } from "react";
import { SignupModal } from "./SignUpModal";
import { LoginModal } from "./LoginModal";
import { HeroSection } from "./HeroSection";
import { particlesConfig } from "./utils/particleConfig";
import { Header } from "./Header";
import { MarketSection } from "./MarketSection";
import { TradeSection } from "./TradeSection";
import { PortfolioSection } from "./PortfolioSection";
import { ForexNewsSection } from "./ForexNewsSection";
import { TestimonialsSection } from "./Testimonials";
import { Footer } from "./Footer";

declare global {
  interface Window {
    particlesJS?: (canvasId: string, config: any) => void;
  }
}

const PARTICLES_CDN = "https://cdn.jsdelivr.net/npm/particles.js";

const LandingPage: FC = () => {
  const [modal, setModal] = useState<"login" | "signup" | null>(null);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.src = PARTICLES_CDN;
    script.async = true;
    script.onload = () => {
      window.particlesJS?.("particles", particlesConfig);
    };
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      {modal === "login" && <LoginModal onClose={() => setModal(null)} />}
      {modal === "signup" && (
        <SignupModal
          onClose={() => setModal(null)}
          onSignupSuccess={() => setModal("login")}
        />
      )}

      <Header
        onLogin={() => setModal("login")}
        onSignup={() => setModal("signup")}
      />

      <div className="relative w-full h-screen overflow-hidden">
        <div id="particles" className="absolute inset-0 z-0" />
        <div className="relative z-10">
          <HeroSection />
        </div>
      </div>
      <MarketSection />
      <TradeSection />
      <PortfolioSection />
      <ForexNewsSection />
      <TestimonialsSection />
      <Footer/>
    </>
  );
};

export default LandingPage;
