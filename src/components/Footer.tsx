import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

const Footer = () => {
  const navigation = [
    { name: "Главная", href: "/" },
    { name: "Услуги", href: "/services" },
    { name: "О нас", href: "/about" },
    { name: "Кейсы", href: "/cases" },
    { name: "Блог", href: "/blog" },
    { name: "Контакты", href: "/contacts" },
  ];

  const services = [
    { name: "Подбор персонала", href: "/services#recruitment" },
    { name: "Оценка персонала", href: "/services#assessment" },
    { name: "Адаптация", href: "/services#adaptation" },
    { name: "HR-консалтинг", href: "/services#consulting" },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* About */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="bg-primary text-white rounded-lg px-3 py-2 font-bold text-xl">
                IN HOUSE
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
              Экспертное HR-агентство полного цикла. Специализируемся на
              подборе, оценке и адаптации персонала для IT, стартапов,
              e-commerce, fintech и HoReCa. Более 500 успешно закрытых вакансий.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://t.me/inhouse_hr"
                className="text-gray-300 hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon name="MessageCircle" size={24} />
              </a>
              <a
                href="mailto:info@inhouse-hr.ru"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <Icon name="Mail" size={24} />
              </a>
              <a
                href="tel:+79991234567"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <Icon name="Phone" size={24} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-bold text-lg mb-4">Навигация</h3>
            <ul className="space-y-3">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-4">Услуги</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.href}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div>
              <h3 className="font-bold text-lg mb-4">Контакты</h3>
              <div className="space-y-3 text-gray-300">
                <div className="flex items-center space-x-3">
                  <Icon name="Phone" size={18} />
                  <span>+7 (999) 123-45-67</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Mail" size={18} />
                  <span>info@inhouse-hr.ru</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="MessageCircle" size={18} />
                  <span>@inhouse_hr</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="MapPin" size={18} />
                  <span>г. Москва, ул. Примерная, д. 1, оф. 100</span>
                </div>
              </div>
            </div>

            {/* Work Schedule */}
            <div>
              <h3 className="font-bold text-lg mb-4">Режим работы</h3>
              <div className="space-y-2 text-gray-300">
                <div className="flex justify-between">
                  <span>Пн-Пт:</span>
                  <span>9:00 - 18:00 (МСК)</span>
                </div>
                <div className="flex justify-between">
                  <span>Сб-Вс:</span>
                  <span>По договоренности</span>
                </div>
                <div className="text-sm text-gray-400 mt-4">
                  Отвечаем на заявки в течение 2 часов
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 IN HOUSE. Все права защищены.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link
              to="/privacy"
              className="text-gray-400 hover:text-white text-sm transition-colors"
            >
              Политика конфиденциальности
            </Link>
            <Link
              to="/terms"
              className="text-gray-400 hover:text-white text-sm transition-colors"
            >
              Пользовательское соглашение
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
