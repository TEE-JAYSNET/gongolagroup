import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Box, Layers, Square, Circle } from "lucide-react";
import hollowBlocksImage from "@/assets/hollow-blocks-product.jpg";
import interlockingImage from "@/assets/gallery/interlocking-1.jpg";
import solidImage from "@/assets/gallery/solid-1.jpeg";
import culvertImage from "@/assets/gallery/culvert-1.jpg";

export default function Products() {
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState("all");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const products = [
    {
      id: 1,
      category: "interlocking",
      icon: <Layers className="h-8 w-8" />,
      name: t.productDetails.interlocking.name,
      description: t.productDetails.interlocking.description,
      specifications: t.productDetails.interlocking.specifications,
      image: interlockingImage
    },
    {
      id: 2,
      category: "hollow",
      icon: <Square className="h-8 w-8" />,
      name: t.productDetails.hollow.name,
      description: t.productDetails.hollow.description,
      specifications: t.productDetails.hollow.specifications,
      image: hollowBlocksImage
    },
    {
      id: 3,
      category: "solid",
      icon: <Box className="h-8 w-8" />,
      name: t.productDetails.solid.name,
      description: t.productDetails.solid.description,
      specifications: t.productDetails.solid.specifications,
      image: solidImage
    },
    {
      id: 4,
      category: "culvert",
      icon: <Circle className="h-8 w-8" />,
      name: t.productDetails.culvert.name,
      description: t.productDetails.culvert.description,
      specifications: t.productDetails.culvert.specifications,
      image: culvertImage
    }
  ];

  const filteredProducts = selectedCategory === "all" 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-primary/10 via-background to-background">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center animate-fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                {t.products.title}
              </h1>
              <p className="text-xl text-muted-foreground">
                {t.products.subtitle}
              </p>
            </div>
          </div>
        </section>

        {/* Filters */}
        <section className="section">
          <div className="container">
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <Button
                variant={selectedCategory === "all" ? "default" : "outline"}
                onClick={() => setSelectedCategory("all")}
              >
                {t.products.filters.allCategories}
              </Button>
              <Button
                variant={selectedCategory === "interlocking" ? "default" : "outline"}
                onClick={() => setSelectedCategory("interlocking")}
              >
                {t.products.filters.interlocking}
              </Button>
              <Button
                variant={selectedCategory === "hollow" ? "default" : "outline"}
                onClick={() => setSelectedCategory("hollow")}
              >
                {t.products.filters.hollow}
              </Button>
              <Button
                variant={selectedCategory === "solid" ? "default" : "outline"}
                onClick={() => setSelectedCategory("solid")}
              >
                {t.products.filters.solid}
              </Button>
              <Button
                variant={selectedCategory === "culvert" ? "default" : "outline"}
                onClick={() => setSelectedCategory("culvert")}
              >
                {t.products.filters.culvert}
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product, index) => (
                <Card key={product.id} className="overflow-hidden animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                  <div className="aspect-[4/3] overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                        {product.icon}
                      </div>
                      <CardTitle className="text-xl">{product.name}</CardTitle>
                    </div>
                    <CardDescription className="text-base">
                      {product.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      {product.specifications}
                    </p>
                    <Button asChild className="w-full">
                      <Link to="/quote">{t.products.filters.getQuote}</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
