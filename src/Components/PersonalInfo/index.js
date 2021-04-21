import jj from './jj.jpeg'

function PersonalInfoCard(){

    let bio="After recently completing an intensive 3 month bootcamp where I was handpicked from over 1000 applicants,</br> I have started my voyage into the ocean of code. I have learned alot of tech....too much some might say but not enough say I. I am full stack developer and can work creatively on the front or the back.I have completed some sample projects for you to peruse for your own amusement.";


    return(
        <div>
            <h2>JohnJames Hodgins's Portfolio</h2>
            <img className="profile-pic" src={jj} alt="JJ" />
            <p>{bio}</p>
        </div>
    )
}

export default PersonalInfoCard;