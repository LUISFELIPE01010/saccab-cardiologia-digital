import { Button } from "@/components/ui/button";
import { HeartPulse, MessageSquare, Instagram } from "lucide-react";
const FooterSection = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/551332080800', '_blank');
  };
  const handleInstagramClick = () => {
    window.open('https://instagram.com/drphilipecardio', '_blank');
  };
  return <footer className="bg-primary-dark text-white py-16 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full transform translate-x-1/2 -translate-y-1/2 opacity-20"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/10 rounded-full transform -translate-x-1/3 translate-y-1/3 opacity-20"></div>
      
      <div className="container max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center animate-fade-in">
          <div className="mb-12">
            <h3 className="text-3xl md:text-4xl font-montserrat font-bold mb-4">
              Pronto para cuidar do seu coração?
            </h3>
            <p className="text-xl font-open-sans text-blue-100 max-w-2xl mx-auto">
              Entre em contato e agende sua consulta com o Dr. Philipe Saccab
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button onClick={handleWhatsAppClick} className="bg-white hover:bg-gray-100 text-primary font-montserrat font-semibold px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
              <MessageSquare className="h-5 w-5" />
              WhatsApp
            </Button>
            <Button onClick={handleInstagramClick} variant="outline" className="border-white hover:bg-white font-montserrat font-semibold px-8 py-4 text-lg rounded-full transition-all duration-300 flex items-center gap-2 text-sky-400">
              <Instagram className="h-5 w-5" />
              Instagram
            </Button>
          </div>

          <div className="border-t border-blue-300/30 pt-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="flex items-center justify-center md:justify-start gap-3">
                <HeartPulse className="h-8 w-8 text-primary" />
                <div>
                  <h4 className="text-2xl font-montserrat font-bold text-primary mb-1">
                    Angio Corpore
                  </h4>
                  <p className="font-open-sans text-blue-100">
                    Medicina Cardiovascular
                  </p>
                </div>
              </div>
              
              <div className="text-center md:text-right">
                <p className="font-montserrat font-semibold text-lg">
                  Dr. Philipe Saccab
                </p>
                <p className="font-open-sans text-blue-100">
                  CRM SP 121.093 - RQE 75153
                </p>
              </div>
            </div>
            
            <div className="mt-8 pt-8 border-t border-blue-300/30">
              <p className="font-open-sans text-blue-200 text-sm">© 2025 Dr. Philipe Saccab - Todos os direitos reservados</p>
            </div>
          </div>
        </div>
      </div>
    </footer>;
};
export default FooterSection;