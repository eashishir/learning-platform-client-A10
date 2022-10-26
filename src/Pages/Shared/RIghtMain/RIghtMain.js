import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseCard from '../CourseCard/CourseCard';




const RIghtMain = () => {
    const courses = useLoaderData();
  
    return (
        <div>
            {
                courses.map(course => <CourseCard
                key={course._id}
                course ={course}
                
                
                >

                </CourseCard> )
            }

        </div>
    );
};

export default RIghtMain;