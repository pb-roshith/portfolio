import React, { useContext } from 'react'
import { SkillContext } from '../context/skillcontext'
import { Row, Col, Container } from "react-bootstrap";
import { FaCode } from "react-icons/fa";

const Skills = () => {

    const skill = useContext(SkillContext);

  return (
    <div id='skills' style={{
        backgroundImage:'url("https://res.cloudinary.com/dlnrtg1q3/image/upload/v1712672588/2000px-Color_icon_yellow.svg_g657jo.png")',
        backgroundPosition:'center',
        backgroundRepeat:'no-repeat',
        backgroundSize:'cover',
        backgroundAttachment:'fixed'
        }}>
        <Container>
        <h1 style={{ color: 'black', paddingLeft: '40px', paddingTop: '20px', paddingBottom:'20px' }}>Skills <FaCode /></h1>
            <Row>
                {skill.map((i) => {
                    return(
                        <Col style={{marginBottom:'20px'}} xs={6} sm={6} md={3}>
                            <div>
                                <img style={{height:'100px', width:'100px'}} src={i.im} alt="" />
                                <hr />
                                <p style={{fontWeight:'bold'}} className='text-center'>{i.name}</p>
                            </div>
                        </Col>
                    )
                })}
            </Row>
        </Container>
    </div>
  )
}

export default Skills