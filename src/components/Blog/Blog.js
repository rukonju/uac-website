import React from 'react';
import { Row, Col, Container, Image } from 'react-bootstrap';

const blog = (props) => {
    
    const{title, image,date,article,author}=props.blog;

    return (
        <Container className="  my-4 border rounded-3  p-4">
            <Row>
                <Col md={6}>
                    <h1 className="text-success">{title}</h1>
                    <p>{date}</p>
                    <p>{author}</p>
                    <p style={{textAlign:"justify", fontSize:"20px"}}>{article}</p>
                </Col>
                <Col md={6}>
                    <Image src={image?image:""} rounded width="100%" />
                </Col>
            </Row>
            
        </Container>
    );
};

export default blog;