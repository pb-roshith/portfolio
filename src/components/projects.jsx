import React, { useContext } from "react";
import { ProjectContext } from "../context/projectcontext";
import { Row, Col, Container } from "react-bootstrap";
import Projectcard from "./projectcard";
import { GiUnstableProjectile } from "react-icons/gi";

const Projects = () => {
  const project = useContext(ProjectContext);
  

  return (
    <>
    <div id='projects' style={{ position: 'relative' }}>
  <video autoPlay muted loop style={{ position: 'absolute', width: '100%', height: '100%', objectFit: 'cover', zIndex: '-1' }} playbackRate={5}>
    <source src="https://res.cloudinary.com/dlnrtg1q3/video/upload/v1700642063/timeline/pexels_videos_4482_2160p_w5v3kt.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>

  <Container>
    <h1 style={{ color: '#FFEA00', paddingLeft: '40px', paddingTop: '20px' }}>Projects <GiUnstableProjectile /></h1>
    <Row>
      {project.map((i) => {
        return (
          <Col xs={6} sm={6} md={6} lg={3}>
            <Projectcard key={i.id} im={i.im} name={i.name} description={i.description}></Projectcard>
          </Col>
        );
      })}
    </Row>
  </Container>
</div>



      
    </>
  );
};

export default Projects;
