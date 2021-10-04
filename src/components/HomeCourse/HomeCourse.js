
import React from 'react';

const HomeCourse = (props) => {
    const {title,description,image,location}=props.course
    return (
        <div>
            <h1>{title}</h1>
        </div>
        
    );
};

export default HomeCourse;