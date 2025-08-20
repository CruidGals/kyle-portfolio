import { Button, Col, Container, Image, Row } from "react-bootstrap";
import { FadeUpDiv, FadeUpH1, FadeUpH2, FadeUpLi, FadeUpP, FadeUpA } from "./components/Constants";

const About = () => {
  return (
    <section id="about" className="p-5 d-flex flex-column justify-content-center align-items-center">

        <FadeUpH1 className="section-title">ABOUT</FadeUpH1>

        <Container>
            <Row className="d-flex justify-content-between align-items-center">
                <Col md={6}>
                    <div className="d-flex flex-column">
                        <FadeUpH2 className="about-me-title align-self-center align-self-md-start"><em>I am a... </em></FadeUpH2>
                        <ul className="about-me-facts align-self-center align-self-md-start">
                            <FadeUpLi>Schreyer Honors College Scholar</FadeUpLi>
                            <FadeUpLi>Machine Learning & Robotics Junkie</FadeUpLi>
                            <FadeUpLi>Basketball Enthusiast</FadeUpLi>
                            <FadeUpLi>Rubik's Cube Speed-solver</FadeUpLi>
                        </ul>
                        <hr />
                        <FadeUpP className="align-self-center align-self-md-start">Aside from those quick facts, I am a <strong>natural leader</strong> striving to advance our world into the <strong>Sci-Fi realm.</strong> Perfecting humanoid robot interaction and computer vision tasks are my main interests, but any machine learning and software engineering work excites me. Check out my resumé below:</FadeUpP>
                        <FadeUpA href="/kylechiem_8_2025_2027_full.pdf">
                            <Button className="w-100">
                                <h2>Resume [PDF]</h2>
                            </Button>
                        </FadeUpA>
                    </div>
                </Col>
                <Col md={6} className="p-5">
                    <FadeUpDiv>
                        <Image src="/about_pic.jpg" fluid />
                    </FadeUpDiv>
                </Col>
            </Row>
        </Container>
    </section>
  );
}

export default About