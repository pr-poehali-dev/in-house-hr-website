import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Services = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              Наши услуги
            </h1>
            <p className="text-xl text-gray-600 mb-12">
              Полный цикл HR-решений для вашего бизнеса
            </p>
            <div className="bg-primary/10 rounded-lg p-8">
              <p className="text-lg text-gray-700">
                Раздел находится в разработке. Скоро здесь будет подробная
                информация о всех наших услугах.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
