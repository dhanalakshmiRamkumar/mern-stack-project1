import React from 'react'
import "../style/Home.css"
import { Container, Button } from 'react-bootstrap'

const Home = () => {
  return (
    <Container>
       <h1>Welcome to the server</h1>
       <p>we are here to serve you</p>

       <Button variant="primary" type="submit"> Get Started</Button>
    </Container>
  )
}

export default Home