import { Link } from "react-router";
import projectsImg from "../../imports/Screenshot_2026-04-13_at_12.37.08.png";

export default function ProjectsOverview() {
  return (
    <div className="relative w-full h-auto">
      {/* Background Image */}
      <img src={projectsImg} alt="Our Projects" className="w-full h-auto" />
      
      {/* Clickable Overlays - positioned based on the layout of bullet points */}
      <Link 
        to="/projects#stem-across-turkey"
        className="absolute left-[5%] top-[36%] w-[40%] h-[10%] cursor-pointer hover:bg-white/10 transition-colors rounded"
        aria-label="STEM Across Turkey"
      />
      
      <Link 
        to="/projects#hatay-libraries"
        className="absolute left-[5%] top-[48%] w-[40%] h-[10%] cursor-pointer hover:bg-white/10 transition-colors rounded"
        aria-label="Hatay Libraries"
      />
      
      <Link 
        to="/projects#frc-sportfest"
        className="absolute left-[5%] top-[60%] w-[40%] h-[10%] cursor-pointer hover:bg-white/10 transition-colors rounded"
        aria-label="FRC Sportfest"
      />
      
      <Link 
        to="/projects#first-footprints"
        className="absolute left-[5%] top-[72%] w-[40%] h-[10%] cursor-pointer hover:bg-white/10 transition-colors rounded"
        aria-label="First Footprints"
      />
      
      <Link 
        to="/projects#ngo-collaborations"
        className="absolute left-[5%] top-[84%] w-[40%] h-[10%] cursor-pointer hover:bg-white/10 transition-colors rounded"
        aria-label="NGO Collaborations"
      />
    </div>
  );
}