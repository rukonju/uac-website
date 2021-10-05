import React from 'react';
import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import HomeCourse from '../HomeCourse/HomeCourse';
import { useHistory } from 'react-router';
import useData from '../../hooks/hooks';

const Home = () => {
    const [courses]=useData('./courses.JSON');
    const history=useHistory();
   
    //button handler
    const handleBtn=(path)=>{
        history.push(path);
    };
    
    return (
        <div>
            <Container>
                <Row style={{alignItems:"center", justifyContent:"center"}}>
                    <Col sm={6}>
                        <h1 className="text-success">Welcome to <br /> <span style={{fontSize:"60px"}}>University Admission Care</span> </h1>
                        <h5>Sherpur Town, Sherpur</h5>
                        <h3 style={{fontWeight:"30"}} className="text-info">Dream <div className="vr border" /> Hard Work <div className="vr" /> Success</h3>
                    </Col>
                    <Col sm={5}>
                        <Image width="100%" src="./welcome.png"/>
                    </Col>
                </Row>
            </Container>
            
            <Container>
                {
                    courses.slice(0,4).map(course=> <HomeCourse key={course.id} course={course}></HomeCourse>)
                }
                <div className="d-grid gap-2 my-4">
                    <Button onClick={()=>handleBtn('/service')} variant="outline-success" size="lg">See more Course</Button>
                </div>
            </Container>
        </div>   
    );
};

export default Home;