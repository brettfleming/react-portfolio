import DndProject from '../assets/photos/dnd-creator-homepage.jpg'
import Cccbeer from '../assets/photos/landings_page_screenshot.png'
import Bootstrap from '../assets/photos/skills-images/bootstrap.png';
import Html5 from '../assets/photos/skills-images/html5.png';
import Css3 from '../assets/photos/skills-images/css3.png';

function Projects() {
    return (
            <div className='project'>
                    <h2 className='about-title'> My Projects</h2>
                    <div className='d-flex project-box'>
                        <div>
                            <img className='img-project'src={DndProject}/>
                        </div>
                        <div className="project-body">
                            <h3 className='project-title'>D&D Character Creator</h3>
                            <p className='poject-desc '>
                                I graduted from high school in 2016, I ended up attending Luther college in the small town of Decorah Iowa in pursuit of a chemistry degree.
                                I attended Luther for four years playing soccer for all of them, I played in the attack as a winger and as a striker. In my four years on the varsity soccer team we won 
                                four trophies (The league once and the confrence tournament three times), while also qualifying for the national tournment three years out of four. placeing in the top 8 two years in
                            </p>
                            <h3 className='project-tech'>Tech Stack</h3>
                                <img className="skills-image" src={Html5} alt="HTML5"/>
                                <img className="skills-image" src={Css3} alt="CSS3"/>
                                <img className="skills-image" src={Bootstrap} alt="Bootstrap"/>
                            <div className='project-btn'>
                                <button type="button" class="btn btn-primary project-btn"><a href="https://github.com/brettfleming/DnD-creator" target="_blank">GitHub</a></button>
                                <button type="button" class="btn btn-success project-btn"><a href="https://dnd-creator.herokuapp.com/" target="_blank">Demo</a></button>
                            </div>
                        </div>
                    </div>
                    <div className='d-flex'>
                        <div className='d-flex'>
                        <div className="project-body">
                            <h3 className='project-title'>Cocktails, Cuisine & Craft Beers</h3>
                            <p className='poject-desc '>
                                I graduted from high school in 2016, I ended up attending Luther college in the small town of Decorah Iowa in pursuit of a chemistry degree.
                                I attended Luther for four years playing soccer for all of them, I played in the attack as a winger and as a striker. In my four years on the varsity soccer team we won 
                                four trophies (The league once and the confrence tournament three times), while also qualifying for the national tournment three years out of four. placeing in the top 8 two years in
                            </p>
                            <h3 className='project-tech'>Tech Stack</h3>
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
                    </div>
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
            </div>
    )
}

export default Projects