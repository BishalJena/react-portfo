import React from 'react';
import Typewriter from 'typewriter-effect';
import './styles/Home.css';
import image from './styles/assests/logo.jpeg';
function Home() {
  return (
    <section id='home'>
      <div className="home-container">
      <div className="leftside">
        <h1>Hey, Bishal this side</h1>
        <h3>
          <Typewriter
            options={{
              strings: [
                'I am a tech geek',
                'I am a software developer',
                'I am a drone enthusiast',
              ],
              autoStart: true,
              loop: true,
              delay: 50,
              deleteSpeed: 50,
            }}
          />
        </h3>
        <p> Hello! I am Bishal, freshman at Scaler School of Technology. Working on DSA, webdev, ML projects and learning. </p>
        <a href="https://www.linkedin.com/in/bishal-jena-99a35927b/">Connect with me</a>
      </div>

      <div className="rightside">
        <img src={image} alt="image"/>
      </div>
    </div>
    </section>
  );
}

export default Home;