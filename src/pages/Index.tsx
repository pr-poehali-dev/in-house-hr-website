import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Advantages from "@/components/Advantages";
import ServicesPreview from "@/components/ServicesPreview";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Advantages />
      <ServicesPreview />

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-primary/5 to-purple-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Готовы найти лучших сотрудников?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Получите персональное предложение и план работы уже через 24 часа.
              Первая консультация — бесплатно.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
