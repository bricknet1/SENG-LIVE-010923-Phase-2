import { useState, useEffect } from "react";

import Header from "./components/Header";
import ProjectForm from "./components/ProjectForm";
import ProjectList from "./components/ProjectList";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const [projects, setProjects] = useState([]);

  const [searchQuery, setSearchQuery] = useState("");

  const searchResults = projects.filter((project) => {
    return project.name.toLowerCase().includes(searchQuery.toLowerCase());
  });

  const handleClick = () => setIsDarkMode(!isDarkMode);

  const handleOnChange = (e) => setSearchQuery(e.target.value);


  // # Deliverable 1: Configure a <button> in our App 
  // that will use json-server to fetch projects 
  // and store them in state

  // - Add an onClick event listener to the "Load Projects" 
  // button

  useEffect(()=>{
    fetch("http://localhost:4000/projects")
    .then(res=>res.json())
    .then(projects=>{setProjects(projects)})
  }, []);

  const handleProjects = () => {
    fetch("http://localhost:4000/projects")
    .then(res=>res.json())
    .then(projects=>{setProjects(projects)})
  }

  // - When the button is clicked, make a fetch 
  // request to "http://localhost:4000/projects"
  // and set the `projects` state to the value 
  // returned by the response

  const ProjectTheme = isDarkMode ? "App" : "App light"

  return (
    <div className={ProjectTheme}>
      <Header handleClick={handleClick} isDarkMode={isDarkMode}/>
      <ProjectForm />
      <button onClick={handleProjects}>Load Projects</button>
      <ProjectList handleOnChange={handleOnChange} searchResults={searchResults} />
    </div>
  );
};

export default App;
