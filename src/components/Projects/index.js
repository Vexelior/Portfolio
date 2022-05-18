import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faGlobe} from '@fortawesome/free-solid-svg-icons'

const Projects = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  // Project details array
  const projects = [
    {
    name: 'Simon Says',
    description: 'A simple Simon Says game built with HTML, CSS, & JavaScript.',
    link: 'https://www.alexsandersontech.com/Simon-Says/',
    github: 'https://github.com/Vexelior/Simon-Says'
  },
  {
    name: 'Tic Tac Toe',
    description: 'A simple Tic Tac Toe game built with HTML, CSS, & JavaScript.',
    link: 'https://www.alexsandersontech.com/Tic-Tac-Toe/',
    github: 'https://github.com/Vexelior/Tic-Tac-Toe'
  },
  {
    name: 'Pong',
    description: 'A simple Pong game built with HTML, CSS, & JavaScript.',
    link: 'https://www.alexsandersontech.com/Pong/',
    github: 'https://github.com/Vexelior/Pong-Game'
  },
  {
    name: 'Weather App',
    description: 'A simple weather app built with HTML, CSS, & JavaScript.',
    link: 'https://www.alexsandersontech.com/Weather-API/',
    github: 'https://github.com/Vexelior/Weather-API'
  },
  {
    name: 'Calculator',
    description: 'A simple calculator built with HTML, CSS, & JavaScript.',
    link: 'https://www.alexsandersontech.com/Web-Calculator/',
    github: 'https://github.com/Vexelior/Web-Calculator/'
  },
  {
    name: 'Cowboy Bebop Fansite',
    description: 'A simple fansite for the popular anime Cowboy Bebop.',
    link: 'https://www.alexsandersontech.com/Cowboy-Bebop-Site/',
    github: 'https://github.com/Vexelior/Cowboy-Bebop-Site'
  }
];

  return (
    <>
      <div className='myContainer about-page'>
        <div className='text-zone'>
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['P', 'r', 'o', 'j', 'e', 'c', 't', 's']}
              idx={15}
            />
          </h1>
            <p>
                I have a passion for creating and designing beautiful, functional websites and software. I have a background in web development, and I am always looking for new projects to work on.
            </p>
            <p>
                To the right you can find some of my projects and some of my work.
            </p>
        </div>
        <div className='projects-container'>
          {projects.map((project, idx) => (
          <div className='accordion accordion-flush' id='accordionId' key={idx}>
            <div className='accordion-item'>
              <h2 className='accordion-header' id='accordionHeading'>
                <button className='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target='accordionId' aria-expanded='false' aria-controls='collapseContent'>
                  {project.name}
                </button>
              </h2>
              <div id='collapseContent' className='accordion-collapse collapse' aria-labelledby='accordionHeading' data-bs-parent='accordionId'>
                <div className='accordion-body'>
                  <p>{project.description}</p>
                    <div className='project-links'>
                      <a href={project.link} target='_blank' rel='noopener noreferrer'>
                        <FontAwesomeIcon icon={faGlobe} />
                      </a>
                      <a href={project.github} target='_blank' rel='noopener noreferrer'>
                        <FontAwesomeIcon icon={faGithub} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
    </div>
      <Loader type='line-scale-pulse-out' />
    </>
  )
}

export default Projects;
