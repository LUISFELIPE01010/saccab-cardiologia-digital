
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/551332080800?text=Olá%2C+gostaria+de+agendar+uma+consulta+com+o+Dr.+Philipe+Saccab', '_blank');
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-white via-blue-50/30 to-primary/5 flex items-center px-4 py-20">
      <div className="container max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1 animate-fade-in">
            <div className="mb-6">
              <h1 className="text-4xl md:text-6xl font-montserrat font-bold text-primary-dark mb-4 leading-tight">
                Dr. Philipe Saccab
              </h1>
              <h2 className="text-xl md:text-3xl font-montserrat font-medium text-primary mb-6">
                Especialista em Cardiologia
              </h2>
            </div>
            
            <div className="mb-8">
              <p className="text-lg font-open-sans text-gray-700 leading-relaxed">
                Cuide do seu coração com um atendimento humano, preciso e baseado na medicina de excelência. 
                O Dr. Philipe Saccab oferece diagnóstico e acompanhamento personalizado para garantir mais saúde, 
                qualidade de vida e tranquilidade para você e sua família.
              </p>
            </div>

            <Button 
              onClick={handleWhatsAppClick}
              className="bg-primary hover:bg-primary-dark text-white font-montserrat font-semibold px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
            >
              Agendar Consulta <ArrowRight className="h-5 w-5" />
            </Button>
          </div>
          
          <div className="order-1 md:order-2 flex justify-center md:justify-end animate-scale-in">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-blue-100 rounded-full z-0"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-full z-0"></div>
              <img 
                src="/lovable-uploads/81bf765d-eafe-4b16-8b53-fb848a81895e.png" 
                alt="Dr. Philipe Saccab - Cardiologista"
                className="w-64 h-64 md:w-80 md:h-80 rounded-2xl object-cover border-4 border-white shadow-2xl z-10 relative"
                loading="eager"
                fetchPriority="high"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
