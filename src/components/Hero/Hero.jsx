import React from 'react';
import './Hero.css';

const Hero =() => {
    return (
        <section id="hero-section"  className="hero-wrapper">
           <div className="paddings innerWidth flexCenter hero-container">
               {/* left side */}
               <div className="flexColStart hero-left">
                   <div className="hero-title">
                       <div className="orange-circle"/>
                       <h1>
                           Historical Sites
                        </h1>
                   </div>

                   <div className="flexColStart hero-des">
                       <span className="secondaryText">"Each historical site stands as a living witness to the stories of 
                       those who came before us, reminding us of the threads that connect our past, present, and future."</span>
                       <span className="secondaryText"><i>~ Rabindranath Tagore</i></span>
                   </div>
  
               </div>
                {/* right side */}
               <div className="flexCenter hero-right">
                   <div className="image-container">
                       <img src="./content-historical-sites-hero-img.jpg" alt=" "/>
                   </div>
               </div>
            
            </div> 

        </section>
    )
}

export default Hero