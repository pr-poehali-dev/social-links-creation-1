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
      color: "bg-orange-500",
    },
    {
      name: "Avito",
      icon: "ShoppingBag",
      url: "https://www.avito.ru/kemerovo/predlozheniya_uslug/evakuator_247_kruglosutochno_gorodmezhgorod_7736033381",
      color: "bg-orange-500",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-orange-500/10 via-transparent to-transparent"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-orange-600/10 via-transparent to-transparent"></div>
      <div className="w-full max-w-md space-y-8 animate-fade-in relative z-10">
        <div className="text-center space-y-4">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-orange-500 rounded-full mb-4 animate-scale-in shadow-xl shadow-orange-500/30">
            <Icon name="Truck" size={48} className="text-white" />
          </div>
          
          <h1 className="text-4xl font-bold text-white tracking-tight">
            Эвакуатор 24/7
          </h1>
          
          <p className="text-lg text-slate-300 font-medium">
            Кемерово • Город / Межгород
          </p>
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
              <Card className="p-5 hover:shadow-xl transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer border-2 bg-white/95 backdrop-blur-sm">
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
          <p className="text-sm text-slate-400">
            Круглосуточно • Быстро • Надежно
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;