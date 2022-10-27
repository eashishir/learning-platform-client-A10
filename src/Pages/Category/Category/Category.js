import React, { } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Pdf from "react-to-pdf";
import { FaDollarSign, FaRegFilePdf } from 'react-icons/fa';

const ref = React.createRef();

const Category = () => {
    const course = useLoaderData()
    console.log(course);
    return (
        <div>
          


            <Card ref={ref} className="text-center w-60 m-5 bg-dark text-light">

                <Card.Body>
                    <Card.Title>{course.title}</Card.Title>
                    <Card.Img variant="top" src={course.image_url} />
                    <Card.Text>
                        {course.details}
                    </Card.Text>
                    
                    <Link to={`/category/premium/${course.category_id}`}><Button className='bg-warning' variant="info">Get Premium <FaDollarSign></FaDollarSign> </Button></Link>

                    
                    

                </Card.Body>
                <Card.Footer className="text-muted">
                <Pdf targetRef={ref} filename="code-example.pdf">
                {({ toPdf }) => <button className='text-warning bg-black' onClick={toPdf}>Download PDF <FaRegFilePdf></FaRegFilePdf> </button>}
            </Pdf>
                </Card.Footer>
            </Card>
        </div>
    );
};

export default Category;