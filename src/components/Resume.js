import React from "react";
import resumeFile from "../assets/Mtech_CV.pdf";
import ResumeImage from "../assets/resume.png";

const ResumeSection = () => {
    return (
        <section id="resume" className="bg-blue text-white p-4">
            <h2 className="text-2xl font-bold mb-4">Resume</h2>
            <img src={ResumeImage} alt="My Resume" className="mb-4" />
            <p>You can view and download my resume below:</p>
            <a
                href={resumeFile}
                download="Mtech_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center bg-white text-blue font-bold py-2 px-4 rounded-lg shadow-md hover:bg-blue hover:text-white transition duration-300">
                Download Resume
            </a>
        </section>
    );
};

export default ResumeSection;
