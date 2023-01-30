import projects from "./projects"
import Header from "./components/Header"
import ProjectForm from "./components/ProjectForm"
import ProjectList from "./components/ProjectList"

function App() {
  console.log(projects);
  return (
    <>
      <div>Project Showcase</div>
      <Header firstName="Nick" lastName="Johnson" age={37}/>
      <ProjectForm />
      <ProjectList projects={projects}/>
    </>
  );
}

export default App;