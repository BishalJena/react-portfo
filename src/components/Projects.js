import React from 'react';
import './styles/Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'Image Editor',
      description: 'As given an assignment, I had built Image Editor in second trimester of college.',
      skills: ['Java'],
    },
    {
      title: 'Data Analysis Projects',
      description: 'As a part of project assignment I have done the project',
      skills: ['Pandas', 'Numpy', 'Matplotlib'],
    },
    {
      title: 'Price Comparing Scrapper',
      description: 'Built a web scrapper to scrape the data from flipkart and amazon and show the prices in ascending order.',
      skills: ['Python', 'Beautiful Soup'],
    },
    {
      title: 'Hotel Booking Backend',
      description: 'Built Hotel booking backend as part of the assignment',
      skills: [ 'Java', 'SpringBoot'],
    },
  ];

  return (
    <section id="projects">
      <div className="projects-container">
        <h2>My Projects</h2>
        <p>Explore a selection of my recent work.</p>
        <div className="project-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="skills-used">
                <ul>
                  {project.skills.map((skill, skillIndex) => (
                    <li key={skillIndex}>{skill}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;