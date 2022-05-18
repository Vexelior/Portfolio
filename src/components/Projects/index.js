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

  const projects = [
  {
    name: 'Simon Says',
    description: 'Simon Says game built with HTML, CSS, jQuery, & Vanilla JavaScript.',
    link: 'https://www.alexsandersontech.com/Simon-Says/',
    github: 'https://github.com/Vexelior/Simon-Says'
  },
  {
    name: 'Tic Tac Toe',
    description: 'Tic Tac Toe game built with HTML, CSS, & JavaScript.',
    link: 'https://www.alexsandersontech.com/Tic-Tac-Toe/',
    github: 'https://github.com/Vexelior/Tic-Tac-Toe'
  },
  {
    name: 'Block Destroyer',
    description: 'Block Destroyer game built with HTML, CSS, & JavaScript.',
    link: 'https://www.alexsandersontech.com/Pong-Game/',
    github: 'https://github.com/Vexelior/Pong-Game'
  },
  {
    name: 'Weather App',
    description: 'Weather app built with HTML, CSS, JavaScript, & APIs.',
    link: 'https://www.alexsandersontech.com/Weather-API/',
    github: 'https://github.com/Vexelior/Weather-API'
  },
  {
    name: 'Calculator',
    description: 'A calculator built with HTML, CSS, & JavaScript.',
    link: 'https://www.alexsandersontech.com/Web-Calculator/',
    github: 'https://github.com/Vexelior/Web-Calculator/'
  },
  {
    name: 'Cowboy Bebop Fansite',
    description: 'A mock simple fansite for the popular anime Cowboy Bebop.',
    link: 'https://www.alexsandersontech.com/Cowboy-Bebop-Site/',
    github: 'https://github.com/Vexelior/Cowboy-Bebop-Site'
  }
];

  return (
    <>
      <div className='myContainer projects-page'>
        <div className='text-zone'>
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['P', 'r', 'o', 'j', 'e', 'c', 't', 's', '.']}
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
            <div className='accordion accordion-flush accordion-content accordion-content.in' key={idx}>
              <div className='card color-change'>
                <div className='card-header' id={`heading${idx}`}>
                  <h2 className='mb-2'>
                    {project.name}
                  </h2>
                  <div id='project-description'>
                    <p>{project.description}</p>
                  </div>
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
          ))}
        </div>
      </div>
      <Loader type='line-scale-pulse-out' />
    </>
  )
}

export default Projects;
