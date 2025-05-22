
import { Shield, Zap, Smile, Users } from "lucide-react";

const BenefitsSection = () => {
  const benefits = [
    {
      title: "Prevenção de Doenças Cardíacas",
      description: "Identificação precoce de fatores de risco e implementação de estratégias preventivas eficazes.",
      icon: Shield
    },
    {
      title: "Diagnóstico Precoce",
      description: "Detecção antecipada de alterações cardiovasculares para tratamento mais efetivo.",
      icon: Zap
    },
    {
      title: "Qualidade de Vida",
      description: "Melhoria significativa no bem-estar e capacidade funcional através do cuidado especializado.",
      icon: Smile
    },
    {
      title: "Atendimento Personalizado",
      description: "Cuidado médico individual, considerando as necessidades específicas de cada paciente.",
      icon: Users
    }
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full transform translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-50 rounded-full transform -translate-x-1/3 translate-y-1/3"></div>
      
      <div className="container max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-primary-dark mb-6">
            Benefícios do Acompanhamento Cardíaco
          </h2>
          <p className="text-xl font-open-sans text-gray-600 max-w-3xl mx-auto">
            Invista na sua saúde cardiovascular e desfrute de uma vida mais plena e tranquila
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div key={index} className="flex p-6 rounded-xl bg-gradient-to-r from-primary/5 to-blue-50/50 hover:shadow-lg transition-all duration-300 animate-scale-in">
                <div className="flex-shrink-0 mr-6">
                  <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center shadow-md">
                    <Icon className="h-7 w-7 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-montserrat font-semibold text-primary-dark mb-3">
                    {benefit.title}
                  </h3>
                  <p className="font-open-sans text-gray-700 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center animate-fade-in relative">
          <div className="bg-gradient-to-r from-primary/10 to-blue-100/50 rounded-2xl p-8 max-w-4xl mx-auto">
            <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-white p-4 rounded-full shadow-xl">
              <HeartPulse className="h-10 w-10 text-primary" />
            </div>
            <h3 className="text-2xl font-montserrat font-semibold text-primary-dark mb-4 mt-6">
              Cuide do seu coração hoje mesmo
            </h3>
            <p className="font-open-sans text-gray-700 text-lg">
              A prevenção é o melhor remédio. Agende sua consulta e tenha a tranquilidade 
              de estar com sua saúde cardiovascular em dia.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
