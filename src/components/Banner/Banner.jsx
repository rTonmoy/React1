import React from 'react'
import './banner.css'
import { Col, Container, Row } from 'react-bootstrap'
import banner from "../../assets/banner.png"
import { FaRegBell } from "react-icons/fa6";

const Banner = () => {
  return (
    <div className='banner'>
        <Container>
            <Row>
                <Col lg={7}>
                    <div className="bann_left">
                    <div className="ban_left">
                        <div className="ban_btn">
                        <a href="#">Startup Business</a>
                        <div className="bell">
                        <FaRegBell/>
                        </div>
                        </div>
                    </div>
                    <div className="ban_left_txt">
                    <h2>Empowering startups to fuel
                            their business growth</h2>
                            <h6>Eu posuere mi sed purus proin quisque molestie. Ut amet, at amet,
                                velit
                            </h6>
                            <p> nibh arcu eu. Id sem varius malesuada tincidunt sodales.</p>
                            <a href="#">Get started now </a>
                    </div>
                    </div>
                </Col>
                <Col lg={5}>
                    <div className="ban_right">
                        <img src={banner} alt="" />
                    </div>
                </Col>
    
            </Row>
        </Container>
    </div>
  )
}

export default Banner