import React from 'react'
import ProjectCard from './ProjectCard';

function ProjectSection() {
    const projects = [
        {
            id : 1,
            title : "Project 1",
            imageUrl : "https://images.pexels.com/photos/3184454/pexels-photo-3184454.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            excerpt : "This is my Project about...",
        },
        {
            id : 2,
            title : "Project 2",
            imageUrl : "https://images.pexels.com/photos/3184454/pexels-photo-3184454.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            excerpt : "This is my Project about...",
        },
        {
            id : 3,
            title : "Project 3",
            imageUrl : "https://images.pexels.com/photos/3184454/pexels-photo-3184454.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            excerpt : "This is my Project about...",
        },
    ];
    return (
        <div className="container text-center my-5">
        <h1 className="font-weight-light">My
            <span className="text-info"> Projects</span>
            </h1>
            <div className="lead pd-5">I build products, Just as this website</div>
            <div className="row my-5 pd-3">
                {
                projects.map((project) => 
                (
                    <div key={project.id} className="col-12 col-md-4 my-2">
                        <ProjectCard 
                        // title={project.title} 
                        // excerpt={project.excerpt} 
                        // imageUrl={project.imageUrl} 
                        project={project} // propname={actual name in the map function}
                        />
                        </div>
                )
                )
            }
                </div>
            <div className="my-5">
                <a href="/" className="text-dark text-right">
                    <h5>See my Projects
                    <i className="fa fa-arrow-right align-middle" ></i>
                </h5>
                </a>
            </div>

      </div>
    );
}

export default ProjectSection;
