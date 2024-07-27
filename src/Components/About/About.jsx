import React from "react";
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
// import profile_img from '../../assets/about_profile.svg'
import myprofile from '../../assets/myprofile.png'

const About = () =>{
    return (
        <div id="about" className="about">
            <div className="about-title">
                <h1>About me</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="about-sections">
                <div className="about-left">
                    <img src={myprofile} alt="" />
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p>I am a Web Developer with some experience</p>
                        <p>My passion for Web development is not only for job purpose but i enjoy a lot from this professional field</p>
                    </div>
                    <div className="about-skills">
                        <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"50%"}}/></div>
                        <div className="about-skill"><p>Javascript</p><hr style={{width:"60%"}}/></div>
                        <div className="about-skill"><p>React JS</p><hr style={{width:"70%"}}/></div>
                        <div className="about-skill"><p>Python</p><hr style={{width:"50%"}}/></div>
                    </div>
                </div>
            </div>
            {/* <div className="about-achievements">
                <div className="about-achievement">
                    <h1>10+</h1>
                    <p>YEARS OF EXPERIENCE</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1>90+</h1>
                    <p>PROJECTS COMPLETED</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1>15+</h1>
                    <p>HAPPY CLIENTS</p>
                </div>
            </div> */}
        </div>
    )
}

export default About