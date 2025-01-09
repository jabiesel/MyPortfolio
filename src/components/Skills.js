import js from "../assets/img/js.png";
import html from "../assets/img/html.png";
import css from "../assets/img/css.png";
import react from "../assets/img/react.png";
import bootstrap from "../assets/img/bootstrap.png";
import python from "../assets/img/python.png";
import node from "../assets/img/node.png";
import sql from "../assets/img/sql.png";
import php from "../assets/img/php.png";
import mongo from "../assets/img/mongo.png";
import wp from "../assets/img/wp.png";
import figma from "../assets/img/figma.png";
import git from "../assets/img/git.png";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>
                Turning ideas into interactive, functional, and visually
                stunning websites is what I do best.<br></br> From pixel-perfect
                layouts to dynamic user experiences, my skills in front-end
                development and design<br></br> ensure every project looks great
                and runs smoothly. Let’s build something amazing together!
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <img src={js} alt="js" />
                  <h5>Javascript</h5>
                </div>
                <div className="item">
                  <img src={html} alt="html" />
                  <h5>HTML</h5>
                </div>
                <div className="item">
                  <img src={css} alt="css" />
                  <h5>CSS</h5>
                </div>
                <div className="item">
                  <img src={react} alt="react" />
                  <h5>React</h5>
                </div>
                <div className="item">
                  <img src={bootstrap} alt="bootstrap" />
                  <h5>Bootstrap</h5>
                </div>
                <div className="item">
                  <img src={python} alt="python" />
                  <h5>Python</h5>
                </div>
                <div className="item">
                  <img src={node} alt="node" />
                  <h5>Node.JS</h5>
                </div>
                <div className="item">
                  <img src={sql} alt="sql" />
                  <h5>SQL</h5>
                </div>
                <div className="item">
                  <img src={php} alt="php" />
                  <h5>PHP</h5>
                </div>
                <div className="item">
                  <img src={mongo} alt="mongodb" />
                  <h5>MongoDB</h5>
                </div>
                <div className="item">
                  <img src={git} alt="git" />
                  <h5>Git</h5>
                </div>
                <div className="item">
                  <img src={figma} alt="figma" />
                  <h5>Figma</h5>
                </div>
                <div className="item">
                  <img src={wp} alt="wordpress" />
                  <h5>WordPress</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img
        className="background-image-left"
        src={colorSharp}
        alt="background"
      />
    </section>
  );
};
