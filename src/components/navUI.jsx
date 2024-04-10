import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavUI() {
  return (
    <Navbar expand="lg" className="fixed-top" style={{backgroundColor:'#000'}}>
      <Container>
        <Navbar.Brand href="#home" style={{color:'#fff', color:'#FFEA00'}}><h3>Roshith</h3></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link href="#skills" style={{color:'#fff', color:'#FFEA00'}}>Skills</Nav.Link>
            <Nav.Link href="#about" style={{color:'#fff', color:'#FFEA00'}}>About</Nav.Link>
            
            <Nav.Link href="#projects" style={{color:'#fff', color:'#FFEA00'}}>Projects</Nav.Link>
            <Nav.Link href="#gallery" style={{color:'#fff', color:'#FFEA00'}}>Gallery</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavUI;