import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import Quiz from "../assets/img/Quizimg.png";
import StreetEats from "../assets/img/StreetEat.png";
import DomDom from "../assets/img/DomDom.png";
import Barker from "../assets/img/Barker.png";
import Calculator from "../assets/img/CalculatorApp.png";
import ToDo from "../assets/img/Todo 1.png";
import RPS from "../assets/img/RPS.png";
import ColorGen from "../assets/img/ColorGen.png";
import Clock from "../assets/img/Clock.png";
import Leader from "../assets/img/LeaderboardApp.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "Leaderboard Mobile App",
      description: "React Native app",
      imgUrl: Leader,
      url: "https://github.com/jabiesel/LeaderboardApp",
    },
    {
      title: "Barker",
      description: "A Twitter/Messenger Clone",
      imgUrl: Barker,
      url: "https://github.com/jabiesel/barkerbarkbark",
    },
    {
      title: "Street Eats",
      description: "A food truck delivery app",
      imgUrl: StreetEats,
      url: "https://www.figma.com/design/tj9JkQ5JmZE5F2QtIav3Lk/Food-Truck-App?node-id=485-788&t=q2AVs2f1AnfftW30-1",
    },
    {
      title: "Quiz App",
      description: "Javascript app",
      imgUrl: Quiz,
      url: "https://jabiesel.github.io/Quiz-App/",
    },
    {
      title: "Calculator",
      description: "Javascript app",
      imgUrl: Calculator,
      url: "https://github.com/jabiesel/Calculator.git",
    },
    {
      title: "Rock, Paper, Scissors",
      description: "Javascript app",
      imgUrl: RPS,
      url: "https://github.com/jabiesel/Rock-Paper-Scissors",
    },
    {
      title: "To-Do List",
      description: "Javascript & PHP app",
      imgUrl: ToDo,
      url: "https://github.com/jabiesel/todo-app-ver-2",
    },
    {
      title: "Color Generator",
      description: "Javascript app",
      imgUrl: ColorGen,
      url: "https://jabiesel.github.io/Color-Generator/",
    },
    {
      title: "Digital Clock",
      description: "Javascript app",
      imgUrl: Clock,
      url: "https://github.com/jabiesel/Digital-Clock",
    },
    {
      title: "My First HTML/CSS project",
      description: "A Website for my dog!",
      imgUrl: DomDom,
      url: "https://jabiesel.github.io/DomDom.com/",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div>
                  <h2>Projects</h2>
                  <p>
                    This section highlights a collection of my personal and
                    academic projects, showcasing my skills in web development,
                    UX/UI design, and full-stack programming. Each project
                    demonstrates my ability to solve problems, implement modern
                    technologies, and create user-friendly experiences. Explore
                    my work below to see how I turn ideas into functional and
                    impactful applications.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp">
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.slice(0, 6).map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {projects.slice(6, 12).map((project, index) => {
                            return <ProjectCard key={index + 6} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>Check back later for more!</p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img
        className="background-image-right"
        alt="background"
        src={colorSharp2}
      ></img>
    </section>
  );
};
