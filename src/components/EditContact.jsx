import React from 'react'
import { useState } from 'react';
import { Button,Modal,Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
function EditContact() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
   
    return (
      <div className=' border shadow  rounded bg-dark'>
         <h3 className='m-2 p-2'>Edit Contact</h3>
         <div className="row d-flex flex-wrap">
            <div className="col-md-4 m-3 p-2">
            <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control
                type="text"
                placeholder="Name"
                autoFocus/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control
                type="text"
                placeholder="Image URL"
                autoFocus/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control
                type="email"
                placeholder="Email"
                autoFocus/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control
                type="text"
                placeholder="Phone"
                autoFocus/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Control
                  type="text"
                  placeholder="Company"
                  autoFocus/>
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Control
                  type="text"
                  placeholder="Title"
                  autoFocus/>
              </Form.Group>
            <Form.Group
              className="mb-3"
              placeholder='Address' >  
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <select className='form-control' name="" id="">
                <option value="">Select a group</option>
              </select>
            </Form.Group>
          </Form>
          <div className='d-flex align-items-center justify-content-center'>
              <Link className='btn btn-secondary'  to={'/contactlist'} variant="secondary" onClick={handleClose}>
                Close
              </Link>
              <Link className='btn btn-info ms-5' to={'/contactlist'}  onClick={handleClose}>
               Update
              </Link>
          </div>
            </div>
            <div className="col-md-5 m-2 p-5 justify-content-center align-items-center">
                <img className='img-fluid' width={'300px'} height={'300px'} src="https://icon-library.com/images/boy-icon-png/boy-icon-png-21.jpg" alt="" />
            </div>
         </div>
  
       
      </div>
    )
}

export default EditContact