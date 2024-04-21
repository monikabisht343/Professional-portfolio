import React from "react";
import farm from "../assets/Farm.png";
import bombas from "../assets/bombas.png";
import cloth from "../assets/cloth.png";
import graphtal from "../assets/graphtal.png";
import office from "../assets/office.png";
import portfolioWebsite from "../assets/portfolioWebsite.png";
import university from "../assets/university.png";
import wondershare from "../assets/wondershare.png";
const projects = [
    {
        img: bombas,
        title: "PiGoogleDrive",
        desc: "This is E-Commerse Website which i bult witht technology ReactJs, JavaScript.",
        live: "https://www.bombas.com/"
    },

    
    {
        img: university,
        title: "university",
        desc: "This university website which i build with the help of PHP, HTML, CSS JavaScript.",
        live: "https://wanderlustadventures.free.nf/"
    },

    {
        img: farm,
        title: "farm",
        desc: "This is Farm base Website which i build with PHP, Laravel. HTML, CSS, JS",
        live: "https://gopalgirfarm.in/"
    },

    {
        img: cloth,
        title: "cloth",
        desc: "This is one of the leading E-commerce website which bult with the help of Shopify",
        live: "https://www.fabletics.com/"
    },
    
    {
        img: office,
        title: "office",
        desc: "This is one of the leading IT Office Portfolio",
        live: "https://bishtsisters.rf.gd/"
    },
    {
        img:portfolioWebsite,
        title: "portfolioWebsite",
        desc:  "This is Simple Portfolio with ReactJS showcasing personal informatin and Skills.",
        live:  "https://monikabisht343.github.io/Portfolio_websiteFrontendBackend/"
    },
    {
        img:wondershare,
        title: "wondershare",
        desc: "Travelling website",
        live: "https://wanderlustadventures.free.nf"
    },

    {
        img: graphtal,
        title: "Graphtal",
        desc: "Degital Website",
        live: "https://graphtal.in"
    }
    
];

const Projects = () => {
    return (
        <section className="bg-primary text-white px-5 py-32" id="projects">
            <div className="container mx-auto grid md:grid-cols-2 items-center justify-between">
                <div className="mb-5">
                    <h2 className="text-4xl font-bold mb-5 border-b-4 w-44 border-indigo-600 pb-2">Projects</h2>
                    <p>These are some of my projects built over the years based on my experiences.</p>
                </div>
                <div className="about-img"></div>
                <div class="bubble"></div>
            </div>

            <div className="projects container mx-auto grid md:grid-cols-3 gap-10">
                {projects.map((project, index) => (
                    <div className="relative" key={index}>
                        <img src={project.img} alt={project.title} className="w-full h-auto"/>
                        <div className="flex absolute inset-0 m-auto w-full h-full bg-primary opacity-0 duration-500 justify-center items-center hover:opacity-100">
                            <div className="text-center p-5">
                                <p className="font-bold text-white">{project.desc}</p>
                                <a href={project.live} className="px-5 py-2 bg-blue-500 hover:bg-blue-600 mr-5 font-bold text-white">Live</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
           
        </section>
    );
};

export default Projects;
