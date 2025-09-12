import { Button } from '@/components/ui/button';
import { Download, Play, ArrowRight } from 'lucide-react';
import ctaBackground from '@/assets/cta-background.jpg';
import phoneInHand from '@/assets/phone-in-hand.png';
const CTASection = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${ctaBackground})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      <div className="relative container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-white">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              ¡Descarga Magic Ways y comienza tu aventura!
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Únete a miles de viajeros que ya han descubierto los pueblos mágicos de México con nuestra app.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-white text-black hover:bg-white/90">
                <Download className="w-5 h-5 mr-2" />
                Descargar App
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black">
                <Play className="w-5 h-5 mr-2" />
                Ver Demo
              </Button>
            </div>
          </div>

          {/* Phone Image */}
          <div className="flex justify-center lg:justify-end">
            <img 
              src={phoneInHand} 
              alt="Magic Ways App en smartphone"
              className="max-w-sm w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default CTASection;