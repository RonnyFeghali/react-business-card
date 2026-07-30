// Import profile image
import profileImage from '../assets/profile.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

export default function Info() {
    return (
        <>
            <section className="info-section">
                <img src={profileImage} alt="Profile image of Ronny" className="profile-image" />
                <h2 className="name">Ronny Feghali</h2>
                <h3 className="role">Frontend Developer</h3>
                <a href="https://ronnyfeghali-blog.netlify.app/" className="website">ronnyfeghali.blog</a>

                <div className="info-buttons-container">
                    <a href="mailto:ronnyfeghali@outlook.com" className="email-btn btn">
                        <FontAwesomeIcon icon={faEnvelope} className='email-icon' />
                        Email
                    </a>
                    <a href="https://www.linkedin.com/in/ronny-feghali-787860374/" className="linkedin-btn btn" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faLinkedin} className='linkedin-icon' />
                        LinkedIn
                    </a>
                </div>
            </section>
        </>
    )
}