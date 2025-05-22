
const AboutSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-primary-dark mb-8">
              Quem é o Dr. Philipe Saccab?
            </h2>
            <div className="space-y-6 font-open-sans text-gray-700 leading-relaxed">
              <p className="text-lg">
                Com uma sólida formação médica e anos de experiência em cardiologia, 
                o Dr. Philipe Saccab dedica sua carreira ao cuidado integral do coração, 
                sempre priorizando o atendimento humanizado e personalizado.
              </p>
              <p className="text-lg">
                Especialista em diagnóstico, prevenção e tratamento de doenças cardiovasculares, 
                atua com foco na medicina preventiva, oferecendo aos pacientes as mais modernas 
                técnicas de avaliação e acompanhamento cardiológico.
              </p>
              <p className="text-lg">
                Sua abordagem combina conhecimento técnico avançado com atenção às necessidades 
                individuais de cada paciente, garantindo um cuidado médico de excelência que 
                prioriza a qualidade de vida e o bem-estar.
              </p>
              <div className="bg-primary/10 p-6 rounded-lg mt-8">
                <p className="font-semibold text-primary-dark">
                  CRM SP 121.093 - RQE 75153
                </p>
              </div>
            </div>
          </div>
          
          <div className="animate-scale-in">
            <div className="relative">
              <img 
                src="/lovable-uploads/97899204-f19e-43ed-b0f5-1870c773ee22.png" 
                alt="Dr. Philipe Saccab - Perfil Profissional"
                className="w-full max-w-md mx-auto rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white text-2xl">❤️</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
