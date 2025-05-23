
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Stethoscope, Activity, LineChart, ClipboardCheck, HeartPulse, UserCheck } from "lucide-react";
import { useState } from "react";

const ServicesSection = () => {
  const [openDialog, setOpenDialog] = useState<number | null>(null);

  const services = [
    {
      title: "Consulta Cardiológica",
      description: "Avaliação completa da saúde cardiovascular com exame clínico detalhado e orientações personalizadas.",
      summary: "Nossa consulta cardiológica completa inclui anamnese, exame físico, avaliação de exames complementares e orientação terapêutica personalizada. Ideal para acompanhamento preventivo e tratamento de condições cardiovasculares.",
      icon: Stethoscope
    },
    {
      title: "Avaliação de Risco Cirúrgico",
      description: "Análise cardiológica especializada para procedimentos cirúrgicos, garantindo segurança e tranquilidade.",
      summary: "Avaliação pré-operatória minuciosa para determinar o risco cardiovascular em cirurgias. Inclui análise de exames, histórico médico e recomendações específicas para sua condição, assegurando máxima segurança durante procedimentos cirúrgicos.",
      icon: ClipboardCheck
    },
    {
      title: "Controle de Hipertensão e Colesterol",
      description: "Acompanhamento especializado para controle efetivo da pressão arterial e níveis de colesterol.",
      summary: "Programa personalizado para monitoramento e controle da pressão arterial e níveis lipídicos. Inclui ajuste medicamentoso, recomendações de estilo de vida e acompanhamento frequente para manutenção dos parâmetros ideais.",
      icon: Activity
    },
    {
      title: "Check-up Cardiológico",
      description: "Avaliação preventiva completa para detectar precocemente possíveis alterações cardiovasculares.",
      summary: "Programa completo de avaliação cardiovascular preventiva, incluindo exames complementares, eletrocardiograma, análise de fatores de risco e orientações detalhadas para manutenção da saúde cardíaca.",
      icon: HeartPulse
    },
    {
      title: "Exames Preventivos",
      description: "Solicitação e interpretação de exames cardiológicos para prevenção e diagnóstico precoce.",
      summary: "Solicitação e interpretação especializada de exames como eletrocardiograma, ecocardiograma, teste ergométrico e holter. Avaliação personalizada dos resultados com explicações claras e conduta adequada.",
      icon: LineChart
    },
    {
      title: "Acompanhamento Personalizado",
      description: "Seguimento contínuo e individualizado para manutenção da saúde cardiovascular.",
      summary: "Acompanhamento contínuo e individualizado da sua saúde cardiovascular, com consultas periódicas, ajustes terapêuticos e orientações específicas para suas necessidades. Facilidade de acesso médico entre consultas para dúvidas urgentes.",
      icon: UserCheck
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
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="animate-scale-in hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white group hover:bg-primary/5 overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-bl-full"></div>
                <CardHeader className="pb-4 relative">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl font-montserrat font-semibold text-primary-dark group-hover:text-primary transition-colors">
                      {service.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="text-gray-600 font-open-sans leading-relaxed">
                    {service.description}
                  </CardDescription>
                  <Dialog open={openDialog === index} onOpenChange={(open) => setOpenDialog(open ? index : null)}>
                    <DialogTrigger asChild>
                      <Button 
                        variant="outline" 
                        className="w-full border-primary text-primary hover:bg-primary hover:text-white font-montserrat font-medium transition-all duration-300"
                      >
                        Quero saber mais
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-md border-0 shadow-lg">
                      <DialogHeader>
                        <DialogTitle className="flex items-center gap-3 text-xl font-montserrat font-semibold text-primary">
                          <div className="p-2 bg-primary/10 rounded-lg">
                            <Icon className="h-6 w-6 text-primary" />
                          </div>
                          {service.title}
                        </DialogTitle>
                      </DialogHeader>
                      <DialogDescription className="text-gray-600 font-open-sans leading-relaxed py-4">
                        {service.summary}
                      </DialogDescription>
                      <DialogFooter>
                        <Button 
                          onClick={handleWhatsAppClick}
                          className="w-full bg-primary hover:bg-primary/90 text-white font-montserrat font-medium rounded-full px-8 py-6 h-auto shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                        >
                          Agendar Consulta pelo WhatsApp
                        </Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
