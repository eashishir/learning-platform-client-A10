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
                <Accordion.Item eventKey="0">
                    <Accordion.Header>#1.How many videos in this course?</Accordion.Header>
                    <Accordion.Body>
                       There are 250+ course in this courses.You con save this video to your mobile.And you will watch this video offline.
                    </Accordion.Body>
                </Accordion.Item>
               
            </Accordion>
        </div>
    );
};

export default FaqPage;