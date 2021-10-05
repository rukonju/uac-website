import React from 'react';
import { Card,Button, Col } from 'react-bootstrap';
import { Check2Circle } from 'react-bootstrap-icons';

const Service = (props) => {
    const{title,description, image, fee}=props.course
    return (
        <Col sm={12} md={6}>
          <Card style={{backgroundColor:"#007ba74f"}} className="my-3 shadow">
            <Card.Img variant="top" src={image} />
            <Card.Body>
              <h2>{title} <Check2Circle/></h2>
              <Card.Text>{description}</Card.Text>
              <h4 className="text-danger">Course Fee: {fee} Taka</h4>
              <Button variant="success">Enroll now</Button>
            </Card.Body>
          </Card>
        </Col>
    );
};

export default Service;