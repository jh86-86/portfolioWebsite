import ProjectLinkPicture from '../Components/ProjectLinePicture/index';
import {projectOne,projectTwo,projectThree} from '../ProjectObjects/projectObjects';


function ProjectPage(){
    return(
        <div>
             <div id="projects">
              <ProjectLinkPicture project={projectOne} />
              <ProjectLinkPicture project={projectTwo} />
              <ProjectLinkPicture project={projectThree} />
            </div>
        </div>    
    )
}

export default ProjectPage;