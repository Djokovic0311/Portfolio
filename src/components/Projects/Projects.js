import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import AAAI from "../../Assets/Projects/AAAI.png";
import fans from "../../Assets/Projects/fans.jpg";
import WSDM from "../../Assets/Projects/WSDM.png";
import bank from "../../Assets/Projects/bank.jfif";
import NEMU from "../../Assets/Projects/NEMU.jpg";

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
              imgPath={bank}
              isPaper={false}
              title="Banker Dream"
              description="Bank system for bankers and customers with OOP design pattern. Front-end with Swing, and database supported by MySQL. 
              The system allows banker to view bank businesses as well as customers to make transactions."
              ghLink="https://github.com/Djokovic0311/Final-Project-ATM"
              demoLink="https://youtu.be/2_WRzGyIkRw"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fans}
              isPaper={false}
              title="Crazy Fans"
              description="J2EE lightweight framework + jQuery + MySQL + jsp + servlet to complete the fan base management system based on the local server, simulating the function of microblog super chat, and managing the fan group hierarchically"
              ghLink="https://github.com/Djokovic0311/fans_manage"
              demoLink=""
            />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={NEMU}
              isPaper={false}
              title="NEMU"
              description="A simple but complete full-system emulator for teaching purpose. The main features of NEMU include a small monitor with a simple debugger,
              CPU core with support of most common used instructions, memory, paging and interrupt and exception."
              ghLink="https://github.com/Djokovic0311/NJU_ICS-FDUversion"
              demoLink=""
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
              paperLink=""
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
