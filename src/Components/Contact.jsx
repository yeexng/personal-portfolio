import { Nav } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import Particle from "./Particle";

const Contact = () => {
  const navigate = useNavigate();
  return (
    <>
      {/* outer layer */}
      <div className="outer-box">
        {/* second-outer */}
        <div className="second-outer">
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
              <div className="mb-2 current-page">Contact</div>
            </div>
          </div>
          {/* Content Div */}
          <div className="contact-div">
            <p>
              <a
                href="https://www.linkedin.com/in/samyxng/"
                target="_blank"
                rel="noopener noreferrer"
                className="no-deco"
              >
                LinkedIn{" "}
                <span>
                  <BsBoxArrowUpRight />
                </span>
              </a>
            </p>
            <p>
              <a
                href="https://github.com/yeexng"
                target="_blank"
                rel="noopener noreferrer"
                className="no-deco"
              >
                GitHub{" "}
                <span>
                  <BsBoxArrowUpRight />
                </span>
              </a>
            </p>
            <p className="about-me">xuanng96@hotmail.com </p>
            <p className="about-me">Resume </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
