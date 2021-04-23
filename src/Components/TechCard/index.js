
import js from './js.png';
import tailwind from './tailwind.png';
import html from './html.png';

let frontArray=[js,tailwind,html];

function TechCard(){
    return(
        <div className="tech-card-layout">
            <p>Tech stack </p>
             {frontArray.map((pic)=>(<div><img className="tech-pics" alt="tech pics" src={pic} /></div>))}   

            
        </div>    
    )
}

export default TechCard;