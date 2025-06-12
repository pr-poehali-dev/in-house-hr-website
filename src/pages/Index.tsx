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
      <section className="py-20 bg-primary/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Готовы обсудить ваш проект?
            </h2>
            <p className="text-xl text-gray-600">
              Оставьте заявку и получите персональное предложение
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
