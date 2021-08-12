import React, { useState, useEffect } from "react";

function Home() {
    return (
        <div className="jumbotron">
            <h1 className="display-4">Hello, My Names Brett</h1>
            <p className="lead">Full Stack Developer, based out of Minnesota, and Im ready to bring my creative ideas to life!  </p>
            <hr className="my-4"></hr>
            <p className="lead">
                <a className="btn btn-primary btn-lg" href="/about" role="button">Learn more about me</a>
            </p>
        </div>
    )
    
}

export default Home;