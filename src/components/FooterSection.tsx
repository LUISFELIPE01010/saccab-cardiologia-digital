
import { Button } from "@/components/ui/button";

const FooterSection = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/551332080800', '_blank');
  };

  const handleInstagramClick = () => {
    window.open('https://instagram.com/angiocorpore', '_blank');
  };

  return (
    <footer className="bg-primary-dark text-white py-16">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center animate-fade-in">
          <div className="mb-8">
            <h3 className="text-3xl md:text-4xl font-montserrat font-bold mb-4">
              Pronto para cuidar do seu coração?
            </h3>
            <p className="text-xl font-open-sans text-blue-100 max-w-2xl mx-auto">
              Entre em contato e agende sua consulta com o Dr. Philipe Saccab
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              onClick={handleWhatsAppClick}
              className="bg-green-500 hover:bg-green-600 text-white font-montserrat font-semibold px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              WhatsApp
            </Button>
            <Button 
              onClick={handleInstagramClick}
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary-dark font-montserrat font-semibold px-8 py-4 text-lg rounded-full transition-all duration-300"
            >
              Instagram
            </Button>
          </div>

          <div className="border-t border-blue-300/30 pt-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h4 className="text-2xl font-montserrat font-bold text-primary mb-2">
                  Angio Corpore
                </h4>
                <p className="font-open-sans text-blue-100">
                  Medicina Cardiovascular
                </p>
              </div>
              
              <div className="text-right">
                <p className="font-montserrat font-semibold text-lg">
                  Dr. Philipe Saccab
                </p>
                <p className="font-open-sans text-blue-100">
                  CRM SP 121.093 - RQE 75153
                </p>
              </div>
            </div>
            
            <div className="mt-8 pt-8 border-t border-blue-300/30">
              <p className="font-open-sans text-blue-200 text-sm">
                © 2024 Dr. Philipe Saccab - Todos os direitos reservados
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
