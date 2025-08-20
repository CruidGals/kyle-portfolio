import { faBootstrap, faFlutter, faGithub, faNodeJs, faPython, faReact, type IconDefinition } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { ReactNode } from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import { FadeUpDiv, FadeUpH1 } from "./components/Constants";

type link = { icon: IconDefinition; link: string }

type ProjectCardProps = {
  title: string;
  icons: IconDefinition[];
  links: link[];
  className?: string;
  children?: ReactNode;
}

// Split projects into two columns

const projects_1 = [
  { id: 1, 
    title: 'MacroMate', 
    icons: [faFlutter],
    links: [ {icon: faGithub, link: 'https://github.com/dumrich/MacroMate'} ],
    children: <Card.Text><p><strong>Won 2nd place in HackPSU Fall 2024.</strong></p><p>Built using Flutter & OpenAI, Macromate helps you reach your weight goals by giving a personalized meal plan based on the Penn State Dining Hall menus and your biometrics.</p></Card.Text> },
  { id: 3, 
    title: 'AI Art Sketcher', 
    icons: [faReact, faBootstrap, faNodeJs],
    links: [ {icon: faGithub, link: 'https://github.com/CruidGals/ai-art-sketcher'} ],
    children: <Card.Text>Website built using Bootstrap CSS, Node.js, and Draw.js that assists sketching with AI. Leverages <strong>SketchRNN</strong> to help flesh out you sketches on the HTML canvas. Once you are done with the sketch, the website uses <strong>Replicate API</strong> to send the completed sketch through an image generation pipeline that completes the image for you.</Card.Text>}
]

const projects_2 = [
  { id: 2, 
    title: 'Tetris DQN', 
    icons: [faPython],
    links: [ {icon: faGithub, link: 'https://github.com/CruidGals/tetris-dqn'} ],
    children: <Card.Text>Ongoing project trying to enable computers to learn the classic game Tetris using <strong>deep Q Learning</strong>. Used key strategies like <strong>performance-based epsilon decay</strong> and <strong>prioritized experience replay</strong> to stabilize training, and leveraged <strong>TensorBoard</strong> to catch any instability in the network.</Card.Text>},
  { id: 4, 
    title: 'Personal Website', 
    icons: [faReact, faBootstrap],
    links: [ {icon: faGithub, link: 'https://github.com/CruidGals'} ],
    children: <Card.Text>Personal website built with React and Bootstrap. Began this website with virtually no React.js knowledge, left this website with slightly more React.js knowledge.</Card.Text> }
]

const ProjectCard = ( { title, icons, links, className, children }: ProjectCardProps ) => {
  return (  
    <FadeUpDiv className={className}>
      <Card className="project-card rounded-4">
        <Card.Header as="h3" className="bg-white rounded-top-4 m-1">{title}</Card.Header>
        <Card.Body>
          {children}
        </Card.Body>
        <Card.Footer className="d-flex justify-content-between">
          <div className="d-flex gap-2">
            {icons.map( (icon) => (
              <FontAwesomeIcon icon={icon} size="2x"/>
            ))}
          </div>
          
          <div className="d-flex gap-2">
            {links.map( (link) => (
              <a href={link.link} className="social-icon"><FontAwesomeIcon icon={link.icon} size="2x"/></a>
            ))}
          </div>
        </Card.Footer>
      </Card>
    </FadeUpDiv>
  )
}

const Projects = () => {
  return (
    <section id="project" className="p-5 d-flex flex-column justify-content-center align-items-center">
      
      <FadeUpH1 className="section-title">PROJECTS</FadeUpH1>

      <Container>
        <Row>
          <Col xs={12} md={6} className="p-3">
            {projects_1.map( ( project) => (
              <ProjectCard title={project.title} icons={project.icons} links={project.links} className="pb-4">
                {project.children}
              </ProjectCard>
            ))}
          </Col>
          <Col xs={12} md={6} className="p-3">
            {projects_2.map( ( project) => (
              <ProjectCard title={project.title} icons={project.icons} links={project.links} className="pb-4">
                {project.children}
              </ProjectCard>
            ))}
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Projects