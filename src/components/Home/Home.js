
import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import HomeCourse from '../HomeCourse/HomeCourse';
import BlogHome from '../BlogHome/BlogHome';

const Home = () => {
    const [courses,setCourses]=useState([])
    const [blogs,setBlogs]=useState([]);
    useEffect(()=>{
        fetch('./courses.JSON')
        .then(res=>res.json())
        .then(data=>setCourses(data))
    },[])
    useEffect(()=>{
        fetch('./blogs.JSON')
        .then(res=>res.json())
        .then(data=>setBlogs(data))
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
            <Container>
            {
                blogs.slice(0,2).map(blg=> <BlogHome key={blg.id} blg={blg}></BlogHome>)
            }
            </Container>

        </div>
            
            
    );
};

export default Home;