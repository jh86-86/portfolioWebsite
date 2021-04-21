
function imageClick(url) {
    window.location = url;
}


function ProjectLinkPicture({project}){
    return(
        <div class="project-box">
            <h2>{project.name}</h2>
            <p>{project.projectInfo}</p>
            <img className="individual-projects-section" src={project.image} alt={project.description} onClick={()=>imageClick(project.link)} />
        </div>    
    )
}

export default ProjectLinkPicture;