
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const ServicesSection = () => {
  const services = [
    {
      title: "Consulta Cardiológica",
      description: "Avaliação completa da saúde cardiovascular com exame clínico detalhado e orientações personalizadas."
    },
    {
      title: "Avaliação de Risco Cirúrgico",
      description: "Análise cardiológica especializada para procedimentos cirúrgicos, garantindo segurança e tranquilidade."
    },
    {
      title: "Controle de Hipertensão e Colesterol",
      description: "Acompanhamento especializado para controle efetivo da pressão arterial e níveis de colesterol."
    },
    {
      title: "Check-up Cardiológico",
      description: "Avaliação preventiva completa para detectar precocemente possíveis alterações cardiovasculares."
    },
    {
      title: "Exames Preventivos",
      description: "Solicitação e interpretação de exames cardiológicos para prevenção e diagnóstico precoce."
    },
    {
      title: "Acompanhamento Personalizado",
      description: "Seguimento contínuo e individualizado para manutenção da saúde cardiovascular."
    }
  ];

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/551332080800?text=Olá%2C+gostaria+de+saber+mais+sobre+os+serviços+do+Dr.+Philipe+Saccab', '_blank');
  };

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50/50 to-white">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-primary-dark mb-6">
            Serviços e Especialidades
          </h2>
          <p className="text-xl font-open-sans text-gray-600 max-w-3xl mx-auto">
            Cuidado cardiológico completo com atendimento personalizado e tecnologia de ponta
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="animate-scale-in hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white group hover:bg-primary/5">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-montserrat font-semibold text-primary-dark group-hover:text-primary transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-gray-600 font-open-sans leading-relaxed">
                  {service.description}
                </CardDescription>
                <Button 
                  onClick={handleWhatsAppClick}
                  variant="outline" 
                  className="w-full border-primary text-primary hover:bg-primary hover:text-white font-montserrat font-medium transition-all duration-300"
                >
                  Quero saber mais
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
