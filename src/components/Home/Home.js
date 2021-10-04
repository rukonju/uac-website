import React from 'react';
import { Button, Container } from 'react-bootstrap';
import HomeCourse from '../HomeCourse/HomeCourse';
import { useHistory } from 'react-router';
import useData from '../../hooks/hooks';
import BlogHome from '../BlogHome/BlogHome';

const Home = () => {
    const [courses]=useData('./courses.JSON');
    
    const [blogs]=useData('./blogs.JSON');

    const history=useHistory();
   
    //button handler
    const handleBtn=(path)=>{
        history.push(path);
    };
    
    return (
        <div>
            <h1 className="text-center border bg-success text-white py-3">University Admission Care</h1>

            <Container>
                {
                    courses.slice(0,4).map(course=> <HomeCourse key={course.id} course={course}></HomeCourse>)
                }
                <div className="d-grid gap-2 my-4">
                    <Button onClick={()=>handleBtn('/service')} variant="outline-success" size="lg">See more Course</Button>
                </div>
            </Container>

            <h1 className="text-center border bg-success text-white py-3">Blogs</h1>

            <Container>
                {
                    blogs.slice(0,2).map(blg=> <BlogHome key={blg.id} blg={blg}></BlogHome>)
                }
                <div className="d-grid gap-2 my-4">
                    <Button onClick={()=>handleBtn('/blogs')} variant="outline-success" size="lg">See more blogs</Button>
                </div>
            </Container>
        </div>   
    );
};

export default Home;