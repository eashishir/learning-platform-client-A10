import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'react-router-dom';
import Category from '../../Category/Category/Category';

const LeftSideNave = () => {
const [categories,setCategories] = useState([]);

useEffect(() =>{
    fetch('https://my-assignment-server-10.vercel.app/js-categories')
    .then(res => res.json())
    .then(data => setCategories(data))
},[])


    return (
       <div className='bg-dark'>
         <h2 className='text-warning'>Topics of JS:{categories.length} </h2>
         <Card className='bg-info p-2 m-1' style={{ width: '18rem' }}>
        <ListGroup variant="flush">
            {
                categories.map(Category =><ListGroup.Item key={Category.id}>
                    <Link to={`/category/${Category.id}`}>{Category.name}</Link>
                </ListGroup.Item> )
            }
          
         
        </ListGroup>
      </Card>
       </div>
       
    );
};

export default LeftSideNave;