import { motion } from "framer-motion";
import { MessageCircle, Brain, Calendar, CheckCircle2, FileCheck } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MessageCircle,
    title: "Cliente envia mensagem",
    description: "O cliente inicia a conversa no WhatsApp do seu negócio"
  },
  {
    number: "02",
    icon: Brain,
    title: "IA entende a intenção",
    description: "Nossa IA analisa e compreende exatamente o que o cliente precisa"
  },
  {
    number: "03",
    icon: Calendar,
    title: "Consulta disponibilidade",
    description: "Verifica em tempo real os horários livres no Google Calendar"
  },
  {
    number: "04",
    icon: CheckCircle2,
    title: "Sugere horários",
    description: "Apresenta opções de datas e horários disponíveis automaticamente"
  },
  {
    number: "05",
    icon: FileCheck,
    title: "Confirma agendamento",
    description: "Registra no calendário e envia confirmação instantânea"
  }
];

const HowItWorks = () => {
  return (
    <section className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="mb-6">Como o Atime cuida de tudo sozinho</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Do primeiro contato até a confirmação, tudo automatizado com inteligência
          </p>
        </motion.div>
        
        <div className="relative max-w-5xl mx-auto">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-accent to-transparent transform -translate-y-1/2 z-0" />
          
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="text-center"
              >
                <div className="relative mb-6 mx-auto w-fit">
                  <div className="w-20 h-20 rounded-2xl bg-primary flex items-center justify-center shadow-glow mx-auto">
                    <step.icon className="w-10 h-10 text-primary-foreground" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-10 h-10 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-sm font-bold shadow-soft">
                    {step.number}
                  </div>
                </div>
                <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
