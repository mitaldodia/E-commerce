import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function Blog() {
  return (
    <div>
        <Container>
            <div className='blog-details'>
                <div className='product-title'>
                    <h2 className="title-inner1">Select from Our BLog</h2>
                </div>
                <div className='blog-contains'>
                    <Row>
                        <Col sm={6} md={3}>
                            <Card>
                                <Card.Img variant="top" src="../images/blog-1.jpg" />
                                <Card.Body>
                                    
                                    <Card.Text>
                                    Consequences that are extremely painful. Nor again is there anyone who 
                                    loves or pursues or desires 
                                    to obtain pain of itself, because it is pain.
                                    </Card.Text>
                                    <Button variant="primary">Read More</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm={6} md={3}>
                            <Card>
                                <Card.Img variant="top" src="../images/blog-2.jpg" />
                                <Card.Body>
                                    
                                    <Card.Text>
                                    Consequences that are extremely painful. Nor again is there anyone who 
                                    loves or pursues or desires 
                                    to obtain pain of itself, because it is pain.
                                    </Card.Text>
                                    <Button variant="primary">Read More</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm={6} md={3}>
                            <Card>
                                <Card.Img variant="top" src="../images/blog-3.jpg" />
                                <Card.Body>
                                    
                                    <Card.Text>
                                    Consequences that are extremely painful. Nor again is there anyone who 
                                    loves or pursues or desires 
                                    to obtain pain of itself, because it is pain.
                                    </Card.Text>
                                    <Button variant="primary">Read More</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm={6} md={3}>
                            <Card>
                                <Card.Img variant="top" src="../images/blog-4.jpg" />
                                <Card.Body>
                                    
                                    <Card.Text>
                                    Consequences that are extremely painful. Nor again is there anyone who 
                                    loves or pursues or desires 
                                    to obtain pain of itself, because it is pain.
                                    </Card.Text>
                                    <Button variant="primary">Read More</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </div>
        </Container>
    </div>
  )
}
