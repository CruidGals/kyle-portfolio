import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { FadeUpDiv, FadeUpH1 } from './components/Constants'

const Home = () => {
  return (
    <section id="home">
        <div className="d-flex flex-column flex-lg-column flex-md-row justify-content-around align-items-center pb-0 pb-sm-5 gap-3 gap-md-0">
            <FadeUpH1 className="text-center section-header">
                KYLE CHIEM
            </FadeUpH1>
            <FadeUpDiv className="d-flex flex-column justify-content-center align-items-center">
                <div className="d-flex flex-column flex-lg-row justify-content-center gap-3 gap-lg-0">
                    <p className="subheading">Software Engineer</p>
                    <p className="subheading">Computer Vision Researcher @ LPAC</p>
                    <p className="subheading">Schreyer Honors Scholar</p>
                </div>

                <div className="mt-3 d-flex justify-content-start gap-4">
                    <a href="https://github.com/CruidGals" className="social-icon"><FontAwesomeIcon icon={faGithub} size="2x"/></a>
                    <a href="https://www.linkedin.com/in/kyle-chiem/" className="social-icon"><FontAwesomeIcon icon={faLinkedin} size="2x"/></a>
                    <a href="mailto:kyle.chiem@outlook.com" className="social-icon"><FontAwesomeIcon icon={faEnvelope} size="2x"/></a>
                </div>
            </FadeUpDiv>

        </div>

    </section>
  );
}

export default Home