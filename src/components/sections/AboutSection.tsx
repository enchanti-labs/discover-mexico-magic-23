import { Smartphone, Users, MapPin, Heart } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import appScreens from '@/assets/app-screens-multiple.png';

const AboutSection = () => {
  const features = [
    {
      icon: MapPin,
      title: 'Explora Destinos',
      description: 'Descubre más de 120 Pueblos Mágicos auténticos'
    },
    {
      icon: Users,
      title: 'Conecta Localmente',
      description: 'Encuentra comercios y servicios locales únicos'
    },
    {
      icon: Smartphone,
      title: 'Experiencias Móviles',
      description: 'Todo en la palma de tu mano, fácil y rápido'
    },
    {
      icon: Heart,
      title: 'Apoya la Economía',
      description: 'Contribuye al desarrollo de comunidades locales'
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="reveal-on-scroll">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-foreground">
              ¿Qué es <span className="text-primary">Magic Ways</span>?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Una app móvil innovadora que conecta turistas con comercios locales, 
              experiencias auténticas, servicios y productos en más de 120 Pueblos Mágicos 
              de México. Descubre la verdadera esencia de cada destino mientras apoyas 
              a las comunidades locales.
            </p>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <Card key={index} className="border-border hover-lift shadow-card">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                        <Icon size={24} className="text-primary" />
                      </div>
                      <h3 className="font-semibold mb-2 text-foreground">{feature.title}</h3>
                      <p className="text-muted-foreground text-sm">{feature.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Right Content - App Screenshots */}
          <div className="reveal-on-scroll flex justify-center">
            <img 
              src={appScreens} 
              alt="Magic Ways App Screenshots" 
              className="max-w-full h-auto rounded-2xl shadow-elegant"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;