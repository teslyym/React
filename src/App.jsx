import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function App() {

  return (
    <>

<Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Our Startup</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">About</Nav.Link>
            <Nav.Link href="#pricing">Work</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div id='cards'>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="/img/teslim.jpg" />
      <Card.Body>
        <Card.Title>Teslim</Card.Title>
        <Card.Text>
          Teslim is the Founder abd CEO of Our Startup
        </Card.Text>                      
        <Button variant="primary">MY Mail is here</Button>
      </Card.Body>
    </Card>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="/img/teslim.jpg" />
      <Card.Body>
        <Card.Title>OLayiwola</Card.Title>
        <Card.Text>
          He is the CTO of our company
        </Card.Text>
        <Button variant="primary">Connect with him here</Button>
      </Card.Body>
    </Card>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="/img/teslim.jpg" />
      <Card.Body>
        <Card.Title>Salahudeen</Card.Title>
        <Card.Text>
          He is the Operations Engineer
        </Card.Text>
        <Button variant="primary">You can find him here</Button>
      </Card.Body>
    </Card>

      </div>
      <br />
      
    </>
  )
}

export default App
