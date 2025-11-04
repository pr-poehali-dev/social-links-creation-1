import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Index = () => {
  const handleCall = () => {
    window.location.href = "tel:+79234651336";
  };

  const links = [
    {
      name: "ВКонтакте",
      icon: "MessageCircle",
      url: "https://vk.com/towtruck42",
      color: "bg-[#0077FF]",
    },
    {
      name: "Avito",
      icon: "ShoppingBag",
      url: "https://www.avito.ru/kemerovo/predlozheniya_uslug/evakuator_247_kruglosutochno_gorodmezhgorod_7736033381",
      color: "bg-[#00AAFF]",
    },
  ];

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-8 animate-fade-in">
        <div className="text-center space-y-4">
          <div className="inline-flex items-center justify-center mb-4 animate-scale-in">
            <img 
              src="https://cdn.poehali.dev/files/b1e27edf-91fa-4f0c-9d39-66f7ee4d00d1.png" 
              alt="Эвакуатор 24/7" 
              className="w-64 h-64 object-contain"
            />
          </div>
        </div>

        <Button
          onClick={handleCall}
          size="lg"
          className="w-full h-16 text-lg font-semibold bg-accent hover:bg-accent/90 text-white shadow-lg transition-all hover:scale-105 active:scale-95"
        >
          <Icon name="Phone" size={24} className="mr-3" />
          Позвонить сейчас
        </Button>

        <div className="space-y-3 pt-4">
          {links.map((link, index) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Card className="p-5 hover:shadow-lg transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer border-2">
                <div className="flex items-center space-x-4">
                  <div className={`w-12 h-12 ${link.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                    <Icon name={link.icon as any} size={24} className="text-white" />
                  </div>
                  <span className="text-lg font-semibold text-primary flex-1">
                    {link.name}
                  </span>
                  <Icon name="ExternalLink" size={20} className="text-muted-foreground" />
                </div>
              </Card>
            </a>
          ))}
        </div>

        <div className="text-center pt-6">
          <p className="text-sm text-muted-foreground">
            Круглосуточно • Быстро • Надежно
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;