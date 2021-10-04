import React from 'react';
import { Card,Button, Col } from 'react-bootstrap';

const Service = (props) => {
    const{title,description, image, fee, location}=props.course
    return (
        <Col xs={6}>
        <Card>
  <Card.Img variant="top" src={image} height={400} />
  <Card.Body>
    <Card.Title>{title}</Card.Title>
    <Card.Text>
      {description}
    </Card.Text>
    <h3 className="text-secondary">Course Fee:<span className="text-warning">{fee}</span>  Taka</h3>
    <Button variant="success">Enroll now</Button>
  </Card.Body>
</Card>
</Col>
    );
};

export default Service;