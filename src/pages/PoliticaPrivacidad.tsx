import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import FooterSection from '@/components/sections/FooterSection';
import logoDark from '@/assets/logo-dark.png';

const PoliticaPrivacidad = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-background border-b border-border">
        <div className="container mx-auto px-4 py-6">
          <Link 
            to="/" 
            className="inline-flex items-center text-primary hover:text-primary/80 transition-colors mb-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Volver al inicio
          </Link>
          <div className="flex items-center space-x-3">
            <img 
              src={logoDark} 
              alt="Magic Ways"
              className="w-10 h-10"
            />
            <span className="font-heading font-bold text-xl text-foreground">Magic Ways</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-4xl font-heading font-bold text-gray-900 mb-8">
          Política de Privacidad
        </h1>
        
        <div className="prose prose-gray max-w-none">
          <p className="text-lg text-gray-600 mb-8">
            Última actualización: Enero 2025
          </p>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Introducción</h2>
              <p className="text-gray-700 leading-relaxed">
                En Magic Ways, respetamos su privacidad y estamos comprometidos a proteger sus datos personales. 
                Esta política explica cómo recopilamos, usamos y protegemos su información cuando utiliza nuestros servicios.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Datos que Recopilamos</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Recopilamos los siguientes tipos de información:
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Información Personal</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                <li>Nombre completo</li>
                <li>Dirección de correo electrónico</li>
                <li>Número de teléfono</li>
                <li>Preferencias de viaje</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">Información de Uso</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Páginas visitadas en nuestro sitio web</li>
                <li>Búsquedas realizadas</li>
                <li>Interacciones con comercios locales</li>
                <li>Datos de geolocalización (con su consentimiento)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Uso de la Información</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Utilizamos su información para:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Personalizar su experiencia en la plataforma</li>
                <li>Conectarlo con comercios y servicios relevantes</li>
                <li>Enviar recomendaciones de viaje personalizadas</li>
                <li>Mejorar nuestros servicios y funcionalidades</li>
                <li>Comunicarnos con usted sobre actualizaciones importantes</li>
                <li>Cumplir con requisitos legales</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Compartir Información</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                No vendemos sus datos personales. Compartimos información únicamente en los siguientes casos:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Con comercios locales para facilitar sus reservas (solo información necesaria)</li>
                <li>Con proveedores de servicios que nos ayudan a operar la plataforma</li>
                <li>Cuando sea requerido por ley o autoridades competentes</li>
                <li>Con su consentimiento explícito</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Seguridad de los Datos</h2>
              <p className="text-gray-700 leading-relaxed">
                Implementamos medidas de seguridad técnicas y organizativas para proteger sus datos contra 
                acceso no autorizado, alteración, divulgación o destrucción. Esto incluye encriptación, 
                acceso restringido y monitoreo continuo de nuestros sistemas.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Sus Derechos</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Como usuario, usted tiene derecho a:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Acceder a sus datos personales</li>
                <li>Rectificar información incorrecta</li>
                <li>Solicitar la eliminación de sus datos</li>
                <li>Oponerse al procesamiento de sus datos</li>
                <li>Portabilidad de sus datos</li>
                <li>Retirar su consentimiento en cualquier momento</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Cookies y Tecnologías Similares</h2>
              <p className="text-gray-700 leading-relaxed">
                Utilizamos cookies y tecnologías similares para mejorar su experiencia, analizar el uso de nuestro 
                sitio y personalizar contenido. Puede gestionar sus preferencias de cookies a través de la 
                configuración de su navegador.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Retención de Datos</h2>
              <p className="text-gray-700 leading-relaxed">
                Conservamos sus datos personales solo durante el tiempo necesario para cumplir con los fines 
                para los que fueron recopilados, o según lo requiera la ley aplicable.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contacto</h2>
              <p className="text-gray-700 leading-relaxed">
                Para ejercer sus derechos o si tiene preguntas sobre esta política, puede contactarnos en:
              </p>
              <div className="mt-3 text-gray-700">
                <p>Email: <a href="mailto:privacidad@magic-ways.com" className="text-primary hover:underline">privacidad@magic-ways.com</a></p>
                <p>Teléfono: +52 55 1234 5678</p>
              </div>
            </section>
          </div>
        </div>

        {/* Back to top button */}
        <div className="mt-12 text-center">
          <Link 
            to="/" 
            className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Volver al Inicio
          </Link>
        </div>
      </main>

      <FooterSection />
    </div>
  );
};

export default PoliticaPrivacidad;