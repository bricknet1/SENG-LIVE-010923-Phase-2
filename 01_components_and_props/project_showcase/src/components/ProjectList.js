import ProjectListItem from "./ProjectListItem"

function ProjectList ({projects}) {
    // console.log(projects);
    const ProjectListItems = projects.map(project => {
        return <ProjectListItem 
            key={project.id} 
            project={project}
        />
    });

    return (
        <ul>{ProjectListItems}</ul>
    )
}

export default ProjectList