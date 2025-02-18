import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../App.css'

function Navbarsection() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container className='d-flex align-items-center'>
      <Navbar.Brand href="#logo">
        <img
          src={`${process.env.PUBLIC_URL}/logo.jpg`}
          width="110"
          height="100"
          className="d-inline-block align-top"
          alt=""
        />
      </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto gap-4">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#offering">Offering</Nav.Link>
            <Nav.Link href="#courses">Courses</Nav.Link>
            <Nav.Link href="#Reviews">Reviews</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbarsection;