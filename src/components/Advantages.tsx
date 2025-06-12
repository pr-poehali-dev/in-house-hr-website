import Icon from "@/components/ui/icon";

const Advantages = () => {
  const advantages = [
    {
      icon: "Zap",
      title: "Скорость подбора",
      description:
        "Находим подходящих кандидатов в 2 раза быстрее стандартных сроков благодаря системному подходу",
    },
    {
      icon: "Shield",
      title: "Гарантия 6 месяцев",
      description:
        "Полная замена специалиста в случае увольнения в течение гарантийного периода",
    },
    {
      icon: "Users",
      title: "Адаптация под культуру",
      description:
        "Учитываем корпоративную культуру и ценности компании при подборе персонала",
    },
    {
      icon: "Lock",
      title: "Конфиденциальность",
      description:
        "Строгое соблюдение NDA и защита коммерческой тайны на всех этапах сотрудничества",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Почему выбирают нас
          </h2>
          <p className="text-xl text-gray-600">
            Наши преимущества в цифрах и фактах
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {advantages.map((advantage) => (
            <div key={advantage.title} className="text-center group">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <Icon
                  name={advantage.icon}
                  size={24}
                  className="text-primary"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {advantage.title}
              </h3>
              <p className="text-gray-600">{advantage.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Advantages;
