import { useContext } from "react";
import { Badge, Container, Navbar } from "react-bootstrap";
import { Button } from "reactstrap";
import { AuthContext, handleLogout } from "../../context/AuthContext";

const NavBar = () => {
  const [state, dispatch] = useContext(AuthContext);
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <img
            alt=""
            src="/logo.svg"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          React Bootstrap
        </Navbar.Brand>
        {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
      </Container>
      <Badge>{state.user.email}</Badge>
      <Button
        className="m-2"
        color="info"
        outline
        onClick={() => dispatch(handleLogout())}
      >
        Logout
      </Button>
    </Navbar>
  );
};

export default NavBar;
