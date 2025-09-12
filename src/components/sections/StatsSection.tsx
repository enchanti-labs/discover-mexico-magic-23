import { useEffect, useState, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';

const StatsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const stats = [
    {
      number: 32,
      label: 'Estados',
      description: 'Cubrimos todo México',
      color: 'text-primary',
      bgColor: 'bg-primary/10'
    },
    {
      number: 120,
      label: 'Pueblos Mágicos',
      description: 'Destinos auténticos',
      color: 'text-gold',
      bgColor: 'bg-gold/10'
    },
    {
      number: 10000,
      label: 'Usuarios Activos',
      description: 'Viajeros conectados',
      color: 'text-emerald',
      bgColor: 'bg-emerald/10'
    },
    {
      number: 500,
      label: 'Comercios Locales',
      description: 'Negocios conectados',
      color: 'text-primary',
      bgColor: 'bg-primary/10'
    }
  ];

  // Animated counter hook
  const useAnimatedCounter = (end: number, duration: number = 2000) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!isVisible) return;

      let startTime: number;
      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // Easing function for smooth animation
        const easeOutExpo = 1 - Math.pow(2, -10 * progress);
        setCount(Math.floor(end * easeOutExpo));

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    }, [end, duration, isVisible]);

    return count;
  };

  // Intersection Observer to trigger animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const formatNumber = (num: number, originalNum: number) => {
    if (originalNum >= 10000) {
      return `${(num / 1000).toFixed(0)}K+`;
    } else if (originalNum >= 100) {
      return `${num}+`;
    }
    return num.toString();
  };

  return (
    <section id="estadisticas" ref={sectionRef} className="py-20 bg-accent/20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 reveal-on-scroll">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-foreground">
            Nuestro <span className="text-primary">Impacto</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Números que reflejan el crecimiento de Magic Ways y el impacto positivo 
            en el turismo y las comunidades locales de México.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const animatedCount = useAnimatedCounter(stat.number, 2500 + index * 200);
            
            return (
              <Card key={index} className="text-center hover-lift shadow-card reveal-on-scroll">
                <CardContent className="p-8">
                  <div className={`w-20 h-20 ${stat.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                    <span className={`text-3xl font-bold ${stat.color}`}>
                      {formatNumber(animatedCount, stat.number)}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-heading font-bold mb-2 text-foreground">
                    {stat.label}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm">
                    {stat.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Additional Impact Info */}
        <div className="mt-16 text-center reveal-on-scroll">
          <div className="bg-gradient-to-r from-primary/10 via-gold/10 to-emerald/10 rounded-3xl p-12">
            <h3 className="text-2xl font-heading font-bold mb-4 text-foreground">
              Construyendo puentes entre viajeros y comunidades
            </h3>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Cada interacción en Magic Ways contribuye al crecimiento económico sostenible 
              de los Pueblos Mágicos, preservando tradiciones culturales y generando oportunidades 
              de desarrollo para las comunidades locales.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;