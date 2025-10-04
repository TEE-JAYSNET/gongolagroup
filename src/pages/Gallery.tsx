import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/contexts/LanguageContext";
import hollowBlocks1 from "@/assets/gallery/hollow-blocks-1.jpg";
import hollowBlocks2 from "@/assets/gallery/hollow-blocks-2.jpeg";
import hollowBlocks3 from "@/assets/gallery/hollow-blocks-3.jpeg";
import hollowBlocks4 from "@/assets/gallery/hollow-blocks-4.jpg";
import hollowBlocks5 from "@/assets/gallery/hollow-blocks-5.jpg";
import hollowBlocks6 from "@/assets/gallery/hollow-blocks-6.jpeg";
import interlocking1 from "@/assets/gallery/interlocking-1.jpg";
import interlocking2 from "@/assets/gallery/interlocking-2.jpeg";
import interlocking3 from "@/assets/gallery/interlocking-3.jpeg";
import interlocking4 from "@/assets/gallery/interlocking-4.jpeg";
import solid1 from "@/assets/gallery/solid-1.jpeg";
import solid2 from "@/assets/gallery/solid-2.jpg";
import solid3 from "@/assets/gallery/solid-3.jpg";
import solid4 from "@/assets/gallery/solid-4.jpeg";
import solid5 from "@/assets/gallery/solid-5.jpeg";
import solid6 from "@/assets/gallery/solid-6.jpeg";
import culvert1 from "@/assets/gallery/culvert-1.jpg";
import culvert2 from "@/assets/gallery/culvert-2.jpeg";
import culvert3 from "@/assets/gallery/culvert-3.jpeg";
import culvert4 from "@/assets/gallery/culvert-4.jpeg";
import culvert5 from "@/assets/gallery/culvert-5.jpeg";
import culvert6 from "@/assets/gallery/culvert-6.jpeg";
import products1 from "@/assets/gallery/products1.png";
import products2 from "@/assets/gallery/products2.png";
import road1 from "@/assets/projects/Road1.png";
import road2 from "@/assets/projects/road2.png";
import road3 from "@/assets/projects/road3.png";
import road4 from "@/assets/projects/road4.png";
import building1 from "@/assets/building/building1.png";
import building2 from "@/assets/building/building2.png";
import building3 from "@/assets/building/building3.png";
import building5 from "@/assets/building/building5.png";
import infra1 from "@/assets/infrastructure/infra1.png";
import infra2 from "@/assets/infrastructure/infra2.png";
import infra4 from "@/assets/infrastructure/infra4.png";
import infra5 from "@/assets/infrastructure/infra5.png";

// Sample gallery images
const galleryImages = [
  {
    id: 1,
    src: hollowBlocks1,
    alt: "Hollow blocks close-up view",
    category: "products",
  },
  {
    id: 2,
    src: hollowBlocks2,
    alt: "Hollow blocks production yard",
    category: "products",
  },
  {
    id: 3,
    src: hollowBlocks3,
    alt: "Hollow blocks manufacturing site",
    category: "products",
  },
  {
    id: 4,
    src: hollowBlocks4,
    alt: "Hollow blocks on pallets",
    category: "products",
  },
  {
    id: 5,
    src: hollowBlocks5,
    alt: "High quality hollow blocks",
    category: "products",
  },
  {
    id: 6,
    src: hollowBlocks6,
    alt: "Gongola branded hollow blocks",
    category: "products",
  },
  {
    id: 7,
    src: infra1,
    alt: "Block manufacturing facility",
    category: "facilities",
  },
  {
    id: 8,
    src: interlocking1,
    alt: "Interlocking blocks stacked",
    category: "products",
  },
  {
    id: 18,
    src: interlocking2,
    alt: "Interlocking blocks on pallets",
    category: "products",
  },
  {
    id: 19,
    src: interlocking3,
    alt: "Interlocking blocks in yard",
    category: "products",
  },
  {
    id: 20,
    src: interlocking4,
    alt: "Interlocking block types",
    category: "products",
  },
  {
    id: 9,
    src: infra2,
    alt: "Construction project",
    category: "facilities",
  },
  {
    id: 10,
    src: infra4,
    alt: "Road construction",
    category: "facilities",
  },
  {
    id: 12,
    src: solid1,
    alt: "Solid blocks stacked in warehouse",
    category: "products",
  },
  {
    id: 21,
    src: solid2,
    alt: "Solid blocks varieties",
    category: "products",
  },
  {
    id: 22,
    src: solid3,
    alt: "Solid concrete blocks stacked",
    category: "products",
  },
  {
    id: 23,
    src: solid4,
    alt: "Solid blocks in storage yard",
    category: "products",
  },
  {
    id: 24,
    src: solid5,
    alt: "Gongola branded solid blocks on pallets",
    category: "products",
  },
  {
    id: 25,
    src: solid6,
    alt: "Solid blocks production yard",
    category: "products",
  },
  {
    id: 13,
    src: infra5,
    alt: "Building construction",
    category: "facilities",
  },
  {
    id: 15,
    src: culvert1,
    alt: "Culvert rims production on site",
    category: "products",
  },
  {
    id: 26,
    src: culvert2,
    alt: "Large culvert rim with workers",
    category: "products",
  },
  {
    id: 27,
    src: culvert3,
    alt: "Culvert rims stacked in yard",
    category: "products",
  },
  {
    id: 28,
    src: culvert4,
    alt: "Culvert rims storage yard view",
    category: "products",
  },
  {
    id: 29,
    src: culvert5,
    alt: "Culvert rims production facility",
    category: "products",
  },
  {
    id: 30,
    src: culvert6,
    alt: "Gongola culvert rims in storage",
    category: "products",
  },
  {
    id: 14,
    src: road1,
    alt: "Gongola culvert rims in storage",
    category: "products",
  },
  {
    id: 11,
    src: road2,
    alt: "Gongola culvert rims in storage",
    category: "products",
  },
  {
    id: 16,
    src: road3,
    alt: "Gongola culvert rims in storage",
    category: "products",
  },
  {
    id: 17,
    src: road4,
    alt: "Gongola culvert rims in storage",
    category: "products",
  },
  {
    id: 14,
    src: building1,
    alt: "Gongola culvert rims in storage",
    category: "projects",
  },
  {
    id: 11,
    src: building2,
    alt: "Gongola culvert rims in storage",
    category: "projects",
  },
  {
    id: 16,
    src: building3,
    alt: "Gongola culvert rims in storage",
    category: "projects",
  },
  {
    id: 17,
    src: building5,
    alt: "Gongola culvert rims in storage",
    category: "projects",
  },
];

