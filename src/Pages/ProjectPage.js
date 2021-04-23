import React, {useState,useEffect} from 'react';
import ProjectLinkPicture from '../Components/ProjectLinePicture/index';
//import {projectOne,projectTwo,projectThree} from '../ProjectObjects/projectObjects';
import {initialState} from '../ProjectObjects/initialStateForProjectPage'


function ProjectPage(){


    
    const[projectObjects, setProjectsObjects]=useState(initialState);

    useEffect(()=> {
        async function getProjects(){
          let url= `${process.env.REACT_APP_BACKEND_URL}`;
        let response =  await fetch(url);
        let data = await response.json();
          console.log(data[0]);
        
          setProjectsObjects(data);
        }
        getProjects();
      } ,[]);


    return(
        <div>
             <div id="projects">
               <ProjectLinkPicture project={projectObjects[0]} /> 
              <ProjectLinkPicture project={projectObjects[1]} />
              <ProjectLinkPicture project={projectObjects[2]} />  
            </div>
        </div>    
    )
}

export default ProjectPage;