import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import Modal from "../components/Modal";
import { useHttpClient } from "../hooks/http-hook";
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';

const Registration = () => {
    const { isLoading, error, sendRequest, clearError } = useHttpClient();

    const [errorMessage, setErrorMessage] = useState();
    const [successMessage, setSuccessMessage] = useState();

    const navigate = useNavigate();

    const refName = useRef('');
    const refEmail = useRef();
    const refPhone = useRef();
    const refPassword = useRef();
    const refConfirmPassword = useRef();
    const refCaptcha = useRef();

    useEffect(() => {
        setTimeout(() => {
            setSuccessMessage();
            setErrorMessage();
            clearError();
        }, 10000);
    });

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, []);

    const clearForm = () => {
        refName.current.value = '';
        refEmail.current.value = '';
        refPhone.current.value = '';
        refPassword.current.value = '';
        refConfirmPassword.current.value = '';
        refCaptcha.current.value = '';
    }

    const success = () => {
        setSuccessMessage('User registered successfully!');
        clearForm();
    }

    const handleRegistration = async event => {
        event.preventDefault();

        let name = refName.current.value;
        let email = refEmail.current.value;
        let phone = refPhone.current.value;
        let password = refPassword.current.value;
        let confirmPassword = refConfirmPassword.current.value;
        let captcha = refCaptcha.current.value;

        if (password !== confirmPassword) {
            setErrorMessage('Password and Confirm Password should be match!');
            return false;
        }

        if (validateCaptcha(captcha) == false) {
            setErrorMessage('Captcha does not match!');
            return false;
        }

        try {
            const dataResponse = await sendRequest(
                `${process.env.REACT_APP_BACKEND_URL}/api/user/registration`,
                'POST',
                JSON.stringify(
                    {
                        name: name,
                        email: email,
                        phone: phone,
                        password: password
                    }
                ),
                {
                    'Content-Type': 'application/json'
                }
            );
            // auth.login(dataResponse.userId, dataResponse.token);
            // navigate("/login");
            success();
        } catch (err) { }
    }

    return (
        <Modal>
            <Container fluid="sm">
                <Row className="justify-content-md-center">
                    <Col xs lg="6">
                        <h2>Registration Form:</h2>
                        {errorMessage && <div className="alert alert-danger" role="alert">
                            {errorMessage}
                        </div>}

                        {error && <div className="alert alert-danger" role="alert">
                            {error}
                        </div>}

                        {successMessage && <div className="alert alert-success" role="alert">
                            {successMessage}
                        </div>}

                        <Form onSubmit={handleRegistration}>
                            <Form.Group className="mb-3">

                                <Form.Label htmlFor="name">Name</Form.Label>
                                <Form.Control ref={refName} id="name" type="text" placeholder="Name" required />

                                <Form.Label htmlFor="email">Email</Form.Label>
                                <Form.Control ref={refEmail} type="email" placeholder="Email" required />

                                <Form.Label htmlFor="phone">Phone Number</Form.Label>
                                <Form.Control ref={refPhone} type="text" placeholder="Phone Number" required />

                                <Form.Label htmlFor="password">Password</Form.Label>
                                <Form.Control minLength="5" ref={refPassword} type="password" placeholder="Password" required />

                                <Form.Label htmlFor="cpassword">Confirm Password</Form.Label>
                                <Form.Control ref={refConfirmPassword} id="cpassword" type="password" placeholder="Confirm Password" required />

                                <br />
                                <div>
                                    <LoadCanvasTemplate />
                                    <Form.Control ref={refCaptcha} id="captcha" placeholder="Captcha" required />
                                </div>
                                <Button type="submit" className="btn-margin-top" variant="primary">
                                    Register
                                </Button>
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </Modal >
    )
}

export default Registration;