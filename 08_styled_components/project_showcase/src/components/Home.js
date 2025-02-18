// Deliverable 3: Import / Add `Button` Styled Component

  // How can we make `Button` render to the DOM as a `Link` component?

  import { useEffect, useState } from "react";
  import { Link } from "react-router-dom";

  import {Button} from "./shared"
  
  const Home = () => {
    const [recentProjects, setRecentProjects] = useState([]);
  
    useEffect(() => {
      // fetch the 3 most recently added projects from json-server
      fetch("http://localhost:4000/projects?_sort=id&_order=desc&_limit=3")
        .then((r) => r.json())
        .then((recentProjects) => {
          setRecentProjects(recentProjects);
        });
    }, []);
  
    return (
      <section className="box">
        <h2 style={{ fontSize: "3rem" }}>View Awesome Projects.</h2>
        <p>
          Looking for someone to hire? Check out these awesome projects from
          Flatiron students.
        </p>
        <h3>Recent Projects:</h3>
        {recentProjects.map((project) => (
          <p key={project.id}>{project.name}</p>
        ))}
        <div style={{ margin: "1rem 0" }}>
          <Button as={Link} to="/projects">
            View All Projects
          </Button>
        </div>
      </section>
    );
  };
  
  export default Home;
  