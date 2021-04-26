
function imageClick(url) {
    window.location = url;
}


function ProjectLinkPicture({project}){
    return(
        <div className="project-box">
            <h2>{project.name}</h2>
            <p>{project.description}</p>
            <img className="individual-projects-section" src={project.image} alt={project.projectInfo} onClick={()=>imageClick(project.link)} />
        </div>    
    )
}

export default ProjectLinkPicture;