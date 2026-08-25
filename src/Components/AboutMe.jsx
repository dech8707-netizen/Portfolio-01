const AboutMe = () => {

  return <section id="about" className="py-24 px-4 relative">

    <div className="container mx-auto max-w-5xl">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
        About <span className="text-primary">Me</span>
      </h2>


      <div className="grid grid-cols-1 mb:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold">Building Interfaces That Feel Simple & Intuitive</h3>
          <p className="text-muted-foreground">I'm a frontend developer and BCA student who enjoys turning ideas into clean, responsive, and user-friendly web experiences. I love creating interfaces that look modern while keeping the user experience simple and intuitive.</p>
          <p className="text-muted-foreground">
            I'm constantly improving my skills by building projects and exploring new technologies. I enjoy solving problems through code and aim to create digital experiences that are both visually appealing and practical.
          </p>

          <div className="flex flex-col sm-flex-row gap-4 pt-4 justify-center">
            <a href="#contact" className="cosmic-button"></a>
          </div>
        </div>

        <div>

        </div>
      </div>
    </div>
    
  </section>
}

export default AboutMe;