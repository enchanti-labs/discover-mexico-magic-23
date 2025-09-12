import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, MapPin, Clock, Star } from 'lucide-react';
import oaxacaImg from '@/assets/destination-oaxaca.jpg';
import guanajuatoImg from '@/assets/destination-guanajuato.jpg';

const ExperiencesSection = () => {
  const experiences = [
    {
      title: 'Mercados de San Cristóbal de las Casas',
      location: 'Chiapas',
      image: oaxacaImg,
      duration: '3-4 horas',
      rating: 4.8,
      description: 'Sumérgete en los colores, aromas y sabores de los mercados tradicionales indígenas. Conoce artesanos locales, prueba café chiapaneco auténtico y descubre textiles únicos elaborados con técnicas ancestrales.',
      highlights: ['Textiles artesanales', 'Café de especialidad', 'Cultura tzotzil']
    },
    {
      title: 'Talleres de Talavera en Puebla',
      location: 'Puebla',
      image: guanajuatoImg,
      duration: '2-3 horas', 
      rating: 4.9,
      description: 'Aprende el arte centenario de la cerámica de talavera directamente de maestros artesanos. Crea tu propia pieza mientras descubres los secretos de esta tradición reconocida como Patrimonio Cultural Inmaterial.',
      highlights: ['Arte tradicional', 'Taller práctico', 'Certificado UNESCO']
    },
    {
      title: 'Recorrido Gastronómico en Oaxaca',
      location: 'Oaxaca',
      image: oaxacaImg,
      duration: '4-5 horas',
      rating: 4.7,
      description: 'Explora la cocina oaxaqueña en mercados locales, restaurantes familiares y cocinas tradicionales. Degusta moles auténticos, quesos artesanales, mezcal y aprende sobre ingredientes prehispánicos únicos.',
      highlights: ['7 tipos de mole', 'Mezcal tradicional', 'Ingredientes nativos']
    },
    {
      title: 'Túneles Subterráneos de Guanajuato',
      location: 'Guanajuato',
      image: guanajuatoImg,
      duration: '1.5-2 horas',
      rating: 4.6,
      description: 'Descubre la fascinante red de túneles que conecta el centro histórico. Conoce la historia minera de la ciudad, leyendas locales y arquitectura única mientras caminas por estos pasajes subterráneos.',
      highlights: ['Historia minera', 'Arquitectura única', 'Leyendas locales']
    }
  ];

  return (
    <section id="experiencias" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 reveal-on-scroll">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-foreground">
            Experiencias <span className="text-primary">Destacadas</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Vive momentos únicos e inolvidables en cada Pueblo Mágico. 
            Experiencias auténticas que conectan con la cultura, tradiciones y corazón de México.
          </p>
        </div>

        {/* Experiences Grid */}
        <div className="grid lg:grid-cols-2 gap-12">
          {experiences.map((experience, index) => (
            <Card key={index} className="overflow-hidden hover-lift shadow-elegant reveal-on-scroll">
              <div className="grid md:grid-cols-5 h-full">
                {/* Image */}
                <div className="md:col-span-2 relative h-64 md:h-auto">
                  <img 
                    src={experience.image} 
                    alt={experience.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  
                  {/* Rating Badge */}
                  <div className="absolute top-4 left-4 bg-background/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center space-x-1">
                    <Star size={14} className="text-gold fill-gold" />
                    <span className="text-sm font-semibold">{experience.rating}</span>
                  </div>

                  {/* Location */}
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="flex items-center space-x-1">
                      <MapPin size={16} />
                      <span className="text-sm font-medium">{experience.location}</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="md:col-span-3">
                  <CardContent className="p-8 h-full flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xl font-heading font-bold text-foreground leading-tight">
                          {experience.title}
                        </h3>
                        <div className="flex items-center text-muted-foreground text-sm">
                          <Clock size={16} className="mr-1" />
                          {experience.duration}
                        </div>
                      </div>

                      <p className="text-muted-foreground leading-relaxed mb-6">
                        {experience.description}
                      </p>

                      {/* Highlights */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {experience.highlights.map((highlight, idx) => (
                          <span 
                            key={idx}
                            className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full font-medium"
                          >
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Button */}
                    <Button variant="outline" className="w-full">
                      Ver experiencia completa
                      <ArrowRight size={16} className="ml-2" />
                    </Button>
                  </CardContent>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 reveal-on-scroll">
          <div className="bg-accent/30 rounded-2xl p-8">
            <h3 className="text-2xl font-heading font-bold mb-4 text-foreground">
              ¿Listo para vivir estas experiencias?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Descarga Magic Ways y comienza a explorar México de una forma completamente nueva. 
              Cada pueblo tiene historias únicas esperándote.
            </p>
            <Button size="lg" className="gradient-hero text-white">
              Explorar más experiencias
              <ArrowRight size={20} className="ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperiencesSection;