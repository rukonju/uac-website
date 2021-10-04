import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Service from '../Service/Service';

const Services = () => {
    const [courses,setcourses]=useState([])
    useEffect(()=>{
        fetch('./courses.JSON')
        .then(res=>res.json())
        .then(data=>setcourses(data))
    },[])
    return (
        <Container>
            <Row>
            {
                courses.map(course=> <Service key={course.id} course={course}></Service>)
            }
            </Row>
        </Container>
    );
};

export default Services;