import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "O que é o contato inteligente da Atime?",
    answer: "Um contato inteligente vai além de um chatbot comum. Com a Atime, você tem um agente de IA especializado em agendamentos, capaz de conversar de forma natural, entender pedidos abertos, marcar e remarcar horários automaticamente, integrar-se ao Google Calendar e criar experiências personalizadas, escaláveis e totalmente automatizadas no WhatsApp."
  },
  {
    question: "Quanto tempo leva para implementar a API do WhatsApp e usar a Atime?",
    answer: "A implementação envolve a verificação da empresa, configuração da API oficial do WhatsApp, integração com o Google Calendar e criação dos fluxos no n8n. O prazo depende da aprovação da Meta, mas a equipe Atime acompanha tudo do início ao fim, garantindo uma implementação suave e rápida."
  },
  {
    question: "Preciso ter API oficial para usar WhatsApp com a Atime?",
    answer: "Sim, é necessário usar a API oficial (WABA - WhatsApp Business API). A Atime orienta e configura tudo para você, desde a verificação da empresa até a configuração completa da API com a Meta."
  },
  {
    question: "Quantos atendentes posso conectar a um mesmo número usando a Atime?",
    answer: "Tecnicamente ilimitados — mas geralmente a IA substitui completamente a necessidade de equipe humana para agendamentos. A automação é tão eficiente que você pode operar sem atendentes dedicados."
  },
  {
    question: "Existe custo adicional para enviar mensagens via WhatsApp usando a Atime?",
    answer: "Depende das regras de cobrança da Meta. Existe uma franquia de conversações gratuitas e cobrança adicional conforme a demanda. A Atime ajuda você a otimizar o uso e manter os custos sob controle."
  },
  {
    question: "Posso vender produtos ou serviços pelo WhatsApp usando a Atime?",
    answer: "Sim. A Atime automatiza atendimentos, tira dúvidas e conduz todo o processo de vendas e agendamento de serviços. É perfeita para consultórios, clínicas, salões, barbearias e qualquer negócio baseado em agendamentos."
  },
  {
    question: "Como funciona a contratação da Atime?",
    answer: "É simples: fazemos uma análise rápida do seu negócio, você assina o contrato, iniciamos o onboarding técnico com configuração da API oficial, e personalizamos completamente a IA para o seu tipo de negócio. Em pouco tempo, você está operando com automação total."
  }
];

const FAQ = () => {
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
          <h2 className="mb-6">Perguntas Frequentes</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Tudo o que você precisa saber sobre o Atime
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-2xl px-6 shadow-card hover:shadow-soft transition-smooth"
              >
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="font-bold text-lg pr-4">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
