import React from 'react';

import { Card, Button, Form } from 'react-bootstrap';
import './login.css';
import userImage from '../../assets/user.png';


class LoginComponent extends React.Component{
    render(){
        return(
            <div className="loginDiv">
                <Card className="loginCard" style={{  }}>
                <Card.Img className="userImg" variant="top" src={userImage} />
                <Card.Body>
                    <Card.Title style={{fontSize:"30px", textAlign:"center"}}>Login</Card.Title>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Card.Body>
                </Card>
            </div>
            
        );
    }
}

export default LoginComponent;