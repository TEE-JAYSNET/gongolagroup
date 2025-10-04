import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { CheckCircle } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

export default function QuotePage() {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target as HTMLFormElement);
    const data = {
      fullName: formData.get("fullName") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      company: formData.get("company") as string,
      productType: formData.get("productType") as string,
      quantity: formData.get("quantity") as string,
      location: formData.get("location") as string,
      details: formData.get("details") as string,
    };

    try {
      const { error } = await supabase.functions.invoke("send-quote-email", {
        body: data,
      });

      if (error) throw error;

      setSubmitted(true);
      toast({
        title: t.quote.success,
        description: t.quote.successMessage,
      });
    } catch (error) {
      console.error("Error submitting quote:", error);
      toast({
        title: "Error",
        description: "Failed to submit quote. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 flex items-center justify-center py-20">
          <div className="container">
            <Card className="max-w-2xl mx-auto text-center">
              <CardHeader>
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-3xl">{t.quote.success}</CardTitle>
                <CardDescription className="text-lg mt-2">
                  {t.quote.successMessage}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild className="mt-4">
                  <a href="/">{t.quote.returnHome}</a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-primary/10 via-background to-background">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center animate-fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                {t.quote.title}
              </h1>
              <p className="text-xl text-muted-foreground">
                {t.quote.subtitle}
              </p>
            </div>
          </div>
        </section>

        {/* Quote Form */}
        <section className="section">
          <div className="container">
            <Card className="max-w-3xl mx-auto">
              <CardContent className="pt-6">
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Personal Information */}
                  <div>
                    <h3 className="text-2xl font-semibold mb-6">{t.quote.personalInfo.title}</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="fullName">{t.quote.personalInfo.fullName}</Label>
                        <Input id="fullName" name="fullName" required className="mt-2" />
                      </div>
                      <div>
                        <Label htmlFor="email">{t.quote.personalInfo.email}</Label>
                        <Input id="email" name="email" type="email" required className="mt-2" />
                      </div>
                      <div>
                        <Label htmlFor="phone">{t.quote.personalInfo.phone}</Label>
                        <Input id="phone" name="phone" type="tel" required className="mt-2" />
                      </div>
                      <div>
                        <Label htmlFor="company">{t.quote.personalInfo.company}</Label>
                        <Input id="company" name="company" className="mt-2" />
                      </div>
                    </div>
                  </div>

                  {/* Project Information */}
                  <div>
                    <h3 className="text-2xl font-semibold mb-6">{t.quote.projectInfo.title}</h3>
                    <div className="space-y-6">
                      <div>
                        <Label htmlFor="productType">{t.quote.projectInfo.productType}</Label>
                        <Select name="productType" required>
                          <SelectTrigger className="mt-2">
                            <SelectValue placeholder={t.quote.projectInfo.selectType} />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="interlocking">{t.quote.projectInfo.interlockingBlocks}</SelectItem>
                            <SelectItem value="hollow">{t.quote.projectInfo.hollowBlocks}</SelectItem>
                            <SelectItem value="solid">{t.quote.projectInfo.solidBlocks}</SelectItem>
                            <SelectItem value="culvert">{t.quote.projectInfo.culvertRims}</SelectItem>
                            <SelectItem value="construction">{t.quote.projectInfo.construction}</SelectItem>
                            <SelectItem value="paint">{t.quote.projectInfo.paint}</SelectItem>
                            <SelectItem value="chemicals">{t.quote.projectInfo.chemicals}</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <Label htmlFor="quantity">{t.quote.projectInfo.quantity}</Label>
                          <Input id="quantity" name="quantity" className="mt-2" />
                        </div>
                        <div>
                          <Label htmlFor="location">{t.quote.projectInfo.deliveryLocation}</Label>
                          <Input id="location" name="location" required className="mt-2" />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="details">{t.quote.projectInfo.projectDetails}</Label>
                        <Textarea 
                          id="details"
                          name="details"
                          rows={6}
                          placeholder={t.quote.projectInfo.projectDetailsPlaceholder}
                          className="mt-2"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <Button type="submit" size="lg" className="w-full md:w-auto" disabled={loading}>
                    {loading ? "Sending..." : t.quote.submit}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
