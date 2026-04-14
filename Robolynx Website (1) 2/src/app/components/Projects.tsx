import { motion } from "motion/react";
import { Link, useLocation } from "react-router";
import { useEffect } from "react";
import project1 from "../../imports/Screenshot_2026-04-13_at_14.11.08.png";
import project2 from "../../imports/Screenshot_2026-04-13_at_14.11.21.png";
import project3 from "../../imports/Screenshot_2026-04-13_at_14.11.38.png";
import project4 from "../../imports/Screenshot_2026-04-13_at_14.11.49.png";
import project5 from "../../imports/Screenshot_2026-04-13_at_14.12.06.png";
import project6 from "../../imports/Screenshot_2026-04-13_at_14.12.16.png";
import logo from "../../imports/Screenshot_2026-04-13_at_12.21.15-removebg-preview.png";

export default function Projects() {
  const location = useLocation();

  useEffect(() => {
    // Handle hash navigation
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

  const projects = [
    { id: "stem-across-turkey", image: project1, title: "STEM Across Turkey" },
    { id: "hatay-libraries", image: project2, title: "Hatay Libraries" },
    { id: "frc-sportfest", image: project3, title: "FRC Sportfest" },
    { id: "first-footprints", image: project4, title: "First Footprints" },
    { id: "ngo-collaborations", image: project5, title: "NGO Collaborations" },
    { id: "other-projects", image: project6, title: "Other Projects" }
  ];

  return (
    <div className="w-full bg-[#0a1929] min-h-screen">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 px-4 md:px-8 py-4 md:py-6 flex flex-col md:flex-row items-center justify-between gap-3 md:gap-0 bg-[#0a1929]/80 backdrop-blur-sm">
        <Link to="/" className="flex items-center gap-2 md:gap-3">
          <img src={logo} alt="Robolynx Logo" className="h-12 md:h-16 w-auto" />
          <span className="text-white font-bold text-xl md:text-2xl tracking-wider">Robolynx</span>
        </Link>

        <nav className="flex flex-wrap gap-3 md:gap-8 justify-center">
          <Link
            to="/#about-us"
            className="text-white/90 hover:text-white transition-colors text-xs md:text-sm font-medium hover:scale-105 transition-transform"
          >
            About Us
          </Link>
          <Link
            to="/projects"
            className="text-white transition-colors text-xs md:text-sm font-medium hover:scale-105 transition-transform"
          >
            Projects
          </Link>
          <Link
            to="/#awards"
            className="text-white/90 hover:text-white transition-colors text-xs md:text-sm font-medium hover:scale-105 transition-transform"
          >
            Awards
          </Link>
          <Link
            to="/#competitions"
            className="text-white/90 hover:text-white transition-colors text-xs md:text-sm font-medium hover:scale-105 transition-transform"
          >
            Competitions
          </Link>
        </nav>
      </header>

      {/* Projects Content */}
      <div className="pt-40 md:pt-32 pb-20">
        {projects.map((project, index) => (
          <section
            key={project.id}
            id={project.id}
            className="w-full px-4 md:px-8 py-6 scroll-mt-32 md:scroll-mt-24"
          >
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="max-w-6xl mx-auto"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-auto"
              />
            </motion.div>
          </section>
        ))}
      </div>

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