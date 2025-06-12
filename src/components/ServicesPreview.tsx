import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const ServicesPreview = () => {
  const services = [
    {
      icon: "Search",
      title: "Подбор персонала",
      description:
        "Executive search и массовый рекрутинг для всех уровней позиций. Специализируемся на IT, digital и fintech",
      features: [
        "Executive search",
        "Массовый подбор",
        "IT-рекрутинг",
        "Headhunting",
      ],
      accent: "от 50 000 ₽",
    },
    {
      icon: "UserCheck",
      title: "Оценка персонала",
      description:
        "Ассессмент-центры и competency-based интервью для объективной оценки кандидатов",
      features: [
        "Ассессмент-центры",
        "Интервью по компетенциям",
        "Психологическое тестирование",
        "360-градусная оценка",
      ],
      accent: "от 30 000 ₽",
    },
    {
      icon: "Users",
      title: "Адаптация персонала",
      description:
        "Онбординг-программы и менторинг для быстрой интеграции новых сотрудников в команду",
      features: [
        "Онбординг-программы",
        "Менторинг",
        "Интеграция в команду",
        "Buddy-система",
      ],
      accent: "от 25 000 ₽",
    },
    {
      icon: "BarChart3",
      title: "HR-консалтинг",
      description:
        "Оптимизация HR-процессов и аналитика метрик для повышения эффективности управления персоналом",
      features: [
        "Оптимизация процессов",
        "HR-аналитика",
        "Стратегическое планирование",
        "KPI разработка",
      ],
      accent: "от 80 000 ₽",
    },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Наши услуги
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Полный цикл HR-решений для развития вашего бизнеса
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100"
            >
              <div className="bg-primary/10 rounded-xl w-16 h-16 flex items-center justify-center mb-6">
                <Icon name={service.icon} size={24} className="text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-2 mb-6">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="text-sm text-gray-600 flex items-center"
                  >
                    <Icon
                      name="Check"
                      size={16}
                      className="text-primary mr-2 flex-shrink-0"
                    />
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="text-primary font-bold text-lg mb-4">
                {service.accent}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" className="px-8 py-6 text-lg" asChild>
            <Link to="/services">Подробнее об услугах</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
