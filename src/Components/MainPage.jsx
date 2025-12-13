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
                Quality Analyst | Aspiring Automation Engineer | Full Stack
                Developer
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
                    I am a Quality Analyst with a rare dual perspective: <br />
                    the analytical discipline of a Lawyer and the execution
                    mindset of a Full-Stack Developer.
                  </div>
                  <br />
                  <div className="about-me">
                    With an LLB background, I am trained to detect
                    inconsistencies, assess risk, and reason through complex
                    logical systems. I bring this rigor into software quality by
                    pairing it with hands-on technical expertise in React,
                    TypeScript, and Playwright, building scalable and reliable
                    automation frameworks from the ground up.
                  </div>
                  <br />
                  <div className="about-me">
                    I don’t approach quality as surface-level testing. I read
                    the code, understand the architecture, and trace failures to
                    their root causes. This allows me to design tests that are
                    not only robust, but also meaningful to long-term system
                    stability.
                  </div>
                  <br />
                  <div className="about-me">
                    My focus is on preventing defects, not just detecting
                    them—leveraging automation, CI/CD pipelines, and thoughtful
                    test design to help teams ship software with confidence.
                  </div>
                  <br />
                  <div className="about-me">
                    I am currently based in Ireland and open to opportunities in
                    Test Automation and Quality Engineering.
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
