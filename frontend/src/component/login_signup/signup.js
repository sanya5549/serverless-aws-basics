import React from 'react';

import { Card, Button, Form } from 'react-bootstrap';
import './login.css';
import userImage from '../../assets/user.png';
import axios from 'axios'


class SignupComponent extends React.Component{

    constructor(){
        super();
        this.state = {
            email:'',
            password:'',
            error:{}
        };


        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }


    onSubmit(e) {
        e.preventDefault()
    
        const user = {
          email: this.state.email,
          password: this.state.password
        }
    
        axios.put("http://localhost:5000/signup", user).then((resp) => {
            if (resp["result"] === "SUCCESS"){
                alert("Sign Up Successfull");
            }else{
                let err = resp["error"];
                this.setState({error : {err}});
            }
        })
      }
    render(){
        return(
            <div className="loginDiv">
                <Card className="loginCard" style={{  }}>
                <Card.Img className="userImg" variant="top" src={userImage} />
                <Card.Body>
                    <Card.Title style={{fontSize:"30px", textAlign:"center"}}>Sign Up</Card.Title>
                    <Form onSubmit={this.onSubmit}>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control name="email" type="email" placeholder="Enter email" onChange={this.onChange}/>
                            <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control name="password" type="password" placeholder="Password"  onChange={this.onChange} />
                        </Form.Group>
                        {/* <Form.Group controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group> */}
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

export default SignupComponent;