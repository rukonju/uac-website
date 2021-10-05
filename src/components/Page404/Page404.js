import React from 'react';
import { Button} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Page404 = () => {
    
    
    return (
        <div className="text-center">
            <img style={{width:"60vw"}} className="fluid" src="https://wpklik.com/wp-content/uploads/2019/03/A-404-Page-Best-Practices-and-Design-Inspiration.jpg" alt=""/>
            <div className="m-4">
            <NavLink to="./home">
                <Button variant="success" size="lg">Back To Home Page</Button>
            </NavLink>
            </div>
            
        </div>
    );
};

export default Page404;