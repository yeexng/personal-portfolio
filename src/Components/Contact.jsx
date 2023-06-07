import { Nav } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { BsBoxArrowUpRight } from "react-icons/bs";

const Contact = () => {
  const navigate = useNavigate();
  return (
    <>
      {/* outer layer */}
      <div className="outer-box">
        {/* second-outer */}
        <div className="second-outer">
          {/* Left Nav Bar */}
          <div className="side-nav">
            <div className="name-div">
              <Link to={"/"}>
                <h1>Sam YX Ng</h1>
              </Link>
              <p>FullStack Developer</p>
            </div>

            <div className="">
              <div>
                <Link to={"/experiences"}>Experience</Link>
              </div>
              <div>
                <Link to={"/projects"}>Projects</Link>
              </div>
              <div>
                <Link to={"/contact"}>Contact</Link>
              </div>
            </div>
          </div>
          {/* Content Div */}
          <div>
            <p>
              <a
                href="https://www.linkedin.com/in/samyxng/"
                target="_blank"
                rel="noopener noreferrer"
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
              >
                GitHub{" "}
                <span>
                  <BsBoxArrowUpRight />
                </span>
              </a>
            </p>
            <p>
              xuanng96@hotmail.com{" "}
              <span>
                <BsBoxArrowUpRight />
              </span>
            </p>
            <p>
              Resume{" "}
              <span>
                <BsBoxArrowUpRight />
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
