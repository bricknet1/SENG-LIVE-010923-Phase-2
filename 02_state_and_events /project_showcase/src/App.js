import Header from "./components/Header";
import ProjectForm from "./components/ProjectForm";
import ProjectList from "./components/ProjectList";

import projects from "./projects";

import { useState } from 'react'

const App = () => {

  const [isDarkMode, isDarkModeSetter] = useState(true);

  function handleCLick(){
    isDarkModeSetter(!isDarkMode);
  }

  return (
    <div className={isDarkMode ? "App" : "App light"}>
      <Header 
        isDarkMode={isDarkMode} 
        handleClick={handleCLick} 
      />
      <ProjectForm />
      <ProjectList projects={projects} />
    </div>
  );
};

export default App;
