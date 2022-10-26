import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
import { FaArrowAltCircleRight } from 'react-icons/fa';
import img1 from '../../../assets/brands/7-JavaScript-Concepts-That-Every-Developer-Must-Know.jpg'
import img2 from '../../../assets/brands/pic4.jpeg'
import img3 from '../../../assets/brands/pic5.jpg'
import img4 from '../../../assets/brands/welcome2.jpg'


const Home = () => {
    return (
        <div className='bg-dark p-1'>
            <Card className="text-center  m-5 bg-info">
                <Card.Header className='bg-white' >
                <Card.Img  variant="roundedCircle" style={{height:'80px'}} src={img4} />
                </Card.Header>
                <div>
                    <Carousel>
                        <Carousel.Item interval={1000}>
                            <img
                                className="d-block w-100"
                                src={img1}
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <p>“When to use iterative development? <br/>
                                    You should use iterative development only on projects that you want to succeed.”</p>
                               
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={500}>
                            <img
                                className="d-block w-100"
                                src={img2}
                                alt="Second slide"
                            />
                         
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block 100"
                                src={img3}
                                alt="Third slide"
                            />
                         
                        </Carousel.Item>
                    </Carousel>
                </div>

                <Card.Body>
                    <Card.Title>Welcome to Our JS LearnSmart</Card.Title>
                    <Card.Text>
                    Best Online Learning Platforms.
                    </Card.Text>
                    
                    <Button variant="primary">Courses Available <FaArrowAltCircleRight></FaArrowAltCircleRight> </Button>
                    <Card.Footer className="text-muted mt-2">@eashishir</Card.Footer>
                </Card.Body>
              
            </Card>
        </div>
    );
};

export default Home;