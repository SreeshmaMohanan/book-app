import React from 'react'
import { Row,Col } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
function Landing() {
    const navigateByURL=useNavigate()
    const navigate=()=>{
        navigateByURL('/contactlist')
    }
  return (
    <div >
          <Row className=''>
            <Col className='d-flex flex-column m-4 p-5 justify-content-between align-items-center' lg={6} sm={12}>
                <h3>Contact Manager</h3>
               <p>
                Contact manager is a web application that allows you to manage your contacts. You can add new contact, view existing contacts and delete unwanted ones.It is a software program that enables users to easily store and find contact information, such as names, addresses, and telephone numbers.
               </p>
               <button className='btn btn-success' onClick={navigate}>See All Contacts</button>

            </Col>
            <Col className='m-4 p-5' lg={4} sm={8}>
                <img height={'300px'} width={'300px'}className='img-fluid' src="https://animated-gif-creator.com/images/01/animated-4-gif-images-download_74.gif" alt="" />
                </Col>
        </Row>

    </div>
  )
}

export default Landing