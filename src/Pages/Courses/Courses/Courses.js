import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import LeftSideNave from '../../Shared/LeftSideNave/LeftSideNave';
import RIghtMain from '../../Shared/RIghtMain/RIghtMain';

const Courses = () => {
    return (
        <Container className='bg-info'>
            <Row>
                <Col lg='4'>
               <LeftSideNave></LeftSideNave>
                </Col>
                <Col lg='8' >
                <RIghtMain></RIghtMain>
                </Col>
            </Row>
        </Container>
    );
};

export default Courses;