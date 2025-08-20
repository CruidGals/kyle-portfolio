
import { Container, Row } from "react-bootstrap"
import { FadeUpH1, FadeUpUl } from "./components/Constants";

const experiences = [
  { id: 1, 
    title: 'The Pennsylvania State University', 
    subtitle: 'Research Intern - Robotics & Deep Learning | May 2025 - Present',
    points: [
      "Built convolutional and reinforcement learning models to predict humanoid robot stability with computer vision.",
      "Executed 4000+ parallel simulations on Isaac Lab to train a locomotion controller for various humanoid robots.",
      "Collected simulated IMU and ego-centric camera data and trained critic functions for stability score prediction.",
      "Integrated domain randomization to create a robust framework capable of in-person deployment (Sim-To-Real)."
    ]},
  { id: 2, 
    title: 'Laboratory for Perception, Action, and Cognition', 
    subtitle: 'Undergraduate Researcher | February 2025 - Present',
    points: [
      "Procured over 1.3 million frames of human motion capture (MoCap) data using Vicon Motion Capture tools",
      "Contributed in developing a transformer, achieving SOTA performance in foot pressure prediction and setting a new benchmark of 15.95 mm mean error in center-of-mass estimation with movement video as input.",
      "Optimized neural network through hyperparameter tuning with Optuna, improving prediction performance by 13%"
    ]},
  { id: 3,
    title: 'Nittany AI Alliance Student Chapter',
    subtitle: 'Machine Learning Apprentice | January 2025 - May 2025',
    points: [
      "Designed a RAG Chatbot using Sentence Transformers and Tiny LLaMa LLM for finance-related Q&A over PDFs.",
      "Preprocessed 100,000+ NIH Chest X-ray data to train a CNN to detect pneumonia patients at an accuracy of 92%.",
      "Explored overfitting control, RL reward shaping, and model evaluation with precision and confusion matrix analysis."
    ]},
  { id: 4, 
    title: 'Temple University', 
    subtitle: 'Summer Research Assistant | June 2023 - August 2023',
    points: [
      "Researched Graph Neural Networks to boost node connection prediction accuracy by 10% under Dr. Hongchang Gao.",
      "Utilized the PyTorch API on Google Colab to implement and tune optimized neural networks"
    ]},
];

const Experience = () => {
  return (
    <section id="experience" className="p-5 d-flex flex-column justify-content-center align-items-center">

      <FadeUpH1 className="section-title">EXPERIENCE</FadeUpH1>

      <Container>
        <Row className="experience-list">
          <FadeUpUl className="timeline">
            {experiences.map( (experience) => (
                <li key={experience.id} className="d-flex">
                  <div className="experience-bullet d-flex align-items-center">
                    <div className="company-bullet-wrapper">
                      <div className="company-bullet"></div>
                    </div>
                      
                    <div className="d-flex flex-column">
                      <h2 className="experience-title">{experience.title}</h2>
                      <em className="experience-subtitle">{experience.subtitle}</em>
                      <ul className="experience-desc">
                        {experience.points?.map( ( point ) => (
                          <li>{point}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </li>
              ))}
          </FadeUpUl>
        </Row>
      </Container>
    </section>
  )
}

export default Experience