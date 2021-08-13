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
import { motion } from "framer-motion"




function About() {
    return (
        <motion.div className='about' animate={{ opacity: 1}} initial={ {opacity: 0}} transition={{ ease: "easeOut", duration: 2 }}>
            <h2 className='about-title'>About Me</h2>
            <div>
                <div className='d-flex'>
                    <img className='img-me col-4 p-5'src={Me}/>
                    <p className='col-8 p-2'>
                    I'm a Luther College graduate, I graduated in May of 2020 with a chemistry degree. In my four years of college I played soccer for the varsity soccer team and walked away with four trophies to my name while also  participating in the national tournament three of my four years at Luther. With back to back elite 8 finishes and a final ranking of 5th in the nation for my senior year. I also recently received a certificate in web-development after finishing an intensive 12-week coding Bootcamp at the University of Minnesota. During the bootcamp I really fell in love with web development and computer programming and I'm ready to use the skills that I have learned to create some amazing projects in the future!
                    </p>
                </div>
            </div>
            <div>
                <h2 className='about-title'> Skills </h2>
                <motion.img className="skills-image" src={Html5} alt="HTML5" animate={{ opacity: 1}} initial={ {opacity: 0}} transition={{ ease: "easeOut", duration: 4, delay: .2}} />
                <motion.img className="skills-image" src={Css3} alt="CSS3" animate={{ opacity: 1}} initial={ {opacity: 0}} transition={{ ease: "easeOut", duration: 4, delay: .2}}/>
                <motion.img className="skills-image" src={Js} alt="JavaScript" animate={{ opacity: 1}} initial={ {opacity: 0}} transition={{ ease: "easeOut", duration: 4, delay: .4}}/>
                <motion.img className="skills-image" src={Jquery} alt="jQuery" animate={{ opacity: 1}} initial={ {opacity: 0}} transition={{ ease: "easeOut", duration: 4, delay: .6}}/>
                <motion.img className="skills-image" src={Bootstrap} alt="Bootstrap" animate={{ opacity: 1}} initial={ {opacity: 0}} transition={{ ease: "easeOut", duration: 4, delay: .8}}/>
                <motion.img className="skills-image" src={Node} alt="NodeJS" animate={{ opacity: 1}} initial={ {opacity: 0}} transition={{ ease: "easeOut", duration: 4, delay: 1}}/>
                <motion.img className="skills-image" src={Express} alt="ExpressJS" animate={{ opacity: 1}} initial={ {opacity: 0}} transition={{ ease: "easeOut", duration: 4, delay: 1.2}}/>
                <motion.img className="skills-image" src={Mysql} alt="MySQL" animate={{ opacity: 1}} initial={ {opacity: 0}} transition={{ ease: "easeOut", duration: 4, delay: 1.4}}/>
                <motion.img className="skills-image" src={Mongodb} alt="mongodb" animate={{ opacity: 1}} initial={ {opacity: 0}} transition={{ ease: "easeOut", duration: 4, delay: 1.6}}/>
                <motion.img className="skills-image" src={react} alt="React" animate={{ opacity: 1}} initial={ {opacity: 0}} transition={{ ease: "easeOut", duration: 4, delay: 1.8}}/>
                <motion.img className="skills-image-npm" src={npm} alt="npm Logo" animate={{ opacity: 1}} initial={ {opacity: 0}} transition={{ ease: "easeOut", duration: 4, delay: 2}}/>
                <motion.img className="skills-image-mern" src={Mern} alt="MERN" animate={{ opacity: 1}} initial={ {opacity: 0}} transition={{ ease: "easeOut", duration: 4, delay: 2.2}}/>
                <motion.img className="skills-image-github" src={Github} alt="GitHub Logo" animate={{ opacity: 1}} initial={ {opacity: 0}} transition={{ ease: "easeOut", duration: 4, delay: 2.4}}/>
            </div>
            <div>
                <h2 className='about-title'>Resume</h2>
                <p className='about-resume'>Heres a link to my <a href='https://docs.google.com/document/d/1yUazAXmWEYqt2k7-Hb3eO1Doh9E70w2cYLp3fiEiQjE/edit?usp=sharing' target='_blank'>resume</a></p>
            </div>
        </motion.div>
    )
    
}


export default About;