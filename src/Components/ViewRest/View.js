/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Col, Image, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom'
import ListGroup from 'react-bootstrap/ListGroup';
import RestOp from '../RestOp/RestOp';
import RestReview from '../RestReview/RestReview';


function View() {


  //to hold particular restraunt details
  const [RestDetails,setRestDetails]=useState([])

  // get particular id from the restraunt
  // const pathParameter =useparams()
  // console.log(pathParamete.id);

// destructing in react
  const {id} = useParams()
  console.log(id);

  //api call for fetch particular resteaunt details
  const fetchData = async ()=>{
    const {data} = await axios.get(`http://localhost:4120/restaurants/${id}`)
    console.log(data);
  setRestDetails(data)

    
  }
  console.log(RestDetails);
  useEffect(()=>{
      fetchData();
  },[])
  return (
   <>
   <Row>
    <Col sm={12} md={6} >
      <Image width={500} height={500} src={RestDetails.photograph}>

      </Image>
    </Col>

    <Col>
    <h1 className='m-4 text-center'>{RestDetails.name} </h1>

    <ListGroup className='shadow'>
      <ListGroup.Item>Address : {RestDetails.address} </ListGroup.Item>
      <ListGroup.Item> {RestDetails.cuisine_type
}</ListGroup.Item>
      <ListGroup.Item>neighborhood :
{RestDetails.neighborhood} </ListGroup.Item>
      <ListGroup.Item><RestOp op={RestDetails.operating_hours}/>
 

 </ListGroup.Item>
      <ListGroup.Item>
         <RestReview review={RestDetails.reviews}/> </ListGroup.Item>
    </ListGroup>

    </Col>
   </Row>
   </>
  )
}

export default View