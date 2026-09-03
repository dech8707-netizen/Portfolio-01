import Navbar from "../Components/Navbar";
import StarBackground from "../Components/StarBackground";
import ThemeToggle from "../Components/ThemeToggle";
import HeroSection from "../Components/HeroSection";
import AboutMe from "../Components/AboutMe";
import SkillsSection from "../Components/SkillsSection";
import ProjectSection from "../Components/ProjectSection";
import ContactSection from "../Components/ContactSection";
import Footer from "../Components/Footer";

const Home = () => {
  return(
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">

      {/* Theme Toggle */}
      <ThemeToggle />

      {/* Background Effects */}
      <StarBackground />

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main>
         <HeroSection />
         <AboutMe />
         <SkillsSection />
         <ProjectSection />
         <ContactSection />

      </main>


      {/* Footer */}
      <Footer />
    </div>
  )
}

export default Home;