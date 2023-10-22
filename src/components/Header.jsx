import React from 'react'
import { Container,Navbar } from 'react-bootstrap'

function Header() {
  return (
    <div>
        <Navbar style={{color:'white'}} className="bg-primary ">
        <Container>
          <Navbar.Brand href="#home">
          <b style={{fontSize:'1.5rem'}}>
              <i class="fa-sharp fa-regular fa-address-card"></i>{' '}
                Contact App
          </b>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header