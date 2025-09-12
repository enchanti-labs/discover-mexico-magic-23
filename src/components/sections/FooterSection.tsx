import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import logoDark from '@/assets/logo-dark.png';

const FooterSection = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Destinos', href: '#destinos' },
    { name: 'Beneficios', href: '#beneficios' },
    { name: 'Experiencias', href: '#experiencias' }
  ];

  const legalLinks = [
    { name: 'Términos y Condiciones - Clientes', href: '/terminos-clientes' },
    { name: 'Términos y Condiciones - Negocios', href: '/terminos-negocios' },
    { name: 'Términos y Condiciones - Repartidores', href: '/terminos-repartidores' },
    { name: 'Política de Privacidad', href: '/privacidad' },
    { name: 'Aviso Legal', href: '/aviso-legal' }
  ];

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: 'https://facebook.com/magicways' },
    { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/magicways' },
    { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/magicways' }
  ];

  const scrollToSection = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer id="contacto" className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                src={logoDark} 
                alt="Magic Ways"
                className="w-10 h-10"
              />
              <span className="font-heading font-bold text-xl text-foreground">Magic Ways</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Conectamos viajeros con la magia de México. Descubre Pueblos Mágicos, 
              conecta con comercios locales y vive experiencias auténticas.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 bg-accent rounded-lg flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-200"
                    aria-label={social.name}
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-heading font-semibold text-foreground">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
              <li>
                <a 
                  href="#faq" 
                  onClick={() => scrollToSection('#faq')}
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-heading font-semibold text-foreground">Contacto</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                <Mail size={16} className="text-primary flex-shrink-0" />
                <a href="mailto:hola@magicways.mx" className="hover:text-primary transition-colors">
                  hola@magicways.mx
                </a>
              </div>
              <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                <Phone size={16} className="text-primary flex-shrink-0" />
                <a href="tel:+525512345678" className="hover:text-primary transition-colors">
                  +52 55 1234 5678
                </a>
              </div>
              <div className="flex items-start space-x-3 text-sm text-muted-foreground">
                <MapPin size={16} className="text-primary flex-shrink-0 mt-0.5" />
                <span>
                  Ciudad de México,<br />
                  México
                </span>
              </div>
            </div>
          </div>

          {/* Legal Links */}
          <div className="space-y-4">
            <h3 className="font-heading font-semibold text-foreground">Legal</h3>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-sm text-muted-foreground">
              © {currentYear} Magic Ways. Todos los derechos reservados.
            </div>
            <div className="flex items-center space-x-6 text-xs text-muted-foreground">
              <span>Hecho con ❤️ en México</span>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-emerald rounded-full"></div>
                <span>Sistema activo</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;