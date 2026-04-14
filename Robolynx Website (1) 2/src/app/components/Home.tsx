import { motion } from "motion/react";
import { Link, useLocation } from "react-router";
import { useEffect } from "react";
import ProjectsOverview from "./ProjectsOverview";
import polaroid1 from "../../imports/Screenshot_2026-04-13_at_12.16.22.png";
import polaroid2 from "../../imports/Screenshot_2026-04-13_at_12.16.33.png";
import polaroid3 from "../../imports/Screenshot_2026-04-13_at_12.16.45.png";
import polaroid4 from "../../imports/Screenshot_2026-04-13_at_12.16.57.png";
import logo from "../../imports/Screenshot_2026-04-13_at_12.21.15-removebg-preview.png";
import whoAreWeImg from "../../imports/Screenshot_2026-04-13_at_12.43.12.png";
import mapImg from "../../imports/Screenshot_2026-04-13_at_13.49.31.png";
import awardsImg from "../../imports/Screenshot_2026-04-13_at_12.44.50.png";
import competitionsImg from "../../imports/Screenshot_2026-04-13_at_12.44.19.png";

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    // Handle hash navigation from external links
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    }
  }, [location]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const polaroids = [
    {
      image: polaroid1,
      rotation: -4,
      position: { left: "8%" }
    },
    {
      image: polaroid2,
      rotation: 3,
      position: { left: "28%" }
    },
    {
      image: polaroid3,
      rotation: -2,
      position: { left: "52%" }
    },
    {
      image: polaroid4,
      rotation: 2,
      position: { left: "74%" }
    }
  ];

  return (
    <div className="w-full bg-[#0a1929] overflow-x-hidden">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 px-4 md:px-8 py-4 md:py-6 flex flex-col md:flex-row items-center justify-between gap-3 md:gap-0 bg-[#0a1929]/80 backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-2 md:gap-3"
        >
          <img src={logo} alt="Robolynx Logo" className="h-12 md:h-16 w-auto" />
          <span className="text-white font-bold text-xl md:text-2xl tracking-wider">Robolynx</span>
        </motion.div>

        <motion.nav
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap gap-3 md:gap-8 justify-center"
        >
          <button
            onClick={() => scrollToSection('about-us')}
            className="text-white/90 hover:text-white transition-colors text-xs md:text-sm font-medium hover:scale-105 transition-transform"
          >
            About Us
          </button>
          <Link
            to="/projects"
            className="text-white/90 hover:text-white transition-colors text-xs md:text-sm font-medium hover:scale-105 transition-transform"
          >
            Projects
          </Link>
          <button
            onClick={() => scrollToSection('awards')}
            className="text-white/90 hover:text-white transition-colors text-xs md:text-sm font-medium hover:scale-105 transition-transform"
          >
            Awards
          </button>
          <button
            onClick={() => scrollToSection('competitions')}
            className="text-white/90 hover:text-white transition-colors text-xs md:text-sm font-medium hover:scale-105 transition-transform"
          >
            Competitions
          </button>
        </motion.nav>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen w-full overflow-hidden pt-32 md:pt-0">
        {/* Hero Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative md:absolute top-0 md:top-[20%] left-0 md:left-1/2 md:-translate-x-1/2 z-10 text-center px-4"
        >
          <h1 className="text-white text-4xl md:text-7xl lg:text-8xl tracking-tight whitespace-nowrap" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
            10907 Robolynx
          </h1>
        </motion.div>

        {/* Polaroid Grid - Mobile: 2x2, Desktop: Absolute positioning */}
        <div className="relative w-full h-full">
          {/* Mobile Layout - 2x2 Grid */}
          <div className="grid grid-cols-2 gap-4 px-4 py-8 md:hidden">
            {polaroids.map((polaroid, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, rotate: 0 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  rotate: polaroid.rotation
                }}
                transition={{
                  duration: 0.8,
                  delay: 0.4 + index * 0.15,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{
                  scale: 1.05,
                  rotate: 0,
                  zIndex: 20,
                  transition: { duration: 0.3 }
                }}
                className="cursor-pointer flex justify-center"
              >
                <img
                  src={polaroid.image}
                  alt={`Polaroid ${index + 1}`}
                  className="w-full max-w-[180px] h-auto shadow-2xl"
                />
              </motion.div>
            ))}
          </div>

          {/* Desktop Layout - Absolute positioning */}
          <div className="hidden md:block relative h-screen">
            {polaroids.map((polaroid, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, rotate: 0 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  rotate: polaroid.rotation
                }}
                transition={{
                  duration: 0.8,
                  delay: 0.4 + index * 0.15,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{
                  scale: 1.05,
                  rotate: 0,
                  zIndex: 20,
                  transition: { duration: 0.3 }
                }}
                className="absolute cursor-pointer top-[40%]"
                style={{
                  left: polaroid.position.left,
                }}
              >
                <img
                  src={polaroid.image}
                  alt={`Polaroid ${index + 1}`}
                  className="w-[280px] h-auto shadow-2xl"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Who Are We Section */}
      <section id="about-us" className="w-full pt-10 pb-6 px-4 md:px-8 bg-[#0a1929] scroll-mt-32 md:scroll-mt-24">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <img src={whoAreWeImg} alt="Who are we?" className="w-full h-auto" />
        </motion.div>
      </section>

      {/* 11 Cities 1 Team Section */}
      <section className="w-full pt-6 pb-6 px-4 md:px-8 bg-[#0a1929]">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <img src={mapImg} alt="11 Cities, 1 Team" className="w-full h-auto" />
        </motion.div>
      </section>

      {/* Our Projects Section */}
      <section id="projects" className="w-full pt-6 pb-6 px-4 md:px-8 bg-[#0a1929] scroll-mt-32 md:scroll-mt-24">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <ProjectsOverview />
        </motion.div>
      </section>

      {/* Awards Section */}
      <section id="awards" className="w-full pt-6 pb-6 px-4 md:px-8 bg-[#0a1929] scroll-mt-32 md:scroll-mt-24">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <img src={awardsImg} alt="Awards" className="w-full h-auto" />
        </motion.div>
      </section>

      {/* Competitions & Our Robot Section */}
      <section id="competitions" className="w-full pt-6 pb-6 px-4 md:px-8 bg-[#0a1929] scroll-mt-32 md:scroll-mt-24">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <img src={competitionsImg} alt="Competitions & Our Robot" className="w-full h-auto" />
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-[#102f58] py-12 px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-white">
            <div className="flex items-center gap-2">
              <span className="font-medium">Instagram:</span>
              <a 
                href="https://instagram.com/robolynx10907" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-white/80 transition-colors"
              >
                @robolynx10907
              </a>
            </div>
            
            <div className="hidden md:block text-white/40">|</div>
            
            <div className="flex items-center gap-2">
              <span className="font-medium">LinkedIn:</span>
              <a 
                href="https://www.linkedin.com/company/robolynx/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-white/80 transition-colors"
              >
                robolynx
              </a>
            </div>
            
            <div className="hidden md:block text-white/40">|</div>
            
            <div className="flex items-center gap-2">
              <span className="font-medium">Mail:</span>
              <a 
                href="mailto:robolynx10907@gmail.com"
                className="hover:text-white/80 transition-colors"
              >
                robolynx10907@gmail.com
              </a>
            </div>
          </div>
        </motion.div>
      </footer>
    </div>
  );
}