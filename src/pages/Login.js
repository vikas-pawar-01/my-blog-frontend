import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { isLoogedIn, login, logout } from "./assignments/store/userSlice";

const Login = () => {
    const user = useSelector((state) => state.user.value);
    const dispatch = useDispatch();

    const loginHandler = () => {
        dispatch(login());
    }

    return (
        <Container fluid="sm">
            <Row className="justify-content-md-center">
                <Col xs lg="6">
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">

                            <Form.Label>Username</Form.Label>
                            <Form.Control type="text" placeholder="Username" />

                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />

                            <Button onClick={loginHandler} className="btn-margin-top" variant="primary">
                                Login
                            </Button>
                        </Form.Group>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default Login;