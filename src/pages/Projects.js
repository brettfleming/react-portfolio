import { motion } from "framer-motion"
import DndProject from '../assets/photos/dnd-creator-homepage.jpg'
import Cccbeer from '../assets/photos/landings_page_screenshot.png'
import Bootstrap from '../assets/photos/skills-images/bootstrap.png';
import Html5 from '../assets/photos/skills-images/html5.png';
import Css3 from '../assets/photos/skills-images/css3.png';
import Node from '../assets/photos/skills-images/nodeJS.png';
import Express from '../assets/photos/skills-images/express.png';
import Mysql from '../assets/photos/skills-images/MySQL.jpg';
import Js from '../assets/photos/skills-images/JS.png';


function Projects() {
    return (
            <motion.div className='project' animate={{ opacity: 1}} initial={ {opacity: 0}} transition={{ ease: "easeOut", duration: 2 }}>
                    <h2 className='about-title'> My Projects</h2>
                    <motion.div className='d-flex project-box' animate={{ x: 0 }} initial={ {x: 1000}} transition={{ ease: "easeOut", duration: 2 }}>
                        <div>
                            <img className='img-project'src={DndProject}/>
                        </div>
                        <div className="project-body">
                            <h3 className='project-title'>D&D Character Creator</h3>
                            <p className='poject-desc '>
                            An interactive webpage that is a D&D character creator, that allows users to look at other peoples characters and comment on them. They can also look up monsters in the monster index. 
                            </p>
                            <h3 className='project-tech'>Tech Stack</h3>
                                <img className="skills-image" src={Html5} alt="HTML5"/>
                                <img className="skills-image" src={Css3} alt="CSS3"/>
                                <img className="skills-image" src={Bootstrap} alt="Bootstrap"/>
                                <img className="skills-image" src={Js} alt="JavaScript" />
                                <img className="skills-image" src={Node} alt="NodeJS" />
                                <img className="skills-image" src={Express} alt="ExpressJS" />
                                <img className="skills-image" src={Mysql} alt="MySQL" />
                            <div className='project-btn'>
                                <button type="button" class="btn btn-primary project-btn"><a href="https://github.com/brettfleming/DnD-creator" target="_blank">GitHub</a></button>
                                <button type="button" class="btn btn-success project-btn"><a href="https://dnd-creator.herokuapp.com/" target="_blank">Demo</a></button>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div className='d-flex' animate={{ x: 0 }} initial={ {x: -1000}} transition={{ ease: "easeOut", duration: 2 }}>
                        <div className='d-flex'>
                        <div className="project-body">
                            <h3 className='project-title'>Cocktails, Cuisine & Craft Beers</h3>
                            <p className='poject-desc '>
                            A website that searches 3 different API's depending on what the user is looking for. The options are restaurants and breweries by Zip code or Cocktails by type or main ingredient                            </p>
                            <h3 className='project-tech'>Tech Stack</h3>
                                <img className="skills-image" src={Html5} alt="HTML5"/>
                                <img className="skills-image" src={Css3} alt="CSS3"/>
                                <img className="skills-image" src={Bootstrap} alt="Bootstrap"/>
                                <img className="skills-image" src={Js} alt="JavaScript" />

                            <div className='project-btn'>
                                <button type="button" class="btn btn-primary project-btn"><a href="https://github.com/brettfleming/Cocktails-Cuisine-Craft-Beers" target="_blank">GitHub</a></button>
                                <button type="button" class="btn btn-success project-btn"><a href="https://brettfleming.github.io/Cocktails-Cuisine-Craft-Beers/" target="_blank">Demo</a></button>
                            </div>
                        </div>
                        <div>
                            <img className='img-project'src={Cccbeer}/>
                        </div>
                        </div>
                    </motion.div>
                    {/* <div className='d-flex'>
                        <div className='d-flex'>
                        <div className="project-body">
                            <h3 className='project-title'>Cocktails, Cuisine & Craft Beers</h3>
                            <p className='poject-desc '>
                                I graduted from high school in 2016, I ended up attending Luther college in the small town of Decorah Iowa in pursuit of a chemistry degree.
                                I attended Luther for four years playing soccer for all of them, I played in the attack as a winger and as a striker. In my four years on the varsity soccer team we won 
                                four trophies (The league once and the confrence tournament three times), while also qualifying for the national tournment three years out of four. placeing in the top 8 two years in
                            </p>
                            <h3 className='project-tech'>Technologies</h3>
                                <img className="skills-image" src={Html5} alt="HTML5"/>
                                <img className="skills-image" src={Css3} alt="CSS3"/>
                                <img className="skills-image" src={Bootstrap} alt="Bootstrap"/>
                            <div className='project-btn'>
                                <button type="button" class="btn btn-primary project-btn"><a href="https://github.com/brettfleming/Cocktails-Cuisine-Craft-Beers" target="_blank">GitHub</a></button>
                                <button type="button" class="btn btn-success project-btn"><a href="https://brettfleming.github.io/Cocktails-Cuisine-Craft-Beers/" target="_blank">Demo</a></button>
                            </div>
                        </div>
                        <div>
                            <img className='img-project'src={Cccbeer}/>
                        </div>
                        </div>
                    </div> */}
            </motion.div>
    )
}

export default Projects