import React from 'react'
import Card from 'react-bootstrap/Card';
import './Restcard.css'
import { Link } from 'react-router-dom';


function Restcard( {restraunts}) {
    console.log(restraunts);

   
  return (
    <>
    <div className='cards'>
    <Link to={`view/${restraunts.id}`}>
    <Card style={{ width: '18rem' }} id='card'>
    
      <Card.Title className='test' >{restraunts.name} </Card.Title>
      <Card.Img variant="top" src= {restraunts.photograph} />
      <Card.Body>
        
        <Card.Text className='text'>
       Neighbourhood : {restraunts.neighborhood} <br />
      Type :  {restraunts.cuisine_type}
        
        <p> Address :{restraunts.address} </p>
        </Card.Text>
        
      </Card.Body>
    </Card></Link>
    </div>
     
    </>
  )
}

export default Restcard