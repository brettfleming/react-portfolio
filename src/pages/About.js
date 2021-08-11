import Me from '../assets/photos/me.jpg';
import Html5 from '../assets/photos/skills-images/html5.png';
import Css3 from '../assets/photos/skills-images/css3.png';
import Js from '../assets/photos/skills-images/JS.png';
import Jquery from '../assets/photos/skills-images/jQuery.png';
import Bootstrap from '../assets/photos/skills-images/bootstrap.png';
import Node from '../assets/photos/skills-images/nodeJS.png';
import Express from '../assets/photos/skills-images/express.png';
import Mysql from '../assets/photos/skills-images/MySQL.jpg';
import Mongodb from '../assets/photos/skills-images/mongodb.png';
import react from '../assets/photos/skills-images/React.png';
import npm from '../assets/photos/skills-images/npm_logo.png';
import Mern from '../assets/photos/skills-images/mern.jpg';
import Github from '../assets/photos/skills-images/github-logo.png';




function About() {
    return (
        <div className='about'>
            <h2 className='about-title'>About Me</h2>
            <div>
                <div className='d-flex'>
                    <img className='col-4 p-5'src={Me}/>
                    <p className='col-8 p-2'>
                        I graduted from high school in 2016, I ended up attending Luther college in the small town of Decorah Iowa in pursuit of a chemistry degree.
                        I attended Luther for four years playing soccer for all of them, I played in the attack as a winger and as a striker. In my four years on the varsity soccer team we won 
                        four trophies (The league once and the confrence tournament three times), while also qualifying for the national tournment three years out of four. placeing in the top 8 two years in
                        a row. Even though I was a student athlete that didnt mean I slacked on my studies, I was a student first, athlete secound ( hence <strong>student</strong> athlete). when I 
                        wasnt practicing soccer I was at the library working on all my homework and studying for exams. I had to work very hard to keep up with my studies while also being an athlete 
                        but i accepted the challenge head on! After graduating college in 2020 during a global pandemic it was a struggle to find a job, so almost a year later I decided to take this coding bootcamp to either make my self
                        more marketable or change careers entirly. and I have been loving this bootcamp so far and I cant wait to add more to this portfolio as time goes on!
                    </p>
                </div>
            </div>
            <div>
                <h2 className='about-title'> Skills </h2>
                <img className="skills-image" src={Html5} alt="HTML5"/>
                <img className="skills-image" src={Css3} alt="CSS3"/>
                <img className="skills-image" src={Js} alt="JavaScript"/>
                <img className="skills-image" src={Jquery} alt="jQuery"/>
                <img className="skills-image" src={Bootstrap} alt="Bootstrap"/>
                <img className="skills-image" src={Node} alt="NodeJS"/>
                <img className="skills-image" src={Express} alt="ExpressJS"/>
                <img className="skills-image" src={Mysql} alt="MySQL"/>
                <img className="skills-image" src={Mongodb} alt="mongodb"/>
                <img className="skills-image" src={react} alt="React"/>
                <img className="skills-image-npm" src={npm} alt="npm Logo"/>
                <img className="skills-image-mern" src={Mern} alt="MERN"/>
                <img className="skills-image-github" src={Github} alt="GitHub Logo"/>
            </div>
        </div>
    )
    
}


export default About;