import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faStar,
  faGraduationCap,
} from "@fortawesome/free-solid-svg-icons";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import React from "react";
import { Link } from "react-router-dom";
import Particle from "./Particle";
import "../Layout.css";

const workIcon = {
  icon: <FontAwesomeIcon icon={faBriefcase} />,
  iconStyle: { background: "rgb(33, 150, 243)", color: "rgb(222,222,222)" },
};
const schoolIcon = {
  icon: <FontAwesomeIcon icon={faGraduationCap} />,
  iconStyle: { background: "rgb(233, 30, 99)", color: "rgb(222,222,222)" },
};
const starIcon = {
  icon: <FontAwesomeIcon icon={faStar} />,
  iconStyle: { background: "rgb(16, 204, 82)", color: "rgb(222,222,222)" },
};

const timeline = [
  {
    icon: workIcon,
    date: "Nov 2025 - Present",
    title: "Quality Analyst",
    place: "Covalen Solutions, Dublin (FB-onsite)",
    desc: "Specializing in quality audits, content moderation, and escalation management for the EU region. Analyzing complex abuse trends across all policy verticals to improve detection accuracy and ensure strict SLA compliance.",
  },
  {
    icon: workIcon,
    date: "Nov 2019 - Nov 2025",
    title: "Community Operations Analyst",
    place: "Covalen Solutions, Dublin (FB-onsite)",
    desc: "Chinese Market Specialist and SPAM project",
  },
  {
    icon: schoolIcon,
    date: "Jan 2025 - March 2025",
    title: "Google Project Management : Professional Certificate",
    place: "Coursera - Google",
    desc: "The Google Project Management: Professional Certificate (Coursera) is a practical program covering the project lifecycle, Agile/Waterfall, and core project management functions from initiation to closure.",
  },
  {
    icon: schoolIcon,
    date: "Feb 2024 - July 2024",
    title: "Google Data Analytics Professional Certificate",
    place: "Coursera - Google",
    desc: "Through the Google Data Analytics Professional Certificate, I gained skills across the data lifecycle, including data collection, cleaning, analysis, and visualization, using tools like SQL, spreadsheets and R programming.",
  },
  {
    icon: workIcon,
    date: "June 2023 - May 2024",
    title: "Volunteer Career Programme Project Manager",
    place: "Cantonese in Ireland",
    desc: "Main role is managing the development and implementation of a website, information sessions, and a hotline that will help migrants to start their lives in Ireland. Project is funded by the North East Inner City (NEIC) Programme Office.",
  },
  {
    icon: schoolIcon,
    date: "Nov 2022 - May 2023",
    title: "FullStack Developer BootCamp",
    place: "EPICODE",
    desc: "Frontend Development using react, redux, bootstrap, HTML, CSS, and Backend Development using node.js, mongo, express.js",
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
            <div className="name-div">
              <Link to={"/"} className="no-deco">
                <h1 className="name mb-0">Sam YX Ng</h1>
              </Link>
              <p>
                Quality Analyst | Aspiring Automation Engineer | Full Stack
                Developer
              </p>
            </div>

            <div className="">
              <div className="mb-2 current-page">Experience</div>
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
                      ? {
                          background: "rgb(60, 60, 60)",
                          color: "rgb(222,222,222)",
                        }
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
