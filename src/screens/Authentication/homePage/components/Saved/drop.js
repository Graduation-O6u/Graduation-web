import React from "react";
import { Nav,Navbar,Col,Row,Container,} from "react-bootstrap";
import Drop1 from "./smalldropdown/smalldropdown"
import Drop2 from "./smalldropdown/smalldropdown2"
import Drop3 from "./smalldropdown/smalldropdown3"
import { Icon } from '@iconify/react';
import "./saved.css";
const Drop = () => {
    const [show, setShow] = React.useState(false);
return (
    <div>
        <Navbar collapseOnSelect expand="lg">
            <Container className="cont">
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className="me">
                    <Nav className="me-auto">
                        <Nav.Link href="/featured" className="feature2">Featured Jobs</Nav.Link>
                        <Nav.Link herf="# " > &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp;</Nav.Link>
                        <Nav.Link href="/recomend" className="recommend2">Recommended</Nav.Link>
                        <Nav.Link herf="# " > &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; </Nav.Link>
                        <Nav.Link href="/saved" className="saved2">Saved</Nav.Link>
                        <Nav.Link herf="# " > &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; </Nav.Link>
                        <Nav.Link ><button onClick={() => setShow(!show)} 
                                    style={{
                                        background : show ? "#FBFBFB" : "white" ,
                                        boxShadow : show ? "5px 5px 5px 2px rgba(0, 0, 0, .1)" : "none" , 
                                        borderRadius : show ? " 50%" : "none" ,
                                        border :"none"
                                    }}>
                                        <Icon icon="material-symbols:filter-list-rounded" className="list-round"/>
                                    </button>
                        </Nav.Link>  
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        <div className="drop">
                        {show && 
                                    <Container className="eventsNav ">
                                        <Row >
                                            <Col xs="13" md="4" className="text-left">
                                                < Drop1/>
                                            </Col>
                                            <Col xs="13" md="4" className="text-left">
                                                <Drop2 />
                                            </Col>
                                            <Col xs="13" md="4" className="text-left">
                                                <Drop3 />
                                            </Col>
                                        </Row>
                                    </Container>
                        }
                        </div>
    </div>
);}
export default Drop;
