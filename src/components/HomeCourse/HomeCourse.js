
import React from 'react';
import {Col, Image, Row } from 'react-bootstrap';

const HomeCourse = (props) => {
    const {title,description,image,location,fee}=props.course
    return (
        <Row className="my-4">
            <Col sm={6}>
            <Image src={image} width="100%" height="300px" rounded />
            </Col>
            <Col sm={6}>
                <h1 className="text-success">{title}</h1>
                <p>{description}</p>
                <h3>Course Fee: {fee} Taka</h3>
                <small>{location}</small>
            </Col>
        </Row>
                
    );
};

export default HomeCourse;