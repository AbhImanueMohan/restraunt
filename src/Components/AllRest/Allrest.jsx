import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Restcard from '../RestCard/Restcard';


function Allrest() {


  //all items is a satte to hold the array items
  const [allItem,setAllItem]= useState([])

  const fetchData = async()=>{
    const response = await axios.get('http://localhost:4120/restaurants')
    console.log(response.data);
    setAllItem(response.data)
  }
  console.log(allItem);
  useEffect(()=>{
fetchData()
  }, [])
  return (
    <>
    <Row>
      {

        allItem.map((item)=>(
          <Col sm={12} md={6} lg={4} xl={3} >
          <Restcard restraunts = {item}/>
           
       
        </Col>

        ))
        
      }
    </Row>

    </>
  )
}

export default Allrest