import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { Target, Eye, Award, Users } from "lucide-react";

export default function About() {
  const { t } = useLanguage();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-primary/10 via-background to-background">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center animate-fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                {t.about.title}
              </h1>
              <p className="text-xl text-muted-foreground">
                {t.about.subtitle}
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="section">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="glass-card p-8 animate-fade-in">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-2xl font-bold mb-4">{t.about.mission.title}</h2>
                <p className="text-muted-foreground">{t.about.mission.description}</p>
              </div>

              <div className="glass-card p-8 animate-fade-in [animation-delay:200ms]">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <Eye className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-2xl font-bold mb-4">{t.about.vision.title}</h2>
                <p className="text-muted-foreground">{t.about.vision.description}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="section bg-card">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {t.about.values.title}
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="glass-card p-6 text-center animate-fade-in">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{t.about.values.quality.title}</h3>
                <p className="text-muted-foreground">{t.about.values.quality.description}</p>
              </div>

              <div className="glass-card p-6 text-center animate-fade-in [animation-delay:100ms]">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{t.about.values.innovation.title}</h3>
                <p className="text-muted-foreground">{t.about.values.innovation.description}</p>
              </div>

              <div className="glass-card p-6 text-center animate-fade-in [animation-delay:200ms]">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{t.about.values.integrity.title}</h3>
                <p className="text-muted-foreground">{t.about.values.integrity.description}</p>
              </div>

              <div className="glass-card p-6 text-center animate-fade-in [animation-delay:300ms]">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{t.about.values.customer.title}</h3>
                <p className="text-muted-foreground">{t.about.values.customer.description}</p>
              </div>
            </div>
          </div>
        </section>

        {/* History */}
        <section className="section">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="glass-card p-8 md:p-12 animate-fade-in">
                <h2 className="text-3xl font-bold mb-6">{t.about.history.title}</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {t.about.history.description}
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
