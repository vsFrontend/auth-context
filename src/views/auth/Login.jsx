import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Card,
  CardBody,
  Form,
  FormGroup,
  Input,
  Label,
} from "reactstrap";
import { AuthContext, handleLogin } from "../../context/AuthContext";

function Login() {
  const [state, dispatch] = useContext(AuthContext);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(handleLogin({ email: e.target.email.value }));
  };

  if (state.user) {
    navigate("/dashboard");
  }
  return (
    <div className="d-flex h-100 justify-content-center align-items-center">
      <Card>
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
