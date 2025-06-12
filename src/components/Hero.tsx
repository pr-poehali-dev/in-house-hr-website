import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-primary/10 to-purple-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            HR-решения для роста
            <span className="text-primary block">вашего бизнеса</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Экспертиза в подборе, оценке и адаптации персонала для IT,
            стартапов, e-commerce, fintech и HoReCa. Работаем с гарантией
            качества.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/contacts">Обсудить проект</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/services">Наши услуги</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
