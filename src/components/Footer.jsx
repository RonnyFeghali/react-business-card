import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faFacebook, faInstagram, faXTwitter } from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
    return (
        <footer className="footer-section">
            <a href="https://github.com/RonnyFeghali" target="_blank" rel="noreferrer" className="github-link">
                <FontAwesomeIcon icon={faGithub} className='github-icon social-icons' />
            </a>
            <FontAwesomeIcon icon={faFacebook} className="social-icons social-icons--inactive" />
            <FontAwesomeIcon icon={faInstagram} className="social-icons social-icons--inactive" />
        </footer>
    )
}