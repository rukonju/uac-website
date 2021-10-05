import React, {useState, useEffect} from 'react';
import { Container, Image, Row } from 'react-bootstrap';
import Founder from '../Founder/Founder';

const About = () => {
    const [founders,setFounders]=useState([]);

    useEffect(()=>{
        fetch('./founders.JSON')
        .then(res=>res.json())
        .then(data=>setFounders(data))
    },[]);
   
    return (
        <div>
            <h1 style={{backgroundColor:"#007BA7"}} className="text-light py-3 text-center">University Admission Care</h1>
            <Container className="text-center">   
                <Image src="./Logo192.png" roundedCircle width="300px"/> 
                <h3 className="text-secondary mb-4">The journey was started 2020 during the Corona pandemic. All the educational institute was closed. In this situation me and some of my friends open this program with 15 students who are interested to read publice university.</h3>
                <div>
                    <h1 style={{color:"#007BA7"}} className="py-3 text-center">Founders of UAC</h1>
                </div>
                <Row className="my-4 justify-content-center" sm={4} >
                    {
                    founders.map(founder=> <Founder key={founder.id} founder={founder}></Founder>) 
                    }
                </Row>
            </Container>
        </div>
    );
};

export default About;