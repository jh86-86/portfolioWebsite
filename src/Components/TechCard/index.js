import c from './c#.png';
import js from './js.png';
import tailwind from './tailwind.png';
import html from './html.png';

let frontArray=[js,tailwind,html];

function TechCard(){
    return(
        <div>
            <p>Tech stack </p>
             {frontArray.map((pic)=>(<div><img src={pic} /></div>))}   
             
            
        </div>    
    )
}

export default TechCard;