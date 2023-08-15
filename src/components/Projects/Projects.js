import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import AAAI from "../../Assets/Projects/AAAI.png";
import Streaming from "../../Assets/Projects/stream_processing_system.png";
import fans from "../../Assets/Projects/fans.jpg";
import WSDM from "../../Assets/Projects/WSDM.png";
import APP from "../../Assets/Projects/APP.jpg";
import GSoC from "../../Assets/Projects/GSoC.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are several projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={GSoC}
              isPaper={false}
              title="Google Summer of Code 2023"
              description="Enhance the functionality of cBioPortal by adding support for the analysis and visualization of categorical and binary data in Generic Assay format. This will allow users to perform Fisher's exact test for binary data and chi-square test for categorical data, and to view the results in a clear and easy-to-understand format."
              ghLink="https://github.com/Djokovic0311/google-summer-of-code-2023.git"
              demoLink="https://docs.google.com/presentation/d/1YxDsMfbIC53fxJ2rYBPFg5zUkeKINLUpEVk7Tf9N9lU/edit?usp=sharing"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={APP}
              isPaper={false}
              title="BU On the Go"
              description="We've launched a unified mobile app for our campus named bu on the go. This app encompasses a wide range of features including: 
              Detailed Scheduling, Task Ranking, Interactive Campus Maps, Classroom Interaction Tools, Study Group Coordination, and Chat Room capabilities."
              ghLink="https://github.com/Djokovic0311/bu-on-the-go"
              demoLink=""
            />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Streaming}
              isPaper={false}
              title="A Stream Processing System with State Disaggregation"
              description="We constructed a standalone control plane, which emphasized the separation of tasks and states. This led to an optimized state migration mechanism within Flink. To achieve this, we employed Java and gRPC, resulting in the development of a distributed event-driven framework. 
              Within this framework, the TaskManager is responsible for managing operators. The evaluations showed no system downtime during state migration, with only a 30% increase in latency."
              ghLink="https://github.com/Djokovic0311/Disaggregated-Streaming-System.git"
              demoLink="https://drive.google.com/file/d/1fG5Yl8mC4CsBSiW3WLtGBl965jnyThJr/view"
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={AAAI}
              isPaper={true}
              title="(AAAI2023) Competition or Cooperation? Exploring Unlabeled Data via Challenging Minimax
              Game for Semi-Supervised Relation Extraction"
              description="Existing Semi-Supervised Relation Extraction methods mainly suffer from semantic drift and insufficient supervision problems. However, the consensus of two dual modules for mutual enhancement greatly restricts the model from exploring diverse relation expressions in large amounts of unlabeled data.
              To tackle this problem, in this paper, we propose a novel competition-based method AdvSRE. Specifically, we set up a challenging minimax game on unlabeled data between two modules, Generator and Discriminator, and assign them with conflicting objectives.
              
              Experiment results on two benchmarks show new state-of-the-art performance over baselines, demonstrating the effectiveness of competition-based AdvSRE."
              paperLink="https://ojs.aaai.org/index.php/AAAI/article/view/26513"
              demoLink=""
            />
          </Col>
          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={WSDM}
              isPaper={true}
              title="(WSDM2022) A Sequence-to-Sequence Model for Large-scale Chinese Abbreviation Database Construction"
              description="Proposed to formalize the Chinese abbreviation prediction task as a sequence generation problem. 
              Designed a novel sequence-to-sequence model. Propose a multi-level 
              pre-trained model that incorporates character, word, and concept-level embeddings to boost the performance of our deep model. Built a new dataset containing 81,351 pairs of full forms and abbreviations for 
              Chinese abbreviation prediction automatically. 
              Released API for demo, feel free to try!"
              paperLink="https://dl.acm.org/doi/abs/10.1145/3488560.3498430"
              demoLink="http://kw.fudan.edu.cn/ddemos/abbr/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
