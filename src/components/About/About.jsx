import React from 'react'
import './about.css'
import { Col, Container, Row } from 'react-bootstrap'
import { FaBaseballBall } from "react-icons/fa";

const About = () => {
  return (
    <div className='about'>
        <Container>
            <Row>
                <Col lg={4}>
                    <div className="item">
                        <h5>Immediate Deployment</h5>
                        <p>Et vero eos et accusamus et 
                           iusto odio dignissimos</p>
                           <div className="ab_icon">
                           <FaBaseballBall />
                           </div>
                    </div>
                </Col>
                <Col lg={4}>
                    <div className="item">
                        <h5>Immediate Deployment</h5>
                        <p>Et vero eos et accusamus et 
                           iusto odio dignissimos</p>
                           <div className="ab_icon">
                           <FaBaseballBall />
                           </div>
                    </div>
                </Col>
                <Col lg={4}>
                    <div className="item">
                        <h5>Immediate Deployment</h5>
                        <p>Et vero eos et accusamus et 
                           iusto odio dignissimos</p>
                           <div className="ab_icon">
                           <FaBaseballBall />
                           </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default About