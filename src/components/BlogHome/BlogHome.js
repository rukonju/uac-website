import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';

const BlogHome = (props) => {
    console.log(props)
   
        const{title, image,date,article}=props.blg;
    return (
        <Container className="bg-success my-4 border rounded-3 text-white p-4">
            <Row>
                <Col md={4}>
                    <h1 className="text-warning">{title}</h1>
                    <p>{date}</p>
                </Col>
                <Col md={{ span: 4, offset: 4 }}>
                    <Image src={image?image:""} rounded width="100%" />
                </Col>
            </Row>
            <h6>{article}</h6>
        </Container>
    );
    }

export default BlogHome;