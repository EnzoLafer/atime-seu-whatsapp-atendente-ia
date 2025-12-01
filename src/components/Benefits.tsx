import { motion } from "framer-motion";
import { Clock, DollarSign, MessageSquare, Zap, Bot, CalendarCheck } from "lucide-react";

const benefits = [
  {
    icon: Clock,
    title: "Agendamento 24/7 automático",
    description: "Sua IA nunca dorme. Atende e agenda a qualquer hora, todos os dias."
  },
  {
    icon: DollarSign,
    title: "Custo operacional muito menor",
    description: "Elimine a necessidade de equipe dedicada a atendimento e agendamento."
  },
  {
    icon: MessageSquare,
    title: "Conversa natural e humanizada",
    description: "A IA entende contexto e conversa como um humano, sem robô travado."
  },
  {
    icon: Zap,
    title: "Respostas imediatas = menos desistências",
    description: "Atendimento instantâneo aumenta drasticamente a taxa de conversão."
  },
  {
    icon: Bot,
    title: "Conversa fluida, sem travas",
    description: "Nada de menus rígidos. A IA entende pedidos naturais e complexos."
  },
  {
    icon: CalendarCheck,
    title: "Redução de faltas com lembretes",
    description: "Lembretes automáticos inteligentes reduzem no-shows em até 60%."
  }
];

const Benefits = () => {
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
          <h2 className="mb-6">Por que seu negócio precisa disso agora</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Transforme completamente a forma como você gerencia agendamentos
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card p-8 rounded-2xl shadow-card hover:shadow-soft transition-smooth border border-border group hover:border-accent/30"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-smooth">
                <benefit.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
