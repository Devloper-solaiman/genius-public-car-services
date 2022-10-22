import React from 'react';
import { Button, Form } from "react-bootstrap";
import './SignUp.css'
import { useNavigate } from "react-router-dom";

const SignUp = () => {
    const navigate = useNavigate()

    const handleOnSubmitRegister = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const phone = event.target.phone.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        console.log(name, phone, email, password);
    }
    const handleNaveRegister = event => {
        navigate('/login')
    }

    return (
        <div className="bg-danger">
            <div className="container">
                <div className="row">
                    <div className="col-md-3"></div>
                    <div className="col-md-6">
                        <div className='mt-5 mb-5 signUpBox rounded p-5'>
                            <h1 className='text-info mb-4'>Register plse !!!!</h1>

                            <Form onSubmit={handleOnSubmitRegister}>
                                <Form.Group className="mb-3" controlId="formBasicText">
                                    <Form.Label> <h5 className='text-white'>your name</h5> </Form.Label>
                                    <Form.Control name='name' type="text" placeholder="Enter Your full mane" required />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicNumber">
                                    <Form.Label> <h5 className='text-white'>Your Phone number </h5> </Form.Label>
                                    <Form.Control name='phone' type="number" placeholder="+880 1 " required />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label> <h5 className='text-white'>Email address</h5> </Form.Label>
                                    <Form.Control name='email' type="email" placeholder="Enter email" required />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label> <h5 className='text-white'>Password</h5> </Form.Label>
                                    <Form.Control name='password' type="password" placeholder="Password" required />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label> <h5 className='text-white'>conform Password</h5> </Form.Label>
                                    <Form.Control type="password" placeholder="Password" required />
                                </Form.Group>
                                <p className='naveText' onClick={handleNaveRegister} >Allradye register? <span className='navigateText'>go to login</span> </p>
                                <Button className='fs-4 mt-3 signUpBtn' type="submit">
                                    Submit
                                </Button>
                            </Form>
                        </div>
                    </div>
                    <div className="col-md-3"></div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;