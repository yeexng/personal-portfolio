import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faSchool,
  faStar,
  faGraduationCap,
} from "@fortawesome/free-solid-svg-icons";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import Particle from "./Particle";

const workIcon = {
  icon: <FontAwesomeIcon icon={faBriefcase} />,
  iconStyle: { background: "rgb(33, 150, 243)", color: "#fff" },
};
const schoolIcon = {
  icon: <FontAwesomeIcon icon={faGraduationCap} />,
  iconStyle: { background: "rgb(233, 30, 99)", color: "#fff" },
};
const starIcon = {
  icon: <FontAwesomeIcon icon={faStar} />,
  iconStyle: { background: "rgb(16, 204, 82)", color: "#fff" },
};

const timeline = [
  {
    icon: schoolIcon,
    date: "Nov 2022 - May 2023",
    title: "FullStack Developer BootCamp",
    place: "EPICODE",
    desc: "Frontend Development using react, redux, bootstrap, HTML, CSS, and Backend Development using node.js, mongo, express.js",
  },
  {
    icon: workIcon,
    date: "Nov 2019 - Present",
    title: "Community Operations Analyst",
    place: "Covalen Solutions, Dublin (FB-onsite)",
    desc: "Chinese Market Specialist and SPAM project",
  },
  {
    icon: schoolIcon,
    date: "Sep 2016 - May 2019",
    title: "Bachelor of Laws - LLB Law",
    place: "Griffith College Dublin",
    desc: "Legal Studies, Irish Law, Civil Law and Criminal Law",
  },
  {
    icon: schoolIcon,
    date: "May 2014 - Dec 2015",
    title: "GCE A-Level",
    place: "Taylor's College",
    desc: "Mathematics, Economics, Law and Sociology",
  },
  { icon: starIcon },
];

// ...
// ...

const Experience = () => {
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
              <div className="mb-2">
                <Link to={"/contact"} className="no-deco">
                  Contact
                </Link>
              </div>
            </div>
          </div>
          <div className="timeline-div">
            <div className="timeline-scroll">
              <VerticalTimeline>
                {timeline.map((t, i) => {
                  const contentStyle =
                    i === 0
                      ? { background: "rgb(33, 150, 243)", color: "#fff" }
                      : undefined;
                  const arrowStyle =
                    i === 0
                      ? { borderRight: "7px solid  rgb(33, 150, 243)" }
                      : undefined;

                  return (
                    <VerticalTimelineElement
                      key={i}
                      className="vertical-timeline-element--work"
                      contentStyle={contentStyle}
                      contentArrowStyle={arrowStyle}
                      date={t.date}
                      {...t.icon}
                    >
                      {t.title ? (
                        <React.Fragment>
                          <h3 className="vertical-timeline-element-title">
                            {t.title}
                          </h3>
                          {t.subtitle && (
                            <h4 className="vertical-timeline-element-subtitle">
                              {t.subtitle}
                            </h4>
                          )}
                          {t.place && <p>{t.place}</p>}
                          {t.desc && <p>{t.desc}</p>}
                        </React.Fragment>
                      ) : undefined}
                    </VerticalTimelineElement>
                  );
                })}
              </VerticalTimeline>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;
