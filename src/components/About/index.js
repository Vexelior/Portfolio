import { useEffect, useState } from 'react'
import {
  faReact,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faJava,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import Spinner from 'react-loader-spinner'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'M', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I'm very ambitious software developer looking for a role in
            established IT company with the opportunity to work with the latest
            technologies on challenging and diverse projects.
          </p>
          <p align="LEFT">
            I am a graduate of The Tech Academy where I studied full stack development consisting of HTML, CSS, JavaScript, SQL, C#, and worked on many aspects of programming with Java as well.
          </p>
          <p>
            Technology has always been a passion of mine and it applies to my daily life. I thrive in putting my all into my work and then some. Please, feel free to contact me. I am always looking for new opportunities and knowledge to learn and share.
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faReact} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
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
