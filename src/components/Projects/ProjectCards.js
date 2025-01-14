import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

import {
  SiGooglescholar,
} from "react-icons/si";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" width={500} height={300}/>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        {props.paperLink && (
        <Button variant="primary" href={props.paperLink} target="_blank">
        <SiGooglescholar /> &nbsp;
        {props.isPaper ? "Paper" : "GitHub"}
        </Button>
        )}
        {props.ghLink && (
        <Button variant="primary" href={props.ghLink} target="_blank">
        <BsGithub /> &nbsp;
        {props.isPaper ? "Paper" : "GitHub"}
        </Button>
        )}

        {"\n"}
        {"\n"}

        {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}

        {props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp;
            {"Demo"}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
