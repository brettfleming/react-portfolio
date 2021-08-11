import Me from '../assets/photos/me.jpg'



function About() {
    return (
        <div className='about'>
            <h1 className='about-title'>About Me</h1>
            <div>
                <div className='d-flex'>
                    <img className='col-4 p-5'src={Me}/>
                    <p className='col-8 p-2'>I graduted from high school in 2016, I ended up attending Luther college in the small town of Decorah Iowa in pursuit of a chemistry degree.
        I attended Luther for four years playing soccer for all of them, I played in the attack as a winger and as a striker. In my four years on the varsity soccer team we won 
        four trophies (The league once and the confrence tournament three times), while also qualifying for the national tournment three years out of four. placeing in the top 8 two years in
        a row. Even though I was a student athlete that didnt mean I slacked on my studies, I was a student first, athlete secound ( hence <strong>student</strong> athlete). when I 
        wasnt practicing soccer I was at the library working on all my homework and studying for exams. I had to work very hard to keep up with my studies while also being an athlete 
        but i accepted the challenge head on! After graduating college in 2020 during a global pandemic it was a struggle to find a job, so almost a year later I decided to take this coding bootcamp to either make my self
        more marketable or change careers entirly. and I have been loving this bootcamp so far and I cant wait to add more to this portfolio as time goes on!</p>
                </div>
            </div>
        </div>
    )
    
}


export default About;