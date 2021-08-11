import React, { useState, useEffect } from "react";

function Home() {
    return (
        <div className="jumbotron">
            <h1 className="display-4">Hello, My Names Brett</h1>
            <p className="lead">Full Stack Developer, based out of Minnesota aks;flkasdjf;lkasjdflkasjhdf ;asdjfasdlfknasdlkfn;asdlkhvfjaskdfjlasdfkjasvfnasvdfjlkhbnasvjknas </p>
            <hr className="my-4"></hr>
            <p className="lead">
                <a className="btn btn-primary btn-lg" href="/about" role="button">Learn more about me</a>
            </p>
        </div>
    )
    
}

export default Home;