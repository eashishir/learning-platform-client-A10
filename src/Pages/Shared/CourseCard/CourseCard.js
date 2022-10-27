import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaDollarSign, FaFileInvoiceDollar, FaHandPointRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

// import Card from 'react-bootstrap/Card';
// import CardGroup from 'react-bootstrap/CardGroup';

const CourseCard = ({ course }) => {
    console.log(course)
    return (

        <Card className=" bg-dark text-light text-center mt-3">
            <Card.Img className='' variant="top" src={course.image_url} />
            <Card.Body>
                <Card.Title>{course.title}</Card.Title>

                <Link to={`/category/${course.category_id}`}>
                    <Button variant="info">Go more Information <FaHandPointRight></FaHandPointRight> 
                    </Button></Link>
            </Card.Body>

        </Card>




        // <CardGroup>
           
           
        //     <Card>
        //         <Card.Img variant="top" src="holder.js/100px160" />
        //         <Card.Body>
        //             <Card.Title>{course.title}</Card.Title>
        //             <Card.Text>
        //                 This is a wider card with supporting text below as a natural lead-in
        //                 to additional content. This card has even longer content than the
        //                 first to show that equal height action.
        //             </Card.Text>
        //         </Card.Body>
        //         <Card.Footer>
        //             <small className="text-muted">Last updated 3 mins ago</small>
        //         </Card.Footer>
        //     </Card>
        // </CardGroup>





    );
};

export default CourseCard;