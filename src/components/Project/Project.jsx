import { useEffect, useRef, useState } from "react";
import "./Project.css";

const Project = () => {
  const sectionRef = useRef(null);
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({
    image: "",
    heading: "",
    content: ""
  });

  useEffect(() => {
    const section = sectionRef.current;

    const handleScroll = () => {
      const sectionTop = section.getBoundingClientRect().top;
      const viewportHeight = window.innerHeight;

      if (sectionTop < viewportHeight * 0.8) {
        section.classList.add("project-reveal");
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const openModal = (image, heading, content) => {
    setModalContent({ image, heading, content });
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <section className="project-section" ref={sectionRef} id="projects">
        <div className="project-container">
          <h1 className="project-main-heading">My Projects</h1>
          <p className="project-section-content">
            Explore my projects to see how I transform innovative ideas into
            impactful solutions. Each project showcases my skills, creativity,
            and commitment to excellence.
          </p>

          <div className="project-cards-container">
            <div className="project-card">
              <img
                src="/projects/foodbash.png"
                alt="FoodBash"
                className="project-card-image"
              />
              <h2 className="project-card-heading">FoodBash</h2>
              <p className="project-card-content">
                A campus-focused online food delivery app, available on web and
                mobile. FoodBash simplifies ordering and tracking food from
                campus vendors.
              </p>
              <div className="card-button-wrap">
                <button
                  className="custom-button"
                  onClick={() =>
                    openModal(
                      "/projects/foodbash.png",
                      "FoodBash",
                      "A campus-focused online food delivery app, available on web and mobile. FoodBash simplifies ordering and tracking food from campus vendors."
                    )
                  }
                >
                  View Project
                </button>
              </div>
            </div>

            <div className="project-card">
              <img
                src="/projects/AyurTrace.png"
                alt="Ayurtrace"
                className="project-card-image"
              />
              <h2 className="project-card-heading">AyurTrace</h2>
              <p className="project-card-content">
                A farm-to-shelf traceability platform that ensures complete transparency of AYUSH herbal products across the entire supply chain.
              </p>
              <div className="card-button-wrap">
                <button
                  className="custom-button"
                  onClick={() =>
                    openModal(
                      "/projects/AyurTrace.png",
                      "AyurTrace",
                      "A farm-to-shelf traceability platform that ensures complete transparency of AYUSH herbal products across the entire supply chain."
                    )
                  }
                >
                  View Project
                </button>
              </div>
            </div>

            <div className="project-card">
              <img
                src="/projects/DePlot.png"
                alt="DePlot"
                className="project-card-image"
              />
              <h2 className="project-card-heading">DePlot</h2>
              <p className="project-card-content">
                A next-gen blockchain-powered land registry platform with AI-based certificate verification and permissioned access for secure, transparent property transfers.
              </p>
              <div className="card-button-wrap">
                <button
                  className="custom-button"
                  onClick={() =>
                    openModal(
                      "/projects/DePlot.png",
                      "DePlot",
                      "A next-gen blockchain-powered land registry platform with AI-based certificate verification and permissioned access for secure, transparent property transfers."
                    )
                  }
                >
                  View Project
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={modalContent.image} alt={modalContent.heading} />
            <h2>{modalContent.heading}</h2>
            <button className="close-modal" onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Project;
