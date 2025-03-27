import { Card, Badge } from "react-bootstrap";
import Masonry from "react-masonry-css";
import "../Layout.css";
import { Link } from "react-router-dom";
import Particle from "./Particle";
import { useState, useEffect } from "react";

const ProjectArray = [
  {
    image: "/assets/Irelandinfo.png",
    title: "Ireland Immigrant Information Hub",
    link: "https://irelandinfo.ie/",
    tags: [
      "Ireland Info",
      "Newcomers Ireland",
      "Immigrant Service Ireland",
      "Project Management",
      "NEIC",
      "Volunteer Project",
      "Immigrants",
      "Cantonese in Ireland",
    ],
    about:
      "This project focused on creating resources to support migrants in Ireland. My role included managing the development and implementation of irelandinfo.ie, a website providing key information, as well as coordinating information sessions and a support hotline.",
  },

  {
    image: "/assets/SpotifyClone.png",
    title: "Spotify Clone",
    tags: ["CSS", "React", "Redux", "API"],
    link: "https://github.com/yeexng/U3_D15_soloProject_Spotify_2",
    about:
      "Project cloning the famous music app, which involves fetching music data from an API, implementing a search function and music player. ",
  },
  {
    image: "/assets/MediumClone.png",
    title: "Medium Clone",
    tags: ["JavaScript", "CSS", "HTML", "Bootstrap"],
    link: "https://github.com/yeexng/U2_D5_SoloProject_Medium_Clone",
    about:
      "In this project, I had clone the Medium.com website. Mainly focusing on Bootstrap practice.",
  },
  {
    image: "/assets/Travelone.png",
    title: "Travelone?",
    tags: [
      "JavaScript",
      "TypeScript",
      "React",
      "Redux",
      "MongoDB",
      "Vercel",
      "Railway",
    ],
    link: "https://github.com/yeexng/Travelone_FE",
    about:
      "A website designed mainly targeting single traveler who are seeking companionship and the opportunity to share memories with like-minded individuals. The app aims to connect solo travelers with compatible partners based on their interests, preferences, and travel plans. ",
  },
  {
    image: "/assets/Benchmark.png",
    title: "Epicode Benchmark",
    link: "https://github.com/yeexng/U1-BW-Benchmark",
    tags: ["JavaScript", "CSS", "HTML"],
    about: "Project cloning the Epicode benchmark system with result function.",
  },
  {
    image: "/assets/NetflixClone.png",
    title: "NetFlix Clone",
    tags: ["node.js", "API", "CRUD", "JavaScript", "Bootstrap"],
    link: "https://github.com/yeexng/U3_D5_Solo_Project_React_NetFlix",
    about: "Clone of the famous streaming platform",
  },
];

const Projects = () => {
  const [columns, setColumns] = useState(2);

  useEffect(() => {
    const handleResize = () => {
      // If the screen width is less than or equal to 600px, set columns to 1
      setColumns(window.innerWidth <= 600 ? 1 : 2);
    };

    // Attach the event listener for window resize
    window.addEventListener("resize", handleResize);

    // Call the handleResize function initially to set the columns based on the initial screen size
    handleResize();

    // Cleanup: remove the event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
              <div className="mb-2 current-page">Projects</div>
              <div className="mb-2">
                <Link to={"/contact"} className="no-deco">
                  Contact
                </Link>
              </div>
            </div>
          </div>

          <div className="masonry-div">
            <div className="masonry-scroll">
              <Masonry
                breakpointCols={columns}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column"
              >
                {ProjectArray &&
                  ProjectArray.map((posts) => {
                    return (
                      <div
                        key={posts.title}
                        className="content-secret-card my-masonry-grid_item p-1 mb-4"
                        onClick={() => {
                          window.open(posts.link, "_blank");
                        }}
                      >
                        <Card className="card-no-border card-item">
                          <Card.Img
                            variant="top"
                            src={posts.image}
                            className="card-img"
                          />
                          <Card.Body className="card-body-div">
                            <Card.Title className="font-s secret-post-title">
                              {posts.title}
                            </Card.Title>
                            <Card.Text>{posts.about}</Card.Text>
                            <div className="badge-container">
                              {posts.tags.map((tag, index) => (
                                <Badge
                                  key={index}
                                  variant="secondary"
                                  className="mr-1"
                                >
                                  {tag}
                                </Badge>
                              ))}
                            </div>
                          </Card.Body>
                        </Card>
                      </div>
                    );
                  })}
              </Masonry>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
