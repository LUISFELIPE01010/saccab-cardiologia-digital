
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/551332080800?text=Olá%2C+gostaria+de+agendar+uma+consulta+com+o+Dr.+Philipe+Saccab', '_blank');
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-white via-blue-50/30 to-primary/5 flex items-center justify-center px-4 py-20">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center animate-fade-in">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-montserrat font-bold text-primary-dark mb-4 leading-tight">
              Dr. Philipe Saccab
            </h1>
            <h2 className="text-2xl md:text-3xl font-montserrat font-medium text-primary mb-8">
              Especialista em Cardiologia
            </h2>
          </div>
          
          <div className="max-w-4xl mx-auto mb-12">
            <p className="text-lg md:text-xl font-open-sans text-gray-700 leading-relaxed">
              Cuide do seu coração com um atendimento humano, preciso e baseado na medicina de excelência. 
              O Dr. Philipe Saccab oferece diagnóstico e acompanhamento personalizado para garantir mais saúde, 
              qualidade de vida e tranquilidade para você e sua família.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={handleWhatsAppClick}
              className="bg-primary hover:bg-primary-dark text-white font-montserrat font-semibold px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Agendar Consulta
            </Button>
          </div>

          <div className="mt-16 animate-scale-in">
            <div className="inline-block bg-white rounded-full p-2 shadow-lg">
              <img 
                src="/lovable-uploads/81bf765d-eafe-4b16-8b53-fb848a81895e.png" 
                alt="Dr. Philipe Saccab - Cardiologista"
                className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-primary/20"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
