import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle } from "lucide-react";
import heroImage from "@/assets/hero-dashboard.jpg";

const Hero = () => {
  return (
    <section className="relative gradient-hero py-20 md:py-32 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(31,111,235,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(102,168,255,0.08),transparent_50%)]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            <Badge variant="secondary" className="mb-6 bg-accent/20 text-accent-foreground border-0">
              <CheckCircle className="w-4 h-4 mr-2" />
              Confiado por empresas no Brasil inteiro
            </Badge>
            
            <h1 className="text-foreground mb-6">
              Seu WhatsApp atendendo e agendando sozinho — 24 horas por dia.
            </h1>
            
            <p className="text-xl md:text-2xl text-foreground/80 mb-8 leading-relaxed">
              Automação completa com IA que marca, remarca, confirma e envia lembretes sem precisar de atendente humano.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="gradient-primary text-lg px-8 py-6 shadow-glow hover:shadow-glow transition-smooth">
                Começar Agora
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-accent/30 hover:bg-accent/10 text-foreground">
                Ver Demonstração
              </Button>
            </div>
          </motion.div>
          
          {/* Right image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-glow">
              <img 
                src={heroImage} 
                alt="Dashboard de automação Atime com WhatsApp e IA" 
                className="w-full h-auto"
              />
              {/* Gradient overlay for better blending */}
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/20 to-transparent pointer-events-none" />
            </div>
            
            {/* Floating element */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-6 bg-card p-4 rounded-xl shadow-card border border-border"
            >
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-accent animate-pulse" />
                <span className="text-sm font-semibold">Atendimento 24/7 ativo</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
