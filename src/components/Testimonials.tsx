import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const testimonials = [
  {
    name: "Dra. Mariana Silva",
    business: "Clínica OdontoCare",
    avatar: "MS",
    quote: "Reduzimos faltas em 60% no primeiro mês. A IA conversa como uma recepcionista de verdade, é impressionante.",
    role: "Odontóloga"
  },
  {
    name: "Carlos Mendes",
    business: "Barbearia Style",
    avatar: "CM",
    quote: "Minha equipe agora foca no que importa: atender bem. O Atime cuida de toda a agenda automaticamente.",
    role: "Proprietário"
  },
  {
    name: "Juliana Costa",
    business: "Estúdio Bella",
    avatar: "JC",
    quote: "Atendimento 24 horas sem custo de recepcionista. Nossos clientes adoram a agilidade nas respostas.",
    role: "Esteticista"
  },
  {
    name: "Dr. Roberto Alves",
    business: "Consultório MedVita",
    avatar: "RA",
    quote: "A integração com o Google Calendar é perfeita. Nunca mais tivemos conflito de horários.",
    role: "Médico"
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="mb-6">O que nossos clientes dizem</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Veja como o Atime transformou a rotina de consultórios, clínicas e profissionais liberais
          </p>
        </motion.div>
        
        <div className="max-w-4xl mx-auto relative">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="bg-card p-8 md:p-12 rounded-3xl shadow-card border border-border"
          >
            <Quote className="w-12 h-12 text-accent mb-6" />
            
            <p className="text-xl md:text-2xl mb-8 leading-relaxed text-foreground">
              "{testimonials[currentIndex].quote}"
            </p>
            
            <div className="flex items-center gap-4">
              <Avatar className="w-16 h-16 border-2 border-primary">
                <AvatarFallback className="bg-primary text-primary-foreground text-lg font-bold">
                  {testimonials[currentIndex].avatar}
                </AvatarFallback>
              </Avatar>
              <div>
                <div className="font-bold text-lg">{testimonials[currentIndex].name}</div>
                <div className="text-muted-foreground">{testimonials[currentIndex].role}</div>
                <div className="text-sm text-primary">{testimonials[currentIndex].business}</div>
              </div>
            </div>
          </motion.div>
          
          {/* Navigation */}
          <div className="flex justify-center gap-4 mt-8">
            <Button
              onClick={prev}
              variant="outline"
              size="icon"
              className="rounded-full w-12 h-12 border-accent/30 hover:bg-accent/10"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-smooth ${
                    index === currentIndex ? "w-8 bg-primary" : "bg-muted-foreground/30"
                  }`}
                />
              ))}
            </div>
            
            <Button
              onClick={next}
              variant="outline"
              size="icon"
              className="rounded-full w-12 h-12 border-accent/30 hover:bg-accent/10"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
