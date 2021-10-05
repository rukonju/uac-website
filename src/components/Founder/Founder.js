import React from 'react';
import {Col, Image} from 'react-bootstrap';

const Founder = (props) => {

    const {name,varsity,image}=props.founder;
    
    return (
        <Col className="m-2 rounded-3 shadow">     
            <Image src={image} height={200} width={200} roundedCircle/>
            <h2>{name}</h2>
            <h6>{varsity}</h6>        
        </Col>
    );
};

export default Founder;