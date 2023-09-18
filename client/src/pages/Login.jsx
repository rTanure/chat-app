import { useContext } from "react";
import { Alert, Button, Form, Row, Col, Stack } from "react-bootstrap";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const { loginData, updateLoginData, loginUser, loginError, isLoginLoading } =
    useContext(AuthContext);

  return (
    <>
      <Form onSubmit={loginUser}>
        <Row
          style={{
            height: "100vh",
            justifyContent: "center",
            paddingTop: "10%",
          }}
        >
          <Col xs={6}>
            <Stack gap={3}>
              <h2>Login</h2>
              <Form.Control
                type="email"
                placeholder="email"
                onChange={(e) =>
                  updateLoginData({ ...loginData, email: e.target.value })
                }
              />
              <Form.Control
                type="password"
                placeholder="password"
                onChange={(e) =>
                  updateLoginData({ ...loginData, password: e.target.value })
                }
              />
              <Button disabled={isLoginLoading} variant="primary" type="submit">
                { isLoginLoading ? "Loading" : "Login" }
              </Button>
              {loginError?.error && (
                <Alert variant="danger">
                  <p>{loginError.message}</p>
                </Alert>
              )}
            </Stack>
          </Col>
        </Row>
      </Form>
    </>
  );
};

export default Login;
