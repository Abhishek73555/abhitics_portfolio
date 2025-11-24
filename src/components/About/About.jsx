import { useEffect } from "react";
import "./About.css";

const About = () => {
  useEffect(() => {
    const content = document.querySelector(".about-content");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          content.classList.add("fade-in");
        } else {
          content.classList.remove("fade-in");
        }
      });
    });

    observer.observe(content);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="about-container" id="about">
      <div className="about-image-wrapper">
        <div className="about-image main-image">
          <img src="/about/my_pic.jpg" alt="About Me" />
        </div>
        <div className="about-image scattered-image image-1">
          <img src="/about/img-1.png" alt="Small Image 1" />
        </div>
        <div className="about-image scattered-image image-2">
          <img src="/about/img-2.png" alt="Small Image 2" />
        </div>
        <div className="about-image scattered-image image-3">
          <img src="/about/img-3.png" alt="Small Image 3" />
        </div>
        <div className="about-image scattered-image image-4">
          <img src="/about/img-4.png" alt="Small Image 4" />
        </div>
        <div className="about-image scattered-image image-5">
          <img src="/about/img-5.png" alt="Small Image 5" />
        </div>
      </div>
      <div className="about-content">
        <h1>About Me</h1>
        <p>
          I am Abhishek Tiwari, a passionate and dedicated Computer Science
          Engineering student currently pursuing my Bachelor of Technology at
          Dr. APJ Abdul Kalam Technical University. With a strong foundation in
          programming languages such as C, C++, Python, and a keen
          interest in full-stack web development, I constantly strive to expand
          my skill set and stay updated with the latest technological
          advancements.
        </p>
      </div>
    </div>
  );
};

export default About;
