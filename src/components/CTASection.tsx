import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 md:py-32 gradient-hero relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(31,111,235,0.15),transparent_70%)]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="mb-6 text-foreground">
            Transforme seu WhatsApp em um atendente 24/7. Comece agora.
          </h2>
          
          <p className="text-xl md:text-2xl text-foreground/80 mb-10 leading-relaxed">
            Junte-se a centenas de empresas que já automatizaram completamente seus agendamentos e economizam milhares por mês.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="gradient-primary text-lg px-10 py-7 shadow-glow hover:shadow-glow transition-smooth group"
            >
              Agendar Demonstração
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-smooth" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg px-10 py-7 border-accent/30 hover:bg-accent/10 text-foreground"
            >
              Falar com Especialista
            </Button>
          </div>
          
          <p className="text-sm text-foreground/60 mt-8">
            ✓ Sem compromisso inicial &nbsp;&nbsp;•&nbsp;&nbsp; ✓ Demonstração gratuita &nbsp;&nbsp;•&nbsp;&nbsp; ✓ Suporte especializado
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
