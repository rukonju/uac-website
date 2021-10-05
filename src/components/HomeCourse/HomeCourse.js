import React from 'react';
import {Col, Image, Row, Button } from 'react-bootstrap';

const HomeCourse = (props) => {

    const {title, description, image, fee}=props.course;
    
    return (
        <Row className="my-4 rounded">
            <Col sm={6}>
                <Image src={image?image:""} width="100%" height="250px" rounded />
            </Col>
            <Col style={{backgroundColor:"#71A6D2"}} sm={6}>
                <h1 className="text-light">{title}</h1>
                <h5 className="text-light">{description}</h5>
                <h3 className="text-warning">Course Fee: {fee} BDT</h3>
                <Button variant="secondary" size="lg">ENROLL NOW</Button>
            </Col>
        </Row>
    );
};

export default HomeCourse;