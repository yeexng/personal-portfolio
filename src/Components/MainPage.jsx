import { Link } from "react-router-dom";
import Particle from "./Particle";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import "../Layout.css";

const MainPage = () => {
  return (
    <>
      {/* outer layer */}
      <div className="outer-box">
        {/* second-outer */}
        <div className="second-outer">
          {/* Particle Component */}
          <Particle />
          {/* Left Nav Bar */}
          <div className="side-nav">
            <div className="name-div">
              <Link to={"/"} className="no-deco">
                <h1 className="name mb-0">Sam YX Ng</h1>
              </Link>
              <p>
                FullStack Developer, Community Operations Analyst, <br />
                Career Programme Project Manager
              </p>
            </div>
            <TransitionGroup component={null}>
              <CSSTransition
                classNames="fade"
                transitionEnterTimeout={500}
                transitionLeaveTimeout={300}
              >
                <div className="">
                  <div className="mb-2">
                    <Link to={"/experiences"} className="no-deco">
                      Experience
                    </Link>
                  </div>
                  <div className="mb-2">
                    <Link to={"/projects"} className="no-deco">
                      Projects
                    </Link>
                  </div>
                  <div className="mb-2">
                    <Link to={"/contact"} className="no-deco">
                      Contact
                    </Link>
                  </div>
                </div>
              </CSSTransition>
            </TransitionGroup>
          </div>
          {/* About Section */}
          <TransitionGroup component={null}>
            <CSSTransition classNames="fade" timeout={500}>
              <div className="my-intro">
                <div className="my-intro-scroll">
                  <div className="about-me">
                    I'm Sam YeeXuan Ng, <br />a Malaysian professional with a
                    strong foundation in both law and technology, gained in
                    Ireland.
                  </div>
                  <br />
                  <div className="about-me">
                    Holding an LLB degree and certification as a Full Stack
                    Developer, I possess a unique blend of analytical,
                    problem-solving, and technical skills. My career goal is to
                    transition into Project Management, leveraging my diverse
                    background to drive successful project outcomes.
                  </div>
                  <br />
                  <div className="about-me">
                    Currently serving as a Community Operations Analyst at
                    Covalen, I have also gained valuable experience as a
                    Volunteer Career Program Manager.
                  </div>
                  <br />
                  <div className="about-me">
                    In this role, I demonstrated key project management
                    competencies, including planning, stakeholder communication,
                    team leadership, and task delegation. These experiences,
                    combined with my technical understanding, make me
                    well-suited for a Project Management role within a
                    tech-driven environment.
                  </div>
                  <br />
                  <div className="about-me">
                    Driven by a passion for impactful results, I am committed to
                    continuous learning and seeking opportunities to apply my
                    skills in Project Management. I am eager to contribute to
                    dynamic projects, utilizing my unique skillset to achieve
                    organizational goals and further develop my expertise in
                    this field.{" "}
                  </div>
                  <br />
                  <div className="about-me">
                    Let's connect and explore the exciting world of technology
                    together!
                  </div>
                </div>
              </div>
            </CSSTransition>
          </TransitionGroup>
        </div>
      </div>
    </>
  );
};

export default MainPage;
