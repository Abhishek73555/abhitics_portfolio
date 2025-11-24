import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero" id="home">
      <div className="hero-left">
        <h1 className="hero-heading typing-animation">
          Hey!&nbsp; it&apos;s Abhishek Tiwari
        </h1>
        <br />
        <h2 className="hero-subheading">
          Mastering Full-Stack Development & Competitive Coding
        </h2>
        <br />

        <p className="hero-content">
          Hi! I&apos;m Abhishek Tiwari, a full-stack developer and competitive
          coder with expertise in DSA. I build seamless, responsive web apps,
          focusing on both front-end and back-end development. Passionate about
          UI/UX design, I create intuitive, user-centered interfaces. Let&apos;s
          turn your ideas into impactful digital solutions!
        </p>

        <div className="hero-social-icons">
          <a
            href="https://linkedin.com/in/abhishek-tiwari-8b5598315"
            target="_blank"
            rel="noopener noreferrer"
          >
            <video
              src=" /icons/linkedin.mp4"
              alt="LinkedIn"
              autoPlay
              loop
              muted
            />
          </a>
          <a
            href="https://github.com/Abhishek73555/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <video
              src=" /icons/github.mp4"
              alt="GitHub"
              autoPlay
              loop
              muted
            />
          </a>
          <a
            href="mailto:your-abhishri73555@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <video
              src=" /icons/gmail.mp4"
              alt="email"
              autoPlay
              loop
              muted
            />
          </a>
        </div>
      </div>
      <div className="hero-right">
        <img
          src=" /images/hero.png"
          alt="Hero"
          className="hero-image"
        />
        <img
          src=" /images/hero-circle.png"
          alt="Rotating Ring"
          className="ring-image"
        />        
      </div>
    </div>
  );
};

export default Hero;
