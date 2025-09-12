import { Card, CardContent } from '@/components/ui/card';
import { Store, Compass, Package, Heart, Smartphone, Users, MapPin, Star } from 'lucide-react';
import appScreens from '@/assets/app-screens-multiple.png';

const BenefitsSection = () => {
  const benefits = [
    {
      icon: Store,
      title: 'Conecta con comercios locales',
      description: 'Encuentra restaurantes, tiendas de artesanías, hoteles boutique y servicios únicos en cada destino',
      color: 'text-primary'
    },
    {
      icon: Compass,
      title: 'Explora actividades únicas',
      description: 'Descubre experiencias auténticas, tours culturales, talleres artesanales y eventos tradicionales',
      color: 'text-gold'
    },
    {
      icon: Package,
      title: 'Productos a domicilio',
      description: 'Ordena artesanías, productos locales y especialidades gastronómicas directamente a tu hospedaje',
      color: 'text-emerald'
    },
    {
      icon: Heart,
      title: 'Apoya la economía local',
      description: 'Tu consumo contribuye directamente al desarrollo y bienestar de las comunidades locales',
      color: 'text-primary'
    }
  ];

  const features = [
    {
      icon: Smartphone,
      title: 'Interfaz intuitiva',
      description: 'Diseño pensado para turistas, fácil navegación y acceso rápido a lo que necesitas'
    },
    {
      icon: MapPin,
      title: 'Geolocalización',
      description: 'Encuentra comercios y actividades cercanas a tu ubicación actual'
    },
    {
      icon: Users,
      title: 'Comunidad activa',
      description: 'Conecta con otros viajeros y obtén recomendaciones de locales'
    },
    {
      icon: Star,
      title: 'Experiencias verificadas',
      description: 'Todas las actividades y comercios están verificados por nuestro equipo'
    }
  ];

  return (
    <section id="beneficios" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content - Benefits */}
          <div className="reveal-on-scroll">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-foreground">
              Beneficios de la <span className="text-primary">Magic Ways</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-12">
              Una experiencia completa que transforma la forma de viajar por México, 
              conectando turistas con la esencia auténtica de cada pueblo.
            </p>

            <div className="space-y-8">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-accent rounded-xl flex items-center justify-center">
                      <Icon size={24} className={benefit.color} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2 text-foreground">{benefit.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Content - App Preview */}
          <div className="reveal-on-scroll">
            <div className="relative">
              <img 
                src={appScreens} 
                alt="Magic Ways App Benefits" 
                className="w-full h-auto rounded-2xl shadow-elegant"
              />
              
              {/* Floating Feature Cards */}
              <div className="absolute -left-8 top-1/4 hidden lg:block">
                <Card className="w-64 shadow-mexican">
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Store size={20} className="text-primary" />
                      </div>
                      <div>
                        <div className="font-semibold text-sm">500+ Comercios</div>
                        <div className="text-xs text-muted-foreground">Conectados en la plataforma</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="absolute -right-8 bottom-1/4 hidden lg:block">
                <Card className="w-64 shadow-mexican">
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-emerald/10 rounded-lg flex items-center justify-center">
                        <Heart size={20} className="text-emerald" />
                      </div>
                      <div>
                        <div className="font-semibold text-sm">Impacto Positivo</div>
                        <div className="text-xs text-muted-foreground">En comunidades locales</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Features */}
        <div className="mt-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="text-center hover-lift shadow-card reveal-on-scroll">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Icon size={28} className="text-primary" />
                    </div>
                    <h3 className="font-semibold mb-2 text-foreground">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;