import React from 'react'
import '../styles/Home.css' 
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from 'axios';

export default function Home() {
  
  return (
    <Container>
   <Card className='shadow'>
      <Card.Header>titre</Card.Header>
      <Card.Body>
        <Card.Title>learn java </Card.Title>
        <Card.Text>
          video 
        </Card.Text>
        <Card.Text>
          date : 
        </Card.Text>

        <Button variant="primary">completed</Button>
      </Card.Body>
    </Card>
    </Container>
  )
}
