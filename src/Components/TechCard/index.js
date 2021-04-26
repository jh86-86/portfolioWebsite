//frontend
import js from './frontend/js.png';
import html from './frontend/html.png';
import chakra from './frontend/chakra.png';
import jest from './frontend/jest.jpeg';
import axios from './frontend/axios.png';
import typescript from './frontend/typescript.png'
import React from './frontend/React.png';

//css
import tailwind from './csstools/tailwind.png';
import css from './csstools/css.jpeg';
import bootstrap from './csstools/bootsrap.jpeg';
import cssModules from './csstools/cssmodules.png';

//backend
import node from './backend/node.png';
import cSharp from './backend/c#.png';
import nSubstitute from './backend/nsub.jpeg'
import Xunit from './backend/xunit.png';
import dotnet from './backend/Net.png'

//database
import mongo from './databases/mongo.png';
import nedb from './databases/nedb.jpeg';
import postgres from './databases/postgres.png'


//tools
import docker from './Tools/docker.png';
import jira from './Tools/jira.png';
import postman from './Tools/postman.png';
import trello from './Tools/trello.png'


let frontArray=[js,html,chakra,jest, axios, typescript, React];
let backendArray=[node,cSharp,nSubstitute,Xunit,dotnet];
let cssStack=[css, cssModules, bootstrap, tailwind];
let databases=[mongo, nedb,postgres];
let tools=[docker,jira,postman,trello];

function TechCard(){
    return(
        <div className="techcard-container">
            <p>Frontend Tech</p>
        <div className="picture-layout-row">
             {frontArray.map((pic)=>(<div><img className="tech-pics" alt="tech pics" src={pic} /></div>))} 
            </div>
             <p>Backend Tech</p>  
             <div className="picture-layout-row">
             {backendArray.map((pic)=>(<div><img className="tech-pics" alt="tech pics" src={pic} /></div>))}   
            </div>
             <p>CSS</p>  
             <div className="picture-layout-row">
             {cssStack.map((pic)=>(<div><img className="tech-pics" alt="tech pics" src={pic} /></div>))}   
            </div>
             <p>Databases</p>  
             <div className="picture-layout-row">
             {databases.map((pic)=>(<div><img className="tech-pics" alt="tech pics" src={pic} /></div>))}   
            </div>
            <p>Tools</p>
             <div className="picture-layout-row">
             {tools.map((pic)=>(<div><img className="tech-pics" alt="tech pics" src={pic} /></div>))}   
            </div>
        </div>
                
    )
}

export default TechCard;