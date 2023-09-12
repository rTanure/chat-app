import { useContext } from "react";
import { Alert, Button, Form, Row, Col, Stack } from "react-bootstrap"
import { AuthContext } from "../context/AuthContext";

const Register = () => {

  const { registerData, updateRegisterData } = useContext(AuthContext)

  return (
    <>
      <Form>
        <Row style={{
          height: "100vh",
          justifyContent: "center",
          paddingTop: "10%"
        }}>
          <Col xs={6}>
            <Stack gap={3}>
              <h2>Register</h2>
              <Form.Control 
                type="text" 
                placeholder="name" 
                onChange={(e) => updateRegisterData({
                  ...registerData, name: e.target.value
                })}
              />
              <Form.Control 
                type="email" 
                placeholder="email" 
                onChange={(e) => updateRegisterData({
                  ...registerData, email: e.target.value
                })}
              />
              <Form.Control 
                type="password" 
                placeholder="password" 
                onChange={(e) => updateRegisterData({
                  ...registerData, password: e.target.value
                })}
              />
              <Button variant="primary" type="submit">
                Register
              </Button>
              <Alert variant="danger"><p>An error</p></Alert>
            </Stack>
          </Col>
        </Row>
      </Form>
    </>
  );
}
 
export default Register;