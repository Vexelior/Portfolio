import { useEffect, useState } from 'react'
import {
  faReact,
  faGitAlt,
  faJsSquare,
  faJava,
  faPython,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'
import { faCode } from '@fortawesome/free-solid-svg-icons'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="myContainer about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't']}
              idx={15}
            />
          </h1>
          <p>
            I am a very ambitious software developer looking for a role in a well
            established IT company with the opportunity to work with the latest
            technologies on challenging and diverse projects.
          </p>
          <p>
            I am a graduate of The Tech Academy where I studied Full Stack Development and Cyber Security consisting of HTML, CSS, JavaScript, SQL, C#, Java, Front-End Development, Back-End Development, and Network Security. 
          </p>
          <p>
            Technology has always been a passion of mine and it applies to my daily life. I thrive in putting my all into my work and creating a product I can be proud of. Please, feel free to contact me. I am always looking for new opportunities and knowledge to both learn and share with others.
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faReact} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faPython} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCode} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faJava} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="line-scale-pulse-out" />
    </>
  )
}

export default About
