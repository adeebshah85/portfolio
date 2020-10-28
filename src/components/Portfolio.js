import React from "react";
import "./../index.css";
import { motion } from "framer-motion";

const boxVariants = {
  hover: {
    scale: 1.06,
    transition: {
      type: "spring",
    },
  },
};

const Portfolio = () => {
  return (
    <section
      data-aos="fade-up"
      className="portfolio-container"
      name="portfolio"
      id="portfolio"
    >
      <h1 className="heading">Projects I have Built</h1>
      <div className="projects-container">
        {/* Project 1 - Bookstore CRUD App */}
        <motion.div
          className="projects"
          variants={boxVariants}
          whileHover="hover"
        >
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/adeebshah85"
          >
            <div className="project-images" id="coronaTracker"></div>
          </a>

          <div className="project-links">
            <div className="text">
              <h3>Bookstore</h3>
            </div>
            <div className="icons">
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://github.com/adeebshah85/Crud"
              >
                <i className="fab fa-github" title="github repo" id="github">
                  {" "}
                </i>
              </a>
              <a
                rel="noopener noreferrer"
                href="https://github.com/adeebshah85/Crud"
                target="_blank"
              >
                {" "}
                <i
                  className="fas fa-external-link-alt"
                  title="live preview"
                  id="live"
                ></i>
              </a>
            </div>
          </div>
        </motion.div>

        {/* Project 2- Google Keep Clone using React js/}
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
            <div className="project-images" id="shoeStore"></div>
          </a>

          <div className="project-links">
            <div className="text">
              <h3>Nike Shoe Store</h3>
            </div>
            <div className="icons">
              <a
                rel="noopener noreferrer"
                target="_blank"
                href=""
              >
                <i className="fab fa-github" title="github repo" id="github">
                  {" "}
                </i>
              </a>
              <a
                rel="noopener noreferrer"
                href=""
                target="_blank"
              >
                {" "}
                <i
                  className="fas fa-external-link-alt"
                  title="live preview"
                  id="live"
                ></i>
              </a>
            </div>
          </div>
        </motion.div>

        {/* Project 3 - Google Clone */}
        <motion.div
          variants={boxVariants}
          whileHover="hover"
          className="projects"
        >
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/adeebshah85"
          >
            <div className="project-images" id="quizApp"></div>
          </a>
          <div className="project-links">
            <div className="text">
              <h3>Google Keep Clone</h3>
            </div>
            <div className="icons">
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://github.com/adeebshah85/keep"
              >
                <i className="fab fa-github" title="github repo" id="github">
                  {" "}
                </i>
              </a>
              <a
                rel="noopener noreferrer"
                href="https://github.com/adeebshah85/keep"
                target="_blank"
              >
                {" "}
                <i
                  className="fas fa-external-link-alt"
                  title="live preview"
                  id="live"
                ></i>
              </a>
            </div>
          </div>
        </motion.div>

        {/* Project 4 - ToDo Web App */}
        <motion.div
          variants={boxVariants}
          whileHover="hover"
          className="projects"
        >
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/adeebshah85"
          >
            <div className="project-images" id="matiari"></div>
          </a>
          <div className="project-links">
            <div className="text">
              <h3>ToDo Web App</h3>
            </div>
            <div className="icons">
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://github.com/adeebshah85/todo"
              >
                <i className="fab fa-github" title="github repo" id="github">
                  {" "}
                </i>
              </a>
              <a
                rel="noopener noreferrer"
                href="https://github.com/adeebshah85/todo"
                target="_blank"
              >
                {" "}
                <i
                  className="fas fa-external-link-alt"
                  title="live preview"
                  id="live"
                ></i>
              </a>
            </div>
          </div>
        </motion.div>

        {/* Project 5 - My Journal */}
        <motion.div
          variants={boxVariants}
          whileHover="hover"
          className="projects"
        >
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/adeebshah85"
          >
            <div className="project-images" id="expenseTracker"></div>
          </a>
          <div className="project-links">
            <div className="text">
              <h3>My Journal</h3>
            </div>
            <div className="icons">
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://github.com/adeebshah85/journal"
              >
                <i className="fab fa-github" title="github repo" id="github">
                  {" "}
                </i>
              </a>
              <a
                rel="noopener noreferrer"
                href="https://github.com/adeebshah85/journal"
                target="_blank"
              >
                {" "}
                <i
                  className="fas fa-external-link-alt"
                  title="live preview"
                  id="live"
                ></i>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
      <a
        rel="noopener noreferrer"
        target="_blank"
        href="https://github.com/adeebshah85"
        className="button-link"
      >
        <button className="button">More Projects</button>
      </a>
    </section>
  );
};

export default Portfolio;
