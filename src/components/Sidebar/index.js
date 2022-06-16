import './index.scss'
import LogoS from '../../assets/img/Logo2.png'
import LogoSubtitle from '../../assets/img/Logo2-Nancy.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLinkedin,
  faGithub
} from '@fortawesome/free-brands-svg-icons'
import { faHome, faEye, faEnvelope, faSuitcase, faGear, faBookOpenReader } from '@fortawesome/free-solid-svg-icons'
import { Link, NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className="nav-bar">
      <Link className="logo" to="/">
        <img className="sub-logo" src={LogoS} alt="Logo" />
        {/* <FontAwesomeIcon icon={ faN } /> */}
        <img className="logo-head" src={LogoSubtitle} alt="Nancy" />
      </Link>
      <nav>
        <NavLink exact="true" activeclassname="active" to="/">
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>
        <NavLink
          activeclassname="active" className="skills-link" to="/skills">
          <FontAwesomeIcon icon={ faGear } color="#4d4d4e"/>
        </NavLink>
        <NavLink
          activeclassname="active" className="education-link" to="/education">
          <FontAwesomeIcon icon={ faBookOpenReader } color="#4d4d4e"/>
        </NavLink>
        <NavLink activeclassname="active" className="exp-link" to="/exp">
          <FontAwesomeIcon icon={ faEye } color="#4d4d4e" />
        </NavLink>
        <NavLink activeclassname="active" className="project-link" to="/projects">
          <FontAwesomeIcon icon={faSuitcase} color="#4d4d4e" />
        </NavLink>
        <NavLink
          activeclassname="active" className="contact-link" to="/contact">
          <FontAwesomeIcon icon={faEnvelope } color="#4d4d4e" />
        </NavLink>
      </nav>
      <ul>
        <li>
          <a
            href="https://www.linkedin.com/in/nancy-/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/nancy0119"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar