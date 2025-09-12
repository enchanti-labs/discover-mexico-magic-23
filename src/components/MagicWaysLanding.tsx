import { useEffect } from 'react';
import Navbar from './Navbar';
import WhatsAppFloat from './WhatsAppFloat';
import HeroSection from './sections/HeroSection';
import AboutSection from './sections/AboutSection';
import DestinationsSection from './sections/DestinationsSection';
import BenefitsSection from './sections/BenefitsSection';
import StatsSection from './sections/StatsSection';
import ExperiencesSection from './sections/ExperiencesSection';
import HowItWorksSection from './sections/HowItWorksSection';
import FAQSection from './sections/FAQSection';
import CTASection from './sections/CTASection';
import FooterSection from './sections/FooterSection';

const MagicWaysLanding = () => {
  // Scroll reveal animation
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      });
    }, observerOptions);

    // Observe all elements with reveal-on-scroll class
    const elementsToReveal = document.querySelectorAll('.reveal-on-scroll');
    elementsToReveal.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Fixed Navigation */}
      <Navbar />
      
      {/* Main Content */}
      <main>
        <HeroSection />
        <AboutSection />
        <DestinationsSection />
        <BenefitsSection />
        <StatsSection />
        <ExperiencesSection />
        <HowItWorksSection />
        <FAQSection />
        <CTASection />
      </main>

      {/* Footer */}
      <FooterSection />

      {/* WhatsApp Float Button */}
      <WhatsAppFloat />
    </div>
  );
};

export default MagicWaysLanding;