
import js from './frontend/js.png';
import tailwind from './frontend/tailwind.png';
import html from './frontend/html.png';
import chakra from './frontend/chakra.png';
import jest from './frontend/jest.jpeg';
import node from './backend/node.png';
import cSharp from './backend/c#.png';
import nSubstitute from './backend/node.png';
import Xunit from './backend/xunit.png';
import dotnet from './backend/Net.png'


let frontArray=[js,tailwind,html,chakra,jest];
let backendArray=[node,cSharp,nSubstitute,Xunit,dotnet]

function TechCard(){
    return(
        <div>
        <div className="tech-card-layout">
            <p>Frontend Tech</p>
            
             {frontArray.map((pic)=>(<div className="picture-layout-row"><img className="tech-pics" alt="tech pics" src={pic} /></div>))} 
            </div>
             <p>Backend Tech</p>  
             <div className="picture-layout-row">
             {backendArray.map((pic)=>(<div><img className="tech-pics" alt="tech pics" src={pic} /></div>))}   
            </div>
        </div>
                
    )
}

export default TechCard;