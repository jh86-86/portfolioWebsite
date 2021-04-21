//import React,{useState,useEffect,useReducer} from 'react';
import './App.css';

import ProjectLinkPicture from '../Components/ProjectLinePicture/index';
import {projectOne,projectTwo,projectThree} from '../ProjectObjects/projectObjects';
import PersonalInfoCard from '../Components/PersonalInfo/index';
import TechCard from '../Components/TechCard/index';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Bio from '../Pages/Bio';
import Tech from '../Pages/Tech';
import ProjectPage from '../Pages/ProjectPage';
import Navbar from '../Router/Router'



function App() {


  return (
    <Navbar />
  );
}

export default App;
