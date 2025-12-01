import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="text-2xl font-bold text-foreground mb-4">Atime</h3>
            <p className="text-foreground/70 leading-relaxed">
              Automação inteligente de agendamentos com IA no WhatsApp. Transforme seu atendimento.
            </p>
          </div>
          
          {/* Links */}
          <div>
            <h4 className="font-bold text-foreground mb-4">Produto</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-foreground/70 hover:text-accent transition-smooth">
                  Recursos
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground/70 hover:text-accent transition-smooth">
                  Preços
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground/70 hover:text-accent transition-smooth">
                  Casos de Uso
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground/70 hover:text-accent transition-smooth">
                  Demonstração
                </a>
              </li>
            </ul>
          </div>
          
          {/* Support */}
          <div>
            <h4 className="font-bold text-foreground mb-4">Suporte</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-foreground/70 hover:text-accent transition-smooth">
                  Documentação
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground/70 hover:text-accent transition-smooth">
                  Central de Ajuda
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground/70 hover:text-accent transition-smooth">
                  Status do Sistema
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground/70 hover:text-accent transition-smooth">
                  Contato
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="font-bold text-foreground mb-4">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-foreground/70">
                <Mail className="w-4 h-4 text-accent" />
                <span className="text-sm">contato@atime.com</span>
              </li>
              <li className="flex items-center gap-2 text-foreground/70">
                <Phone className="w-4 h-4 text-accent" />
                <span className="text-sm">(11) 9999-9999</span>
              </li>
              <li className="flex items-start gap-2 text-foreground/70">
                <MapPin className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                <span className="text-sm">São Paulo, SP - Brasil</span>
              </li>
            </ul>
            
            {/* Social */}
            <div className="flex gap-3 mt-6">
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center hover:bg-accent/20 transition-smooth"
              >
                <Instagram className="w-5 h-5 text-accent" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center hover:bg-accent/20 transition-smooth"
              >
                <Facebook className="w-5 h-5 text-accent" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center hover:bg-accent/20 transition-smooth"
              >
                <Linkedin className="w-5 h-5 text-accent" />
              </a>
            </div>
          </div>
        </div>
        
        {/* Bottom */}
        <div className="border-t border-border/30 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-foreground/60 text-sm">
              © {new Date().getFullYear()} Atime. Todos os direitos reservados.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-foreground/60 hover:text-accent text-sm transition-smooth">
                Política de Privacidade
              </a>
              <a href="#" className="text-foreground/60 hover:text-accent text-sm transition-smooth">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
