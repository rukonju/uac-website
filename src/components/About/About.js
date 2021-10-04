import React from 'react';
import './About.css'
import { Image } from 'react-bootstrap';
const About = () => {
    return (
        <div className="text-center">
            <h1 className="text-warning py-3 text-center">University Admission Care</h1>
            <Image src="./Logo192.png" roundedCircle width="300px"/> 
            <h3 className="text-secondary">The journey was started 2020 during the Corona pandemic. All the educational institute was closed. In this situation me and some of my friends open this program with 15 students who are interested to read publice university.</h3>
            <h2>It was our first poster</h2>
            <Image width="50%" src="https://scontent.fdac68-1.fna.fbcdn.net/v/t1.6435-9/121398945_115599533658465_4003791190849469563_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=E_0w63WgtRIAX9zs6ow&_nc_ht=scontent.fdac68-1.fna&oh=ee88ed29d5feceda81cedf10dbd3fb13&oe=617EA015"/>
        </div>
    );
};

export default About;