
import { Card, CardContent } from "@/components/ui/card";

const TestimonialsSection = () => {
  const testimonials = [
    {
      text: "Profissional atencioso, me ajudou a controlar a pressão com tranquilidade. O Dr. Philipe sempre explica tudo de forma clara e me sinto muito segura com o acompanhamento.",
      author: "Maria Silva",
      role: "Paciente há 2 anos"
    },
    {
      text: "Fui muito bem atendido e saí com todas as orientações necessárias. O doutor é muito dedicado e demonstra real preocupação com o bem-estar dos pacientes.",
      author: "João Santos",
      role: "Paciente"
    },
    {
      text: "Excelente médico! Me ajudou não só no tratamento, mas também na prevenção. Sinto que estou em boas mãos e minha família também tem total confiança no trabalho dele.",
      author: "Ana Oliveira",
      role: "Paciente há 3 anos"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 to-blue-50/50">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-primary-dark mb-6">
            Depoimentos de Pacientes
          </h2>
          <p className="text-xl font-open-sans text-gray-600 max-w-3xl mx-auto">
            Veja o que nossos pacientes falam sobre o cuidado e atendimento recebido
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="animate-scale-in hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white">
              <CardContent className="p-6">
                <div className="mb-4">
                  <div className="flex text-primary text-2xl mb-4">
                    ★★★★★
                  </div>
                  <p className="font-open-sans text-gray-700 leading-relaxed italic mb-6">
                    "{testimonial.text}"
                  </p>
                </div>
                <div className="border-t pt-4">
                  <p className="font-montserrat font-semibold text-primary-dark">
                    {testimonial.author}
                  </p>
                  <p className="font-open-sans text-gray-500 text-sm">
                    {testimonial.role}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
