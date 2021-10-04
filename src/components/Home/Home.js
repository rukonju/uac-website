
import React, { useEffect, useState } from 'react';
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
            {
                courses.slice(0,4).map(course=> <HomeCourse key={course.id} course={course}></HomeCourse>)
            }
        </div>
            
            
    );
};

export default Home;