export default function Gallery() {
  const { t } = useLanguage();
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [filteredImages, setFilteredImages] = useState(galleryImages);
  const [activeFilter, setActiveFilter] = useState("all");

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  // Filter gallery images by category
  const filterGallery = (category: string) => {
    setActiveFilter(category);

    if (category === "all") {
      setFilteredImages(galleryImages);
    } else {
      setFilteredImages(
        galleryImages.filter((img) => img.category === category)
      );
    }
  };

  // Handle lightbox navigation
  const navigateGallery = (direction: "prev" | "next") => {
    if (selectedImage === null) return;

    const currentIndex = filteredImages.findIndex(
      (img) => img.id === selectedImage
    );
    let newIndex;

    if (direction === "prev") {
      newIndex =
        currentIndex > 0 ? currentIndex - 1 : filteredImages.length - 1;
    } else {
      newIndex =
        currentIndex < filteredImages.length - 1 ? currentIndex + 1 : 0;
    }

    setSelectedImage(filteredImages[newIndex].id);
  };

  // Handle keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImage === null) return;

      if (e.key === "Escape") {
        setSelectedImage(null);
      } else if (e.key === "ArrowLeft") {
        navigateGallery("prev");
      } else if (e.key === "ArrowRight") {
        navigateGallery("next");
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage, filteredImages]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 pt-20">
        {/* Header Section */}
        <section className="relative py-20 bg-gradient-to-r from-sea-light to-white dark:from-sea-dark dark:to-background overflow-hidden">
          <div className="container relative z-10">
            <div className="max-w-3xl mx-auto text-center animate-fade-in">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                {t.gallery.title}
              </h1>
              <p className="text-muted-foreground text-lg mb-6">
                {t.gallery.subtitle}
              </p>
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-1/3 h-full opacity-10">
            <div className="absolute top-10 right-10 w-64 h-64 rounded-full bg-primary/50 blur-3xl" />
            <div className="absolute bottom-10 right-40 w-48 h-48 rounded-full bg-sea-light blur-3xl" />
          </div>
        </section>

        {/* Gallery Filters */}
        <section className="py-8">
          <div className="container">
            <div className="flex flex-wrap justify-center gap-2 mb-8 animate-fade-in">
              {["all", "facilities", "products", "projects"].map((category) => (
                <button
                  key={category}
                  onClick={() => filterGallery(category)}
                  className={cn(
                    "px-6 py-2 rounded-full transition-all",
                    activeFilter === category
                      ? "bg-primary text-white shadow-lg"
                      : "bg-card hover:bg-muted"
                  )}
                >
                  {category === "all"
                    ? t.gallery.filters.all
                    : category === "facilities"
                    ? t.gallery.filters.facilities
                    : category === "products"
                    ? t.gallery.filters.products
                    : t.gallery.filters.projects}
                </button>
              ))}
            </div>

            {/* Gallery Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {filteredImages.map((image, index) => (
                <div
                  key={image.id}
                  className="relative overflow-hidden rounded-xl aspect-[4/3] cursor-pointer group animate-fade-in"
                  style={{ animationDelay: `${index * 50}ms` }}
                  onClick={() => setSelectedImage(image.id)}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <p className="text-white">{image.alt}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Lightbox */}
        {selectedImage !== null && (
          <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 animate-fade-in">
            <button
              className="absolute top-4 right-4 text-white p-2 rounded-full hover:bg-white/10 transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X className="h-6 w-6" />
              <span className="sr-only">Close</span>
            </button>

            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white p-4 rounded-full hover:bg-white/10 transition-colors"
              onClick={() => navigateGallery("prev")}
            >
              <span className="sr-only">Previous</span>
              <svg
                className="h-8 w-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <div className="max-w-5xl max-h-[80vh] overflow-hidden">
              {filteredImages.find((img) => img.id === selectedImage) && (
                <img
                  src={
                    filteredImages.find((img) => img.id === selectedImage)?.src
                  }
                  alt={
                    filteredImages.find((img) => img.id === selectedImage)?.alt
                  }
                  className="max-w-full max-h-[80vh] object-contain"
                />
              )}
            </div>

            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white p-4 rounded-full hover:bg-white/10 transition-colors"
              onClick={() => navigateGallery("next")}
            >
              <span className="sr-only">Next</span>
              <svg
                className="h-8 w-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
