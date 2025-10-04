import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

// images import
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
import infra3 from "@/assets/infrastructure/infra3.png";
import infra4 from "@/assets/infrastructure/infra4.png";

export default function Projects() {
  const { t } = useLanguage();
  const [selectedFilter, setSelectedFilter] = useState("all");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const projects = [
    {
      id: 1,
      category: "roads",
      title: "Adamawa State Highway Project",
      status: "completed",
      image: road1,
      description: "20km highway construction with drainage systems",
    },
    {
      id: 2,
      category: "buildings",
      title: "Commercial Plaza Development",
      status: "completed",
      image: building1,
      // "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop",
      description: "5-story commercial building with modern amenities",
    },
    {
      id: 3,
      category: "infrastructure",
      title: "Municipal Water Treatment Facility",
      status: "ongoing",
      image: infra1,
      // "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=600&fit=crop",
      description: "Concrete culvert and drainage infrastructure",
    },
    {
      id: 4,
      category: "buildings",
      title: "Residential Estate",
      status: "completed",
      image: building2,
      // "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop",
      description: "50-unit housing development with interlocking pavements",
    },
    {
      id: 5,
      category: "roads",
      title: "Urban Road Rehabilitation",
      status: "completed",
      image: road2,
      description: "City center road upgrade project",
    },
    {
      id: 6,
      category: "infrastructure",
      title: "Industrial Park Development",
      status: "ongoing",
      image:
        "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&h=600&fit=crop",
      description: "Complete infrastructure for new industrial zone",
    },
    {
      id: 7,
      category: "roads",
      title: "Adamawa State Highway Project",
      status: "completed",
      image: road3,
      description: "20km highway construction with drainage systems",
    },
    {
      id: 8,
      category: "buildings",
      title: "Commercial Plaza Development",
      status: "completed",
      image: building5,
      // "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop",
      description: "5-story commercial building with modern amenities",
    },
    {
      id: 9,
      category: "infrastructure",
      title: "Municipal Water Treatment Facility",
      status: "ongoing",
      image: infra2,
      // "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=600&fit=crop",
      description: "Concrete culvert and drainage infrastructure",
    },
    {
      id: 10,
      category: "buildings",
      title: "Residential Estate",
      status: "completed",
      image: building3,
      // "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop",
      description: "50-unit housing development with interlocking pavements",
    },
    {
      id: 11,
      category: "roads",
      title: "Urban Road Rehabilitation",
      status: "completed",
      image: road4,
      description: "City center road upgrade project",
    },
    {
      id: 12,
      category: "infrastructure",
      title: "Industrial Park Development",
      status: "ongoing",
      image: infra3,
      // "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&h=600&fit=crop",
      description: "Complete infrastructure for new industrial zone",
    },
  ];

  const filteredProjects =
    selectedFilter === "all"
      ? projects
      : projects.filter((p) => p.category === selectedFilter);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-primary/10 via-background to-background">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center animate-fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                {t.projects.title}
              </h1>
              <p className="text-xl text-muted-foreground">
                {t.projects.subtitle}
              </p>
            </div>
          </div>
        </section>

        {/* Filters */}
        <section className="section">
          <div className="container">
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <Button
                variant={selectedFilter === "all" ? "default" : "outline"}
                onClick={() => setSelectedFilter("all")}
              >
                {t.projects.filters.all}
              </Button>
              <Button
                variant={selectedFilter === "roads" ? "default" : "outline"}
                onClick={() => setSelectedFilter("roads")}
              >
                {t.projects.filters.roads}
              </Button>
              <Button
                variant={selectedFilter === "buildings" ? "default" : "outline"}
                onClick={() => setSelectedFilter("buildings")}
              >
                {t.projects.filters.buildings}
              </Button>
              <Button
                variant={
                  selectedFilter === "infrastructure" ? "default" : "outline"
                }
                onClick={() => setSelectedFilter("infrastructure")}
              >
                {t.projects.filters.infrastructure}
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {filteredProjects.map((project, index) => (
                <div
                  key={project.id}
                  className="glass-card overflow-hidden animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="aspect-[4/3] overflow-hidden relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge
                        variant={
                          project.status === "completed"
                            ? "default"
                            : "secondary"
                        }
                      >
                        {project.status === "completed"
                          ? t.projects.completed
                          : t.projects.ongoing}
                      </Badge>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {project.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
