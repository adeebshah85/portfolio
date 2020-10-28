import React from "react";
import "./../index.css";
import { motion } from "framer-motion";
import ciscoImage from "./../images/certificates/PCAP (Certified Associate in Python Programming).png";

const boxVariants = {
  hover: {
    scale: 1.06,
    transition: {
      type: "spring",
    },
  },
};

const Achievements = () => {
  return (
    <section
      data-aos="fade-up"
      className="achievements-container"
      name="achievements"
      id="achievements"
    >
      <h1 className="heading">Achievements</h1>
      <div className="projects-container">
        {/* Project 1 - React Basic */}
        <motion.div
          variants={boxVariants}
          whileHover="hover"
          className="projects"
        >
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="#"
          >
            <div className="project-images" id="reactBasic"></div>
          </a>

          <div className="project-links">
            <div className="text">
              <h3>Amazon Web Services</h3>
            </div>
            <div className="icons">
              {/* <a
                rel="noopener noreferrer"
                href="https://www.hackerrank.com/certificates/6b34ec5a135a"
                target="_blank"
              >
                <i
                  className="fas fa-external-link-alt"
                  title="live preview"
                  id="live"
                ></i>
              </a> */}
            </div>
          </div>
        </motion.div>

        {/* Project 2 - HTML5 */}
        <motion.div
          variants={boxVariants}
          whileHover="hover"
          className="projects"
        >
          <a
            rel="noopener noreferrer"
            target="_blank"
            href=""
          >
            <div className="project-images" id="html5"></div>
          </a>

          <div className="project-links">
            <div className="text">
              <h3>CCNA</h3>
            </div>
            <div className="icons">
              {/* <a
                rel="noopener noreferrer"
                href=""
                target="_blank"
              >
                {" "}
                <i
                  className="fas fa-external-link-alt"
                  title="url"
                  id="live"
                ></i>
              </a> */}
            </div>
          </div>
        </motion.div>

        {/* Project 3 - Cisco Python */}
        <motion.div
          variants={boxVariants}
          whileHover="hover"
          className="projects"
        >
          <a rel="noopener noreferrer" target="_blank" href={ciscoImage}>
            <div className="project-images" id="ciscoPython"></div>
          </a>

          <div className="project-links">
            <div className="text">
              <h3>Web Development</h3>
            </div>
            <div className="icons">
              {/* <a rel="noopener noreferrer" href={ciscoImage} target="_blank">
                {" "}
                <i
                  className="fas fa-external-link-alt"
                  title="url"
                  id="live"
                ></i>
              </a> */}
            </div>
          </div>
        </motion.div>

        {/* Project 4 - Git */}
        <motion.div
          variants={boxVariants}
          whileHover="hover"
          className="projects"
        >
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="#"
          >
            <div className="project-images" id="git"></div>
          </a>

          <div className="project-links">
            <div className="text">
              <h3>Cybersecurity</h3>
            </div>
            <div className="icons">
              {/* <a
                rel="noopener noreferrer"
                href=""
                target="_blank"
              >
                {" "}
                <i
                  className="fas fa-external-link-alt"
                  title="url"
                  id="live"
                ></i>
              </a> */}
            </div>
          </div>
        </motion.div>

        {/* Project 5- Cybersecurity Essentials */}
        <motion.div
          variants={boxVariants}
          whileHover="hover"
          className="projects"
        >
          <a
            rel="noopener noreferrer"
            target="_blank"
            href=""
          >
            <div className="project-images" id="specPython"></div>
          </a>

          <div className="project-links">
            <div className="text">
              <h3>Cybersecurity Essentials</h3>
            </div>
            <div className="icons">
              {/* <a
                rel="noopener noreferrer"
                href=""
                target="_blank"
              >
                {" "}
                <i
                  className="fas fa-external-link-alt"
                  title="url"
                  id="live"
                ></i>
              </a> */}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
