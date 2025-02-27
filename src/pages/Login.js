import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {Container} from 'react-bootstrap';
import { useNavigate } from 'react-router';


const Login = ({setAuthenticate}) => {
  const navigate = useNavigate()
  const loginUser =  (event) => {
    event.preventDefault();
    setAuthenticate(true)
    navigate('/')
  }
  return (
        <Container>
       <Form onSubmit={(event) => loginUser(event)}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Enter email" required/>
        <Form.Text className="text-muted">
          We'll never share your information with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" required/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="danger" type="submit">
        로그인
      </Button>
    </Form>
    </Container>
  )
}

export default Login
