import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaBookReader, FaStar, FaTeeth } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';

const PrimiumPage = () => {
    const course = useLoaderData()
    console.log(course);
    return (
        <Card className="text-center bg-dark m-3 text-light">
        <Card.Header> <FaBookReader></FaBookReader> <FaBookReader></FaBookReader> </Card.Header>
        <Card.Body>
          <Card.Title>{course.title}</Card.Title>
          <Card.Text>
           {course.details}
          </Card.Text>
          <Link to ='/' ><Button variant="primary">Go Home</Button></Link>
        </Card.Body>
        <Card.Footer className=" text-warning"><FaStar></FaStar> <FaStar></FaStar> <FaStar></FaStar> </Card.Footer>
      </Card>
    );
};

export default PrimiumPage;