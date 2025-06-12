import Icon from "@/components/ui/icon";

const Advantages = () => {
  const advantages = [
    {
      icon: "Zap",
      title: "Скорость подбора",
      description:
        "Находим подходящих кандидатов в 2 раза быстрее стандартных сроков благодаря системному подходу и базе контактов",
      metric: "14 дней в среднем",
    },
    {
      icon: "Shield",
      title: "Гарантия 6 месяцев",
      description:
        "Полная замена специалиста в случае увольнения в течение гарантийного периода без дополнительной оплаты",
      metric: "100% гарантия",
    },
    {
      icon: "Users",
      title: "Адаптация под культуру",
      description:
        "Учитываем корпоративную культуру и ценности компании при подборе персонала. Проводим культурное интервью",
      metric: "95% retention rate",
    },
    {
      icon: "Lock",
      title: "Конфиденциальность",
      description:
        "Строгое соблюдение NDA и защита коммерческой тайны на всех этапах сотрудничества. Безопасность данных",
      metric: "100% конфиденциально",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Почему выбирают нас
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Наши преимущества подтверждены результатами и отзывами клиентов
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {advantages.map((advantage) => (
            <div
              key={advantage.title}
              className="text-center group hover:scale-105 transition-transform duration-300"
            >
              <div className="bg-primary/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                <Icon
                  name={advantage.icon}
                  size={32}
                  className="text-primary"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {advantage.title}
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                {advantage.description}
              </p>
              <div className="text-primary font-semibold">
                {advantage.metric}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Advantages;
