import React from 'react'
import { Row ,Col } from 'react-bootstrap'
function Footer() {
  return (
    <div className='bg-primary'>
        <Row>
            <Col className='m-5' lg={3} md={12} sm={12}>
                <h3>Contact Manager</h3>
                <p className='text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus dignissimos architecto recusandae quibusdam illo veritatis minima placeat laborum explicabo, saepe quo reiciendis dolore nesciunt eum odio asperiores error esse sit!</p>
            </Col>
            <Col className="m-5 d-flex flex-column" lg={3} md={12} sm={12}>
                <h3>About</h3>
                <h6>ContactLists</h6>
                <h6>Edit contact</h6>
            </Col>
            <Col className="m-5 " lg={3} md={12} sm={12}>
                <h3>Contact Us</h3>
               <p className='d-flex'>
                    <input type="text" className='Form-control p-2' placeholder='enter your email' />
                    <button className='btn btn-success ms-2'>Subscribe</button>
               </p>
            </Col>
        </Row>
    </div>
  )
}

export default Footer