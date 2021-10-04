
import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import HomeCourse from '../HomeCourse/HomeCourse';

const Home = () => {
    const [courses,setCourses]=useState([])
    useEffect(()=>{
        fetch('./courses.JSON')
        .then(res=>res.json())
        .then(data=>setCourses(data))
    },[])
    return (
        <div>
            <h1 className="text-center border bg-success text-white py-3">University Admission Care</h1>
            <Container>
            {
                courses.slice(0,4).map(course=> <HomeCourse key={course.id} course={course}></HomeCourse>)
            }
            </Container>
            <h1 className="text-center border bg-success text-white py-3">Blogs</h1>
        </div>
            
            
    );
};

export default Home;