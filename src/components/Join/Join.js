import React from 'react';
import { Form, Row, Button, Col, Container } from 'react-bootstrap';

const Join = () => {
    return (
        <div>
            <Container className="mb-4">
                <h1 className="text-center bg-success text-light py-3">Apply for work with us</h1>
                <Form>
                    <Row className="mb-3">
                        <Form.Group as={Col}>
                            <Form.Label>First Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter first name" />
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control type="email" placeholder="Enter last name" />
                        </Form.Group>
                        <Form.Group controlId="formGridEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control type="password" placeholder="Enter phone number" />
                        </Form.Group>
                    </Row>

                    <Row>
                        <Form.Group as={Col}>
                            <Form.Label>Gender</Form.Label>
                            <Form.Select defaultValue="Choose...">
                                <option>Choose...</option>
                                <option>Male</option>
                                <option>Female</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label>City</Form.Label>
                            <Form.Control placeholder="Enter city" />
                        </Form.Group>
                    </Row>

                    <Form.Group className="mb-3">
                        <Form.Label>Full Address</Form.Label>
                        <Form.Control placeholder="Enter full address" />
                    </Form.Group>

                    <Row className="mb-3">
                        <Form.Group as={Col}>
                            <Form.Label>Subject want to teach</Form.Label>
                            <Form.Select defaultValue="Choose...">
                                <option>Choose...</option>
                                <option>Phisics</option>
                                <option>Chemistry</option>
                                <option>Math</option>
                                <option>Biology</option>
                                <option>English</option>
                                <option>Programming</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group as={Col} className="mb-3">
                            <Form.Label>Upload your CV</Form.Label>
                            <Form.Control type="file" />
                        </Form.Group>
                    </Row>

                    <Form.Group className="mb-3">
                        <Form.Label>Why we choose you?</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>

                    <div className="d-grid gap-2">
                        <Button variant="success" size="lg">Submit</Button>
                    </div>
                </Form>
            </Container>
        </div>
    );
};

export default Join;