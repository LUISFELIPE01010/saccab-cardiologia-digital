
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      text: "Profissional atencioso, me ajudou a controlar a pressão com tranquilidade. O Dr. Philipe sempre explica tudo de forma clara e me sinto muito segura com o acompanhamento.",
      author: "Maria Silva",
      role: "Paciente há 2 anos",
      avatar: "/lovable-uploads/83b800b0-bf79-4565-a137-10d6acbaf19b.png"
    },
    {
      text: "Fui muito bem atendido e saí com todas as orientações necessárias. O doutor é muito dedicado e demonstra real preocupação com o bem-estar dos pacientes.",
      author: "João Santos",
      role: "Paciente",
      avatar: "/lovable-uploads/97899204-f19e-43ed-b0f5-1870c773ee22.png"
    },
    {
      text: "Excelente médico! Me ajudou não só no tratamento, mas também na prevenção. Sinto que estou em boas mãos e minha família também tem total confiança no trabalho dele.",
      author: "Ana Oliveira",
      role: "Paciente há 3 anos",
      avatar: "/lovable-uploads/73933ada-8561-4f0b-b8bd-1127d85d6ab9.png"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 to-blue-50/50 relative">
      <div className="absolute top-0 left-0 w-full h-20 bg-white rounded-b-[50%]"></div>
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
            <Card key={index} className="animate-scale-in hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white relative">
              <div className="absolute top-6 right-6">
                <Quote className="h-8 w-8 text-primary/20" />
              </div>
              <CardContent className="p-8">
                <div className="mb-6">
                  <div className="flex text-primary text-sm mb-4">
                    <Star className="h-5 w-5 fill-primary text-primary" />
                    <Star className="h-5 w-5 fill-primary text-primary" />
                    <Star className="h-5 w-5 fill-primary text-primary" />
                    <Star className="h-5 w-5 fill-primary text-primary" />
                    <Star className="h-5 w-5 fill-primary text-primary" />
                  </div>
                  <p className="font-open-sans text-gray-700 leading-relaxed italic mb-6">
                    "{testimonial.text}"
                  </p>
                </div>
                <div className="border-t pt-4 flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full overflow-hidden flex-shrink-0 border-2 border-primary/10">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.author}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-montserrat font-semibold text-primary-dark">
                      {testimonial.author}
                    </p>
                    <p className="font-open-sans text-gray-500 text-sm">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-20 bg-white rounded-t-[50%]"></div>
    </section>
  );
};

export default TestimonialsSection;
