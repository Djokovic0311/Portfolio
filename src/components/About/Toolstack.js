import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiLinux,
  SiVisualstudiocode,
  SiPostman,
  SiGitlab,
  SiVercel,
  // SiRocksdb,
  SiApacheflink,
  SiEtcd,
} from "react-icons/si";
import {
  DiGit,
  DiDocker,
  DiAndroid,
  DiRedis,
} from "react-icons/di";
import {
  FaAws,
} from "react-icons/fa"
function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiLinux />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiDocker />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGitlab />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaAws />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiAndroid />
      </Col>
      {/* <Col xs={4} md={2} className="tech-icons">
        <SiRocksdb />
      </Col> */}
      <Col xs={4} md={2} className="tech-icons">
        <SiApacheflink />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiEtcd />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiRedis />
      </Col>
    </Row>
  );
}

export default Toolstack;
