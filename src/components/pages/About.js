import React from 'react'
import { softSkills,techSkills } from './Data'
import Resume from './Karthika_Selvam_Resume.pdf'
const About = () => {
    return (
        <div id="about">
           
            <div className="title">
                <p>About</p>
            </div>
            <div className="content">
                <div className="profile-pic">
                    <img src="assets/avatar.png" alt="" />
                    <a href={Resume} download="Karthika-Selvam-resume" target='_blank' rel="noreferrer" >
                        <button className='btn'>Resume <i className="fa-solid fa-download"></i> </button>
                    </a>
                </div>
                <div className="profile-text">
                    <p>I am Karthika. I am a web developer and digital artist based in Chennai, India.
I am also a computer science engineering graduate of batch 2021.</p>
                    <p>I really like building responsive,interactive and colorful websites and looking forward to work in a professional setting and learn more from there.</p>
                    
                    <div className='skills'>
                        <div className='soft-skills'>
                            <h3>Soft Skills</h3>
                            {softSkills.map((skill) =>
    
                            <li key={skill.id}><i className={`${skill.icon}`}></i>{skill.skill}</li>

                            )}

                        </div>
                        <div className='tech-skills'>
                            <h3>Tech Skills</h3>
                            {techSkills.map((skill) =>
    
                            <li key={skill.id}><i className={`${skill.icon}`}></i>{skill.skill}</li>

                            )}

                        </div>
                    </div>
                </div>
                
            </div>
            
        </div>
    )
}

export default About
