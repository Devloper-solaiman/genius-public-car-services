import React, { useRef } from 'react';
import { Form, Button } from "react-bootstrap";
import './Login.css'
import { useNavigate } from "react-router-dom";

const Login = () => {
    const emailRef = useRef('')
    const passwordRef = useRef('')
    const navigate = useNavigate()
    const handleOnSubmit = (event) => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        console.log(email, password);
    }

    const handleNave = event => {
        navigate('/signup')
    }
    return (
        <div className="row toContainer">
            <div className="col-md-4 upToContainer"></div>
            <div className="col-md-4 ">
                <div className='mt-5 mb-5 login rounded p-5'>
                    <h1 className='text-info mb-4'>Login plse !!!!</h1>
                    <Form onSubmit={handleOnSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label> <h5 className='text-white'>Email address</h5> </Form.Label>
                            <Form.Control ref={emailRef} type="email" placeholder="Enter email" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label> <h5 className='text-white'>Password</h5> </Form.Label>
                            <Form.Control ref={passwordRef} type="password" placeholder="Password" />
                        </Form.Group>
                        <Button className='fs-4 mt-3 submitButton ' variant="dark" type="submit">
                            Submit
                        </Button>
                    </Form>
                    <p className='naveText' onClick={handleNave} >New to genius Car services? <span className='navigateText'>go to register</span> </p>
                </div>
            </div>
            <div className="col-md-4 upToContainer">.</div>
        </div>

    );
};

export default Login;