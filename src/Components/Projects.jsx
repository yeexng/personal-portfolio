import { Card, Nav } from "react-bootstrap";
import Masonry from "react-masonry-css";
import "../Layout.css";
import { Link } from "react-router-dom";

const ProjectArray = [
  {
    image:
      "https://images.unsplash.com/photo-1611944212129-29977ae1398c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
    title: "LinkedIn Clone",
    link: "",
    tags: ["JavaScript", "CSS", "HTML", "TypeScript"],
  },
  {
    image:
      "https://images.unsplash.com/photo-1592093506632-92ef342e2591?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=776&q=80",
    title: "Spotify Clone",
    tags: ["JavaScript", "CSS", "HTML", "TypeScript"],
  },
  {
    image:
      "https://images.unsplash.com/photo-1611944212129-29977ae1398c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
    title: "BenchMark",
    tags: ["JavaScript", "CSS", "HTML", "TypeScript"],
  },
];

const Projects = () => {
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

          <div>
            <Masonry
              breakpointCols={2}
              className="my-masonry-grid"
              columnClassName="my-masonry-grid_column"
            >
              {ProjectArray &&
                ProjectArray.map((posts) => {
                  return (
                    <div
                      key={posts.title}
                      className="content-secret-card my-masonry-grid_item p-0 mb-4"
                    >
                      <Card className="card-no-border">
                        <Card.Img
                          variant="top"
                          src={posts.image}
                          className="card-img"
                        />
                        <Card.Body>
                          <Card.Title className="font-s secret-post-title">
                            {posts.title}
                          </Card.Title>
                          <Card.Text></Card.Text>
                        </Card.Body>
                      </Card>
                    </div>
                  );
                })}
            </Masonry>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
