import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

const FaqPage = () => {
    return (
        <div>
            <Accordion defaultActiveKey={['0']} alwaysOpen className='m-3'>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>#1.Why Learn JavaScript through this course?</Accordion.Header>
                    <Accordion.Body>
                        #Lessons
                        Read concise lessons,
                        Save notes in lessons,
                        Export & print your notes,
                        Read a recap of topics learned,
                        Read a recap of every lesson,
                        Visualize your knowledge map.
                    </Accordion.Body>
                </Accordion.Item>
               
            </Accordion>
        </div>
    );
};

export default FaqPage;