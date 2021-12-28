import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Alert,
  Badge,
  Button,
  Card,
  CardBody,
  Form,
  FormGroup,
  Input,
  Label,
} from "reactstrap";
import { AuthContext, handleLogin } from "../../context/AuthContext";

import { loginEmail, loginPassword } from "../../constants/constants";
import CardHeader from "react-bootstrap/esm/CardHeader";

function Login() {
  const [state, dispatch] = useContext(AuthContext);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(null);

    if (
      loginEmail === e.target.email.value &&
      loginPassword === e.target.password.value
    ) {
      dispatch(
        handleLogin({
          email: e.target.email.value,
          token: btoa(e.target.password.value),
        })
      );
    } else {
      setError("Enter valid credentials. ");
    }
  };

  if (state.user) {
    navigate("/dashboard");
  }

  return (
    <div className="d-flex h-100 justify-content-center align-items-center">
      <Card>
        <CardHeader>
          {error && <Alert color="danger">{error}</Alert>}
          <p className="m-0">
            {" "}
            <Badge>Email :</Badge> {loginEmail}
          </p>
          <p>
            <Badge>Password :</Badge> {loginPassword}
          </p>
        </CardHeader>
        <CardBody>
          <Form inline className="" onSubmit={handleSubmit}>
            <FormGroup className="mb-2 me-sm-2 mb-sm-0">
              <Label className="me-sm-2" for="exampleEmail">
                Email
              </Label>
              <Input
                required
                id="Email"
                name="email"
                placeholder="something@idk.cool"
                type="email"
              />
            </FormGroup>
            <FormGroup className="mb-2 me-sm-2 mb-sm-0">
              <Label className="me-sm-2" for="examplePassword">
                Password
              </Label>
              <Input
                required
                id="Password"
                name="password"
                placeholder="don't tell!"
                type="password"
              />
            </FormGroup>
            <Button className="mt-3" color="info" outline>
              Login
            </Button>
          </Form>{" "}
        </CardBody>
      </Card>
    </div>
  );
}

export default Login;
