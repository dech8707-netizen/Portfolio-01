import Navbar from "../Components/Navbar";
import StarBackground from "../Components/StarBackground";
import ThemeToggle from "../Components/ThemeToggle";
import HeroSection from "../Components/HeroSection";
import AboutMe from "../Components/AboutMe";

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

      </main>


      {/* Footer */}
    </div>
  )
}

export default Home;