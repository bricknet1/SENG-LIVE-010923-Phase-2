function ProjectListItem ({project}) {

    const {name,about,phase,link,image} = project;

    return (
        <li>
            <br />
            <h2>Project List Item</h2>
            <p>Title: {name}</p>
            <p>About: {about}</p>
            <a href={link}>Project Link</a>
            {/* <img src={image} /> */}
            <p>Phase: {phase}</p>
        </li>
    )
}

export default ProjectListItem

// Unrelated to the content of the lecture - is your color configuration an extension in VS Code?