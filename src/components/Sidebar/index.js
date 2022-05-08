import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faHome, faUser, faEnvelope, faCopy, faPuzzlePiece } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom'
import Resume from '../../assets/documents/Resume.pdf'

const Sidebar = () => {
  return (
    <div className="nav-bar">
      <nav>
        <NavLink exact="true" activeclassname="active" to="/">
          <FontAwesomeIcon icon={faHome} />
        </NavLink>
        <NavLink activeclassname="active" className="about-link" to="/about">
          <FontAwesomeIcon icon={faUser} />
        </NavLink>
        <NavLink activeclassname="active" className="projects-link" to="/projects">
          <FontAwesomeIcon icon={faPuzzlePiece} />
        </NavLink>
        <NavLink activeclassname="active" className="contact-link" to="/contact">
          <FontAwesomeIcon icon={faEnvelope} />
        </NavLink>
        <NavLink activeclassname="active" className="resume-link" to={Resume} target="_blank" download>
          <FontAwesomeIcon icon={faCopy}  />
        </NavLink>
      </nav>
      <ul>
        <li>
          <a
            className='linkedin-link'
            href="https://www.linkedin.com/in/asanderson94/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </li>
        <li>
          <a
            className='github-link'
            href="https://github.com/Vexelior"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar
