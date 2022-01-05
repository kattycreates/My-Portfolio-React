import React from 'react'
import { FaHtml5 } from "react-icons/fa";
import {FaCss3} from "react-icons/fa";
import {FaJs} from "react-icons/fa";
import {FaReact} from "react-icons/fa";
import {FaGit} from "react-icons/fa";

const Skills = () => {
    return (
        <div id="skills">
            <div className="content">
                <div className="title">
                    <p>Skills</p>
                </div>
                <div className="techskills">
                    <div className="skill" id="html">
                        <FaHtml5 />
                        <p>HTML</p>
                        
                    </div>
                    <div className="skill" id="css">
                        <FaCss3 />
                        <p>CSS</p>
                        
                    </div>
                    <div className="skill" id="js">
                        <FaJs />
                        <p>JavaScript</p>
                       
                    </div>
                    <div className="skill" id="react">
                        <FaReact />
                        <p>React</p>
                       
                    </div>
                    <div className="skill" id="git">
                        <FaGit />
                        <p>Git</p>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills
