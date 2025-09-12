import { Card, CardContent } from '@/components/ui/card';
import { Download, Search, Heart } from 'lucide-react';
import appMockup from '@/assets/app-mockup-hero.png';
const HowItWorksSection = () => {
  const steps = [{
    step: 1,
    icon: Download,
    title: 'Descarga la app',
    description: 'Obtén Magic Ways gratis desde App Store o Google Play. La instalación es rápida y sencilla.',
    color: 'bg-primary',
    textColor: 'text-primary-foreground'
  }, {
    step: 2,
    icon: Search,
    title: 'Explora destinos y servicios',
    description: 'Busca Pueblos Mágicos, descubre comercios locales, actividades auténticas y servicios únicos.',
    color: 'bg-gold',
    textColor: 'text-foreground'
  }, {
    step: 3,
    icon: Heart,
    title: 'Disfruta experiencias únicas',
    description: 'Vive momentos inolvidables mientras apoyas directamente a comercios y comunidades locales.',
    color: 'bg-emerald',
    textColor: 'text-emerald-foreground'
  }];
  return <section className="py-20 bg-accent/20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 reveal-on-scroll">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-foreground">
            ¿Cómo <span className="text-primary">funciona</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comenzar tu aventura por los Pueblos Mágicos de México es muy fácil. 
            Solo sigue estos tres simples pasos.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content - Steps */}
          <div className="space-y-8 reveal-on-scroll">
            {steps.map((stepItem, index) => {
            const Icon = stepItem.icon;
            return <Card key={index} className="overflow-hidden shadow-card hover-lift">
                  <CardContent className="p-0">
                    <div className="flex items-center">
                      {/* Step Number and Icon */}
                      <div className={`${stepItem.color} p-8 flex flex-col items-center justify-center min-w-[120px]`}>
                        <div className="text-4xl font-bold mb-2 opacity-90">
                          <span className={stepItem.textColor}>0{stepItem.step}</span>
                        </div>
                        <Icon size={32} className={stepItem.textColor} />
                      </div>

                      {/* Content */}
                      <div className="p-8 flex-1">
                        <h3 className="text-xl font-heading font-bold mb-3 text-foreground">
                          {stepItem.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {stepItem.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>;
          })}
          </div>

          {/* Right Content - Phone Mockup */}
          <div className="flex justify-center lg:justify-end reveal-on-scroll">
            <div className="relative">
              {/* Main Phone */}
              <div className="animate-float">
                <img src={appMockup} alt="Magic Ways App Process" className="w-80 h-auto max-w-full drop-shadow-2xl" />
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-8 -left-8 w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center animate-pulse">
                <Download size={24} className="text-primary" />
              </div>

              <div className="absolute top-1/2 -right-12 w-16 h-16 bg-gold/10 rounded-2xl flex items-center justify-center animate-pulse">
                <Search size={24} className="text-gold" />
              </div>

              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-emerald/10 rounded-2xl flex items-center justify-center animate-pulse">
                <Heart size={24} className="text-emerald" />
              </div>

              {/* Connecting Lines */}
              <div className="absolute top-8 left-8 w-px h-24 bg-gradient-to-b from-primary/50 to-transparent"></div>
              <div className="absolute top-32 left-8 w-px h-24 bg-gradient-to-b from-gold/50 to-transparent"></div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center reveal-on-scroll">
          
        </div>
      </div>
    </section>;
};
export default HowItWorksSection;