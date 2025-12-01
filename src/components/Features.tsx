import { motion } from "framer-motion";
import { 
  MessageSquareText, 
  CalendarCheck2, 
  Calendar, 
  Bell, 
  Clock, 
  Zap, 
  Brain, 
  Shield 
} from "lucide-react";

const features = [
  {
    icon: MessageSquareText,
    title: "IA com Conversa Natural",
    description: "Entende pedidos complexos e abertos, sem menus travados. Conversa fluida como um humano."
  },
  {
    icon: CalendarCheck2,
    title: "Agendamento Automático",
    description: "Marca, remarca e cancela horários sem intervenção humana. Tudo automatizado."
  },
  {
    icon: Calendar,
    title: "Integração com Google Calendar",
    description: "Sincronização em tempo real. Disponibilidade sempre atualizada, zero conflitos."
  },
  {
    icon: Bell,
    title: "Lembretes Inteligentes",
    description: "Confirmações e lembretes automáticos que reduzem faltas drasticamente."
  },
  {
    icon: Clock,
    title: "Atendimento 24/7",
    description: "Nunca perca um cliente. Sua IA trabalha sem parar, todos os dias, qualquer horário."
  },
  {
    icon: Zap,
    title: "Respostas Instantâneas",
    description: "Zero tempo de espera. Atendimento imediato aumenta satisfação e conversões."
  },
  {
    icon: Brain,
    title: "Domínio Total do Contexto",
    description: "A IA lembra conversas anteriores e personaliza cada interação automaticamente."
  },
  {
    icon: Shield,
    title: "Infraestrutura Oficial & Segura",
    description: "API oficial do WhatsApp. Dados protegidos, compliance garantido, zero riscos."
  }
];

const Features = () => {
  return (
    <section className="py-20 md:py-32 gradient-hero">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="mb-6 text-foreground">Recursos do Atime</h2>
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
            Tudo que você precisa para automatizar completamente seu atendimento
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="bg-card/80 backdrop-blur-sm p-6 rounded-2xl shadow-card hover:shadow-soft transition-smooth border border-border/50 group"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-smooth">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
