import { Button } from '@/components/ui/button';
import { Download, Play } from 'lucide-react';
import heroImage from '@/assets/hero-pueblo-magico.jpg';
import appMockup from '@/assets/app-mockup-hero.png';
import logoWhiteWithText from '@/assets/logo-white-with-text.png';
const HeroSection = () => {
  return <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
    {/* Background Image */}
    <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
      backgroundImage: `url(${heroImage})`
    }} />

    {/* Overlay */}
    <div className="absolute inset-0 gradient-overlay opacity-70" />

    {/* Content */}
    <div className="container relative z-10 mx-auto px-4">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 animate-fade-in-up">
            Conecta con la Magia de México
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed animate-fade-in-up-delay">
            Descubre Pueblos Mágicos, conecta con comercios locales y vive experiencias únicas
          </p>

          {/* Download Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
            <Button size="lg" className="gradient-hero text-white font-semibold px-8 py-4 rounded-xl hover:scale-105 transition-bounce shadow-mexican">
              <Download size={20} className="mr-2" />
              App Store
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white hover:bg-white font-semibold px-8 py-4 rounded-xl hover:scale-105 transition-bounce text-zinc-600">
              <Play size={20} className="mr-2" />
              Google Play
            </Button>
          </div>

          {/* Statistics Bar */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 animate-scale-in">
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-white bg-transparent">2</div>
                <div className="text-white/80 text-sm">Estados</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">2+</div>
                <div className="text-white/80 text-sm">Pueblos Mágicos</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">1K+</div>
                <div className="text-white/80 text-sm">Usuarios Activos</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Content - App Mockup */}
        <div className="flex justify-center lg:justify-end">
          <img
            src={appMockup}
            alt="Magic Ways App Mockup"
            className="w-60 md:w-72 lg:w-[28rem] xl:w-[32rem] h-auto max-w-full drop-shadow-2xl"
          />
        </div>
      </div>
    </div>

    {/* Logo at the bottom center */}
    <div className="absolute bottom-6 inset-x-0 flex justify-center z-10">
      <img
        src={logoWhiteWithText}
        alt="Magic Ways"
        className="h-16 md:h-20 w-auto animate-fade-in-up"
      />
    </div>
  </section>;
};
export default HeroSection;