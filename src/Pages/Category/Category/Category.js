import React, { } from 'react';
import { useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Category = () => {
    const course = useLoaderData()
    console.log(course);
    return (
        <div>
            
            <Card className="text-center w-60 m-5 bg-dark text-light">
                
                <Card.Body>
                    <Card.Title>{course.title}</Card.Title>
                    <Card.Img variant="top" src={course.image_url} />
                    <Card.Text>
                       {course.details}
                    </Card.Text>
                  
                </Card.Body>
                <Card.Footer className="text-muted">@shishir</Card.Footer>
            </Card>
        </div>
    );
};

export default Category;