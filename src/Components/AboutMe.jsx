import { Briefcase, Code, User } from "lucide-react";

const AboutMe = () => {

  return <section id="about" className="py-24 px-4 relative">

    <div className="container mx-auto max-w-5xl">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
        About <span className="text-primary">Me</span>
      </h2>


      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold">Building Interfaces That Feel Simple & Intuitive</h3>
          <p className="text-muted-foreground">I'm a frontend developer and BCA student who enjoys turning ideas into clean, responsive, and user-friendly web experiences. I love creating interfaces that look modern while keeping the user experience simple and intuitive.</p>
          <p className="text-muted-foreground">
            I'm constantly improving my skills by building projects and exploring new technologies. I enjoy solving problems through code and aim to create digital experiences that are both visually appealing and practical.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
            <a href="#contact" className="cosmic-button">Get In Touch</a>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">View Resume</a>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6">
          <div className="gradient-border p-6 card-hover">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-primary/10">
              <Code className="h-6 w-6 text-primary" />
              </div>
              <div className="text-left">
                <h4 className="font-semibold test-lg">Web Development</h4>
                <p className="text-muted-foreground">Creating responsive website and web applications with modern frameworks.</p>
              </div>
            </div>
          </div>
          <div className="gradient-border p-6 card-hover">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-primary/10">
              <User className="h-6 w-6 text-primary" />
              </div>
              <div className="text-left">
                <h4 className="font-semibold test-lg">User Experience Design</h4>
                <p className="text-muted-foreground">Designing intuitive and engaging user experiences for web and mobile applications.</p>
              </div>
            </div>
          </div>
          <div className="gradient-border p-6 card-hover">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-primary/10">
              <Briefcase className="h-6 w-6 text-primary" />
              </div>
              <div className="text-left">
                <h4 className="font-semibold test-lg">Project Management</h4>
                <p className="text-muted-foreground">Overseeing projects from conception to completion, ensuring timely delivery and client satisfaction.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  </section>
}

export default AboutMe;