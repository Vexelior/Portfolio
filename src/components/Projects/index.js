import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { Card, Button } from 'react-bootstrap/'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'

const Projects = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  // Create projects array
  const projects = [
    {
      title: 'Project 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris euismod, nunc euismod euismod consectetur, nisi nunc lobortis nisl, euismod euismod nunc nisi euismod.',
      image: 'https://via.placeholder.com/300x200',
      link: '#'
    },
    {
      title: 'Project 2',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris euismod, nunc euismod euismod consectetur, nisi nunc lobortis nisl, euismod euismod nunc nisi euismod.',
      image: 'https://via.placeholder.com/300x200',
      link: '#'
    },
    {
      title: 'Project 3',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris euismod, nunc euismod euismod consectetur, nisi nunc lobortis nisl, euismod euismod nunc nisi euismod.',
      image: 'https://via.placeholder.com/300x200',
      link: '#'
    },
    {
      title: 'Project 4',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris euismod, nunc euismod euismod consectetur, nisi nunc lobortis nisl, euismod euismod nunc nisi euismod.',
      image: 'https://via.placeholder.com/300x200',
      link: '#'
    },
    {
      title: 'Project 5',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris euismod, nunc euismod euismod consectetur, nisi nunc lobortis nisl, euismod euismod nunc nisi euismod.',
      image: 'https://via.placeholder.com/300x200',
      link: '#'
    },
    {
      title: 'Project 6',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris euismod, nunc euismod euismod consectetur, nisi nunc lobortis nisl, euismod euismod nunc nisi euismod.',
      image: 'https://via.placeholder.com/300x200',
      link: '#'
    }
  ];



  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
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
        <div className="projects-container">
            <div className="projects-container-inner">
                {projects.map((project, idx) => {
                    return (
                      
                        <Card key={idx} className="project-card">
                            <Card.Img variant="top" src={project.image} />
                            <Card.Body>
                                <Card.Title>{project.title}</Card.Title>
                                <Card.Text>
                                    {project.description}
                                </Card.Text>
                                <Button variant="primary" href={project.link}>
                                    <FontAwesomeIcon icon="arrow-right" />
                                </Button>
                            </Card.Body>
                        </Card>
                    )
                })}
            </div>
        </div>
      </div>
      <Loader type="line-scale-pulse-out" />
    </>
  )
}

export default Projects;
