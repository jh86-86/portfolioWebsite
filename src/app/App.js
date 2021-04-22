import React,{useState,useEffect,useReducer} from 'react';
import './App.css';
import Navbar from '../Router/Router'



function App() {
  useEffect(()=> {
    async function getProjects(){
      let url= "https://portfoliojj.herokuapp.com/projects";
    let response =  await fetch(url);
    let data = await response.json();
      console.log(data);
  
    }
    getProjects();
  } ,[]);

  return (
    <div id="app">
    <Navbar />

    </div>
  );
}

export default App;
