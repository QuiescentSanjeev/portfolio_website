import React from "react";

function Footer (){
    return (

        <footer>
        <div className="container-fluid text-center" style={{backgroundColor: "black"}}>
        <div className="py-5">
            
                <h2 className="text-light">Interested in working with me?</h2>
                <button className="btn btn-outline-light btn-lg">Let's Talk</button>
            
        </div>
        <div className="row">
            <div className="col-12 col-md-4 py-3">
                <h5 className="text-info pb-3">More Links</h5>
                <a href="/" className="text-light d-block">Blogs</a>
                <a href="/" className="text-light d-block">Home</a>
                <a href="/" className="text-light d-block">Projects</a>
                <a href="/" className="text-light d-block">Contact me</a>
                <a href="/" className="text-light">
                    Write a Recommendation <i className="fa fas fa-heart text-light"></i>
                </a>
            </div>
            <div className="col-12 col-md-4 text-light text-justify py-3">
                <p>I am a self-starter with strong interpersonal skills. I work efficiently both as an individual contributor as well as a good team player as if new challenges and try to think out of the box while looking for Creative Solutions to a given problem.
                    I have several strengths, I am patient, committed, honest, self-motivated, and mainly have self-confidence.
                 </p>

            </div>
            <div className="col-12 col-md-4 py-3">
                <h5 className="text-info pb-3">Social</h5>
                <a href="/">
                    <i className="fa fa-linkedin text-light h2 d-block"></i>
                </a>
                <a href="https://www.youtube.com/channel/UCjMTyRxVrGrRx3Wx2ye2cDQ">
                    <i className="fa fa-youtube text-light h2 d-block"></i>
                </a>
                <a href="/">
                    <i className="fa fa-envelope text-light h2 d-block" aria-hidden="true"></i>
                </a>
            </div>
        </div>
            
                <div className="text-muted py-3">
                <p>Copyright © Sanjeev Dastikopp 2021</p>
            
        </div>
        </div>
    </footer>

    );
}

export default Footer;