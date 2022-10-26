import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const CourseCard = ({ course }) => {
    console.log(course)
    return (
     
        <Card className=" bg-dark text-light text-center mt-3">
            <Card.Img className='' variant="top" src={course.image_url} />
            <Card.Body>
                <Card.Title>{course.title}</Card.Title>

                <Link to={`/category/${course.category_id}`}><Button variant="info">Go more Information</Button></Link>
            </Card.Body>

        </Card>
      




    );
};

export default CourseCard;