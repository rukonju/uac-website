import React from 'react';
import { Card,Button, Col } from 'react-bootstrap';

const Service = (props) => {
    const{title,description, image, fee}=props.course
    return (
        <Col sm={6}>
        <Card className="my-3 shadow">
          <Card.Img variant="top" src={image} height={400} />
            <Card.Body>
              <h2>{title}</h2>
              <Card.Text>
                {description}
              </Card.Text>
              <h4 className="text-warning">Course Fee: {fee} Taka</h4>
              <Button variant="success">Enroll now</Button>
            </Card.Body>
      </Card>
      </Col>
    );
};

export default Service;