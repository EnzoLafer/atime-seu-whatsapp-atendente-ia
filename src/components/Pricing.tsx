import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const plans = [
  {
    name: "Start",
    price: "R$ 497",
    period: "/mês",
    description: "Ideal para profissionais autônomos",
    features: [
      "Até 500 conversas/mês",
      "1 número WhatsApp",
      "Integração Google Calendar",
      "IA com conversa natural",
      "Lembretes automáticos",
      "Suporte por email"
    ],
    cta: "Começar agora",
    popular: false
  },
  {
    name: "Pro",
    price: "R$ 997",
    period: "/mês",
    description: "Perfeito para clínicas e salões",
    features: [
      "Até 2.000 conversas/mês",
      "2 números WhatsApp",
      "Múltiplos calendários",
      "IA personalizada ao negócio",
      "Lembretes + confirmações",
      "Relatórios analíticos",
      "Suporte prioritário",
      "Onboarding dedicado"
    ],
    cta: "Escolher Pro",
    popular: true
  },
  {
    name: "Enterprise",
    price: "Customizado",
    period: "",
    description: "Para grandes operações",
    features: [
      "Conversas ilimitadas",
      "Números ilimitados",
      "Calendários ilimitados",
      "IA com treinamento especial",
      "Automações customizadas",
      "API dedicada",
      "Suporte 24/7 Premium",
      "Infraestrutura dedicada"
    ],
    cta: "Falar com vendas",
    popular: false
  }
];

const Pricing = () => {
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
          <h2 className="mb-6">Planos e Preços</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Escolha o plano ideal para o tamanho do seu negócio
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className={`relative bg-card p-8 rounded-3xl shadow-card border transition-smooth ${
                plan.popular 
                  ? "border-primary shadow-glow scale-105 md:scale-110" 
                  : "border-border hover:border-accent/30"
              }`}
            >
              {plan.popular && (
                <Badge className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1">
                  <Star className="w-3 h-3 mr-1 inline" />
                  Mais Popular
                </Badge>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{plan.description}</p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
              </div>
              
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button 
                className={`w-full ${
                  plan.popular 
                    ? "gradient-primary shadow-glow" 
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/90"
                }`}
                size="lg"
              >
                {plan.cta}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
