import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, ArrowRight } from 'lucide-react';
import oaxacaImg from '@/assets/destination-oaxaca.jpg';
import guanajuatoImg from '@/assets/destination-guanajuato.jpg';
import chiapasImg from '@/assets/destination-chiapas.jpg';
import pueblaImg from '@/assets/destination-puebla.jpg';

const DestinationsSection = () => {
  const destinations = [
    {
      name: 'Oaxaca de Juárez',
      state: 'Oaxaca',
      description: 'Patrimonio cultural, gastronomía tradicional y arte ancestral',
      image: oaxacaImg,
      businesses: 45
    },
    {
      name: 'Guanajuato',
      state: 'Guanajuato', 
      description: 'Arquitectura colonial, túneles únicos y festivales culturales',
      image: guanajuatoImg,
      businesses: 38
    },
    {
      name: 'San Cristóbal de las Casas',
      state: 'Chiapas',
      description: 'Mercados indígenas, arquitectura colonial y cultura maya',
      image: chiapasImg,
      businesses: 32
    },
    {
      name: 'Puebla de Zaragoza',
      state: 'Puebla',
      description: 'Arquitectura barroca, talavera y gastronomía tradicional',
      image: pueblaImg,
      businesses: 52
    },
    {
      name: 'Taxco de Alarcón',
      state: 'Guerrero',
      description: 'Plata artesanal, arquitectura colonial y tradiciones mineras',
      image: guanajuatoImg,
      businesses: 25
    },
    {
      name: 'Real de Catorce',
      state: 'San Luis Potosí',
      description: 'Pueblo minero histórico, desierto y cultura huichol',
      image: oaxacaImg,
      businesses: 18
    }
  ];

  const states = [
    'Aguascalientes', 'Baja California', 'Baja California Sur', 'Campeche',
    'Chiapas', 'Chihuahua', 'Coahuila', 'Colima', 'Durango', 'Guanajuato',
    'Guerrero', 'Hidalgo', 'Jalisco', 'México', 'Michoacán', 'Morelos',
    'Nayarit', 'Nuevo León', 'Oaxaca', 'Puebla', 'Querétaro', 'Quintana Roo',
    'San Luis Potosí', 'Sinaloa', 'Sonora', 'Tabasco', 'Tamaulipas',
    'Tlaxcala', 'Veracruz', 'Yucatán', 'Zacatecas', 'Ciudad de México'
  ];

  return (
    <section id="destinos" className="py-20 bg-accent/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 reveal-on-scroll">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-foreground">
            Explora México <span className="text-primary">pueblo por pueblo</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Descubre la riqueza cultural de México a través de sus Pueblos Mágicos. 
            Cada destino cuenta una historia única llena de tradiciones, sabores y experiencias auténticas.
          </p>
        </div>

        {/* Featured Destinations */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {destinations.map((destination, index) => (
            <Card key={index} className="overflow-hidden hover-lift shadow-card reveal-on-scroll">
              <div className="relative h-48">
                <img 
                  src={destination.image} 
                  alt={destination.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="flex items-center mb-2">
                    <MapPin size={16} className="mr-1" />
                    <span className="text-sm">{destination.state}</span>
                  </div>
                  <h3 className="font-semibold text-lg">{destination.name}</h3>
                </div>
                <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                  {destination.businesses} comercios
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-muted-foreground mb-4">{destination.description}</p>
                <Button variant="outline" size="sm" className="w-full">
                  Explorar destino
                  <ArrowRight size={16} className="ml-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* All States Grid */}
        <div className="reveal-on-scroll">
          <h3 className="text-2xl font-heading font-bold text-center mb-8">
            Cubrimos los <span className="text-primary">32 Estados</span> de México
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-6xl mx-auto">
            {states.map((state, index) => (
              <div 
                key={index}
                className="bg-background border border-border rounded-lg p-3 text-center hover:border-primary hover:bg-primary/5 transition-smooth cursor-pointer"
              >
                <span className="text-sm font-medium text-foreground">{state}</span>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Button size="lg" className="gradient-hero text-white">
              Ver todos los destinos
              <ArrowRight size={20} className="ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DestinationsSection;