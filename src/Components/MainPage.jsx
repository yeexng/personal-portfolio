import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import Particle from "./Particle";

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
            <div className="name-div mb-5">
              <Link to={"/"} className="no-deco">
                <h1 className="name mb-0">Sam YX Ng</h1>
              </Link>
              <p>FullStack Developer, Community Operations Analyst</p>
            </div>

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
          </div>
          {/* About Section */}
          <div className="my-intro">
            <p className="about-me">
              I'm Sam YeeXuan Ng, <br />a Malaysian native who pursued my{" "}
              education <br />
              in Ireland, graduating with an LLB degree.
              <br />
              <br />
              While studying law, I discovered my passion for coding and decided
              to dive into the tech industry.
              <br /> I completed a rigorous coding bootcamp and emerged as a
              full-stack developer.
              <br />
              <br />
              Currently, I work as a Community Operations Analyst at Covalen, a
              tech company. However, my ultimate goal is to transition into a
              full-time role in the tech industry, where I can combine my legal
              background and coding skills to create innovative solutions.
              <br />
              <br />
              I'm driven by a desire to make a positive impact through
              technology and continuously expand my knowledge in the field. In
              my free time, I enjoy exploring new technologies, attending tech
              meetups, and engaging in coding challenges. <br />
              I'm excited about the future and the endless possibilities in the
              tech industry. <br />
              <br />
              Let's connect and explore the exciting world of technology
              together!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainPage;
