import { Link, useNavigate } from "react-router-dom";
import { BsBoxArrowUpRight } from "react-icons/bs";
import Particle from "./Particle";
import Resume from "../SamNgCV.pdf";
import "../Layout.css";

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
            <div className="name-div">
              <Link to={"/"} className="no-deco">
                <h1 className="name mb-0">Sam YX Ng</h1>
              </Link>
              <p>
                FullStack Developer, Community Operations Analyst,
                <br />
                Career Programme Project Manager
              </p>
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
            <p className="about-me no-deco">
              <a href="mailto:xuanng96@hotmail.com" className="no-deco">
                xuanng96@hotmail.com
              </a>{" "}
            </p>
            <a
              href={Resume}
              download="SamNgCV"
              target="_blank"
              rel="noreferrer"
              className="resume no-deco"
            >
              Resume{" "}
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
