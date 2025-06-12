import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import Icon from "@/components/ui/icon";

const Contacts = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Контакты</h1>
            <p className="text-xl text-gray-600">
              Свяжитесь с нами удобным способом
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <ContactForm />
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Свяжитесь с нами
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Icon name="Phone" size={20} className="text-primary" />
                    <span>+7 (999) 123-45-67</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="Mail" size={20} className="text-primary" />
                    <span>info@inhouse-hr.ru</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon
                      name="MessageCircle"
                      size={20}
                      className="text-primary"
                    />
                    <span>@inhouse_hr</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Режим работы
                </h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Пн-Пт:</span>
                    <span>9:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Сб-Вс:</span>
                    <span>По договоренности</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Офис
                </h3>
                <p className="text-gray-600 mb-4">
                  г. Москва, ул. Примерная, д. 1, оф. 100
                </p>
                <div className="bg-gray-100 rounded-lg h-48 flex items-center justify-center">
                  <span className="text-gray-500">Карта будет добавлена</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contacts;
