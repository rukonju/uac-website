import React from 'react';
import {Col, Image, Row, Button } from 'react-bootstrap';

const HomeCourse = (props) => {
    const {title, description, image, fee}=props.course
    return (
        <Row className="my-4 shadow rounded-3 bg-success">
            <Col sm={6}>
                <Image src={image?image:""} width="100%" height="300px" rounded />
            </Col>
            <Col sm={6}>
                <h1 className="text-light">{title}</h1>
                <h5 className="text-light">{description}</h5>
                <h3 className="text-warning">Course Fee: {fee} Taka</h3>
                <div className="d-grid gap-2">
                    <Button variant="outline-warning" size="lg">ENROLL NOW</Button>
                </div>
            </Col>
        </Row>
    );
};

export default HomeCourse;