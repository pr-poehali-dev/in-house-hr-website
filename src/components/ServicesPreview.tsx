import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const ServicesPreview = () => {
  const services = [
    {
      icon: "Search",
      title: "Подбор персонала",
      description:
        "Executive search и массовый рекрутинг для всех уровней позиций",
      features: ["Executive search", "Массовый подбор", "IT-рекрутинг"],
    },
    {
      icon: "UserCheck",
      title: "Оценка персонала",
      description: "Ассессмент-центры и competency-based интервью",
      features: [
        "Ассессмент-центры",
        "Интервью по компетенциям",
        "Психологическое тестирование",
      ],
    },
    {
      icon: "Users",
      title: "Адаптация",
      description: "Онбординг-программы и менторинг для новых сотрудников",
      features: ["Онбординг-программы", "Менторинг", "Интеграция в команду"],
    },
    {
      icon: "BarChart3",
      title: "HR-консалтинг",
      description: "Оптимизация процессов и аналитика HR-метрик",
      features: [
        "Оптимизация процессов",
        "HR-аналитика",
        "Стратегическое планирование",
      ],
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Наши услуги</h2>
          <p className="text-xl text-gray-600">
            Полный цикл HR-решений для вашего бизнеса
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="bg-primary/10 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                <Icon name={service.icon} size={20} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <ul className="space-y-1">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="text-sm text-gray-600 flex items-center"
                  >
                    <Icon
                      name="Check"
                      size={16}
                      className="text-primary mr-2"
                    />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" asChild>
            <Link to="/services">Подробнее об услугах</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
