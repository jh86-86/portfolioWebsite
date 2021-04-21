//import React,{useState,useEffect,useReducer} from 'react';
import './App.css';

import ProjectLinkPicture from '../Components/ProjectLinePicture/index';
import {projectOne,projectTwo,projectThree} from '../ProjectObjects/projectObjects';
import PersonalInfoCard from '../Components/PersonalInfo/index';
import TechCard from '../Components/TechCard/index';



function App() {


  return (
    <div className="App">
      <PersonalInfoCard />
        <div id="projects">
          <ProjectLinkPicture project={projectOne} />
          <ProjectLinkPicture project={projectTwo} />
          <ProjectLinkPicture project={projectThree} />
        </div>
        <TechCard />
    </div>
  );
}

export default App;
