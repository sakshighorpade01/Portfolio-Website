import React from 'react';
import './Hero.css'
// import profile_img from '../../assets/profile_img.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll';
import myprofile from '../../assets/myprofile.png'


const Hero = () => {
  return (
    <div id='home' className='hero'>
        <img  src={myprofile} alt="" />
        <h1><span>I'm Sakshi Ghorpade,</span>Web Developer in Pune</h1>
        <p>I am web developer from Pune , Maharashtra</p>
        <div className="hero-action">
            <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
            <div className="hero-resume">My resume</div>
        </div>
    </div>
  );
};

export default Hero;
