import React, { useState, useEffect } from "react";
import { motion } from "framer-motion"
import { Link } from 'react-router-dom'

function Home() {
    return (
        <motion.div className="jumbotron" animate={{ opacity: 1}} initial={ {opacity: 0}} transition={{ ease: "easeOut", duration: 2 }}>
            <h1 className="display-4">Hello, My Name is Brett</h1>
            <p className="lead">Full Stack Developer, based out of Minnesota, and Im ready to bring my creative ideas to life!  </p>
            <hr className="my-4"></hr>
            <p className="lead">
                <Link className="btn btn-primary btn-lg" to='/about'>Learn more about me</Link>
            </p>
        </motion.div>
    )
    
}

export default Home;