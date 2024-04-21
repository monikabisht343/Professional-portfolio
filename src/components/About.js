import React from "react";
import AboutImg from "../assets/Aimg.png";

const About = () => {
    return(
        <section className="bg-primary text-white px-5 py-32" id="about">
            <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
                <div className="about-info">
                    <h2 className="text-4lx font-bold mb-5 border-b-[5px] w-[180px] border-indigo-600 pb-2">About ME</h2>

<p className="pb-5">
          <br></br>I am a proficient Full Stack Developer with a strong focus "A results-oriented Full Stack Developer with 3 years of industry experience and 4 years of freelancing expertise. Skilled in a variety of technologies including WordPress, PHP, Laravel, and the MERN stack. Seeking a remote role to contribute innovative solutions and deliver top-quality projects.". I have demonstrated exceptional leadership capabilities while overseeing and directing media operations in North America and the APAC region. I have a proven track record of enhancing team performance, fostering customer loyalty, and cultivating 
          collaborative alliances with 
    
</p>


 </div>
<div className="about-img">
    <img src={AboutImg}
    alt="coding illustration"
    className="lgw-[80%] md:ml-auto"/>
</div>
            </div>
        </section>
    );
};

export default About;