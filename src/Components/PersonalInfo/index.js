import jj from './jjpro.jpeg'

function PersonalInfoCard(){

    let paragraphOne="After recently completing an intensive 3 month bootcamp where I was handpicked from over 1000 applicants, I have started my voyage into the ocean of code. I have learned alot of tech....too much some might say but not enough say I. I am continuing to learn and develop as a full stack engineer. I am fascinated by code and I will keep learning throughout my career.";
    
    let paragraphTwo=  "I am full stack developer and can work creatively on the front or the back.I have completed some sample projects for you to enjoy. I have also included technolgies that I have worked with and ones which I am currently using on my projects. I am currently working on a tracking app for fitness and I have a couple of other projects in mind for when that is finished.";
    
    let paragraphThree=  "In my personal time, I like learning German and Japanese. I also enjoy weights,running,calisthenics and dancing to keep myself healthy. I also enjoy gaming as a guilty pleasure. Ultimately, I enjoying pushing myself both mentally and physically though.";


    return(
        <div>
            <h2>JohnJames Hodgins's Portfolio</h2>
            <img className="profile-pic" src={jj} alt="JJ" />
            <p className="bio-paragraphs">{paragraphOne}</p>
            <p className="bio-paragraphs">{paragraphTwo}</p>
            <p className="bio-paragraphs">{paragraphThree}</p>
        </div>
    )
}

export default PersonalInfoCard;