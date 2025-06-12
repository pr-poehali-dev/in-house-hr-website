import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-primary/10 via-purple-50 to-blue-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            HR-решения для роста
            <span className="text-primary block">вашего бизнеса</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
            Экспертиза в подборе, оценке и адаптации персонала для IT,
            стартапов, e-commerce, fintech и HoReCa. Работаем с гарантией
            качества и результата.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="px-8 py-6 text-lg" asChild>
              <Link to="/contacts">Обсудить проект</Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="px-8 py-6 text-lg"
              asChild
            >
              <Link to="/services">Наши услуги</Link>
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="mt-16 flex flex-wrap justify-center items-center gap-8 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-primary">500+</span>
              закрытых вакансий
            </div>
            <div className="flex items-center gap-2">
              <span className="font-semibold text-primary">6 мес.</span>
              гарантия на подбор
            </div>
            <div className="flex items-center gap-2">
              <span className="font-semibold text-primary">14 дней</span>
              средний срок закрытия
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
