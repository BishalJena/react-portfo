import './styles/Skills.css';

const Skills = () => {
  return (
    <section id="skills">
      <div className="skills-container">
        <h2>My Skills</h2>
        <p>
          I am continually enhancing my skill set and learning new things.
        </p>
        <div className="skills-grid">
          <div className="skills-column">
            <h4>Programming Languages</h4>
            <div className="skill-item">
              <span>Java</span>
              <div className="skill-stars">
                <span className="star">&#9733;</span>
                <span className="star">&#9733;</span>
                <span className="star">&#9733;</span>
                <span className="star">&#9733;</span>
                <span className="star">&#9734;</span>
              </div>
            </div>
            <div className="skill-item">
              <span>Python</span>
              <div className="skill-stars">
                <span className="star">&#9733;</span>
                <span className="star">&#9733;</span>
                <span className="star">&#9733;</span>
                <span className="star">&#9733;</span>
                <span className="star">&#9734;</span>
              </div>
            </div>
            <div className="skill-item">
              <span>JavaScript</span>
              <div className="skill-stars">
                <span className="star">&#9733;</span>
                <span className="star">&#9733;</span>
                <span className="star">&#9733;</span>
                <span className="star">&#9734;</span>
                <span className="star">&#9734;</span>
              </div>
            </div>
          </div>
          <div className="skills-column">
            <h4>Frameworks & Libraries</h4>
            <div className="skill-item">
              <span>React</span>
              <div className="skill-stars">
                <span className="star">&#9733;</span>
                <span className="star">&#9733;</span>
                <span className="star">&#9733;</span>
                <span className="star">&#9734;</span>
                <span className="star">&#9734;</span>
              </div>
            </div>
            <div className="skill-item">
              <span>Django</span>
              <div className="skill-stars">
                <span className="star">&#9733;</span>
                <span className="star">&#9733;</span>
                <span className="star">&#9733;</span>
                <span className="star">&#9733;</span>
                <span className="star">&#9734;</span>
              </div>
            </div>
            <div className="skill-item">
              <span>Node.js</span>
              <div className="skill-stars">
                <span className="star">&#9733;</span>
                <span className="star">&#9733;</span>
                <span className="star">&#9733;</span>
                <span className="star">&#9734;</span>
                <span className="star">&#9734;</span>
              </div>
            </div>
          </div>
          <div className="skills-column">
            <h4>Soft Skills</h4>
            <div className="skill-item">
              <span>Problem-Solving</span>
              <div className="skill-stars">
                <span className="star">&#9733;</span>
                <span className="star">&#9733;</span>
                <span className="star">&#9733;</span>
                <span className="star">&#9733;</span>
                <span className="star">&#9734;</span>
              </div>
            </div>
            <div className="skill-item">
              <span>Communication</span>
              <div className="skill-stars">
                <span className="star">&#9733;</span>
                <span className="star">&#9733;</span>
                <span className="star">&#9733;</span>
                <span className="star">&#9733;</span>
                <span className="star">&#9734;</span>
              </div>
            </div>
            <div className="skill-item">
              <span>Collaboration</span>
              <div className="skill-stars">
                <span className="star">&#9733;</span>
                <span className="star">&#9733;</span>
                <span className="star">&#9733;</span>
                <span className="star">&#9733;</span>
                <span className="star">&#9734;</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
