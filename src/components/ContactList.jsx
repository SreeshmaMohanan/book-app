import React from 'react'
import { Row,Col } from 'react-bootstrap'
import { Card } from 'react-bootstrap'
import { ListGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Addcontact from './Addcontact'
function ContactList() {
  return (
    <div>
      <div className='d-flex justify-content-between align-items-center'>
           
           <h3 className='m-3'>All Contacts</h3>
           <Addcontact/>
      </div>
       <div className='m-3'>
        <Row>
            <Col>
            <Card style={{ width: '15rem' }}>
      <Card.Img  style={{borderRadius:'50%',border:'1px solid'}} variant="top" src="https://icon-library.com/images/boy-icon-png/boy-icon-png-21.jpg" />
      <Card.Body>
       
        
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item><b>Name:</b></ListGroup.Item>
        <ListGroup.Item><b>Email:</b></ListGroup.Item>
        <ListGroup.Item><b>Phone:</b></ListGroup.Item>
      </ListGroup>
      <Card.Body style={{fontSize:'1.5rem'}} className='d-flex justify-content-between align-items-center bg-primary '>
        <Link className='btn ' to={'/viewcontact'}><i className='fa-solid fa-eye text-warning'></i></Link>
        <Link  className='btn ' to={'/editcontact'}><i className='fa-solid fa-pen text-info'></i></Link>
        <button  className='btn ' ><i className="fa-solid fa-trash text-danger"></i></button>
      </Card.Body>
    </Card>
            </Col>
        </Row>
       </div>
      
  </div>
  )
}

export default ContactList