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

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* About */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-primary text-white rounded-lg px-3 py-1 font-bold text-xl">
                IN HOUSE
              </div>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Экспертное HR-агентство полного цикла. Специализируемся на
              подборе, оценке и адаптации персонала для IT, стартапов,
              e-commerce, fintech и HoReCa.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://t.me/youragency"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <Icon name="MessageCircle" size={20} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold mb-4">Навигация</h3>
            <ul className="space-y-2">
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

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Контакты</h3>
            <div className="space-y-2 text-gray-300">
              <div className="flex items-center space-x-2">
                <Icon name="Phone" size={16} />
                <span>+7 (999) 123-45-67</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Mail" size={16} />
                <span>info@inhouse-hr.ru</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="MessageCircle" size={16} />
                <span>@inhouse_hr</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 IN HOUSE. Все права защищены.
          </p>
          <Link
            to="/privacy"
            className="text-gray-400 hover:text-white text-sm transition-colors mt-2 md:mt-0"
          >
            Политика конфиденциальности
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
