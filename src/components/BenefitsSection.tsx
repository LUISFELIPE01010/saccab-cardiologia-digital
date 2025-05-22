
const BenefitsSection = () => {
  const benefits = [
    {
      title: "Prevenção de Doenças Cardíacas",
      description: "Identificação precoce de fatores de risco e implementação de estratégias preventivas eficazes."
    },
    {
      title: "Diagnóstico Precoce",
      description: "Detecção antecipada de alterações cardiovasculares para tratamento mais efetivo."
    },
    {
      title: "Qualidade de Vida",
      description: "Melhoria significativa no bem-estar e capacidade funcional através do cuidado especializado."
    },
    {
      title: "Atendimento Personalizado",
      description: "Cuidado médico individual, considerando as necessidades específicas de cada paciente."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-primary-dark mb-6">
            Benefícios do Acompanhamento Cardíaco
          </h2>
          <p className="text-xl font-open-sans text-gray-600 max-w-3xl mx-auto">
            Invista na sua saúde cardiovascular e desfrute de uma vida mais plena e tranquila
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-start space-x-4 p-6 rounded-xl bg-gradient-to-r from-primary/5 to-blue-50/50 hover:shadow-lg transition-all duration-300 animate-scale-in">
              <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                <span className="text-white text-xl">❤️</span>
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
          ))}
        </div>

        <div className="text-center animate-fade-in">
          <div className="bg-gradient-to-r from-primary/10 to-blue-100/50 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-montserrat font-semibold text-primary-dark mb-4">
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
