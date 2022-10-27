import React from 'react';
import Card from 'react-bootstrap/Card';
import img from '../../assets/brands/oops-404-error.webp'

const PageError = () => {
    return (
        <div>
        <Card>
            <Card.Img variant="top" className='img-fluid' src={img} />
            <Card.Body>
                <Card.Text>
                    The page you were trying to reach on a website couldn't be found on their server.
                </Card.Text>
            </Card.Body>
        </Card>
    </div>
    );
};

export default PageError;