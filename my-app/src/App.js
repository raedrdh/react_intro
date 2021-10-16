import "./App.css";
import React from "react";
import {
  Col,
  Form,
  Button,
  Navbar,
  Nav,
  FormControl,
  Container,
  Row,
  Card,
  ListGroupItem,
  ListGroup
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => (
  <div>
    <Navbar bg="primary" variant="dark">
      <Navbar.Brand href="#home">R-rock</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#features">skils</Nav.Link>
        <Nav.Link href="#pricing">experience</Nav.Link>
        <Nav.Link href="#pricing">contact</Nav.Link>
      </Nav>
      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-light">Search</Button>
      </Form>
    </Navbar>

    <Container id ='dev'>
      <Row>
        <Col sm={3} id='dev1'>
        <h1> experience </h1>
        <Card style={{ width: 'width: 100% !important;', backgroundColor:'transparent'}}>
  <Card.Img variant="top" src="data:image/png;base64,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" />
  <Card.Body>
    <Card.Title>GOMYCODE</Card.Title>
    <Card.Text>
      Still get course in this grat company
      learning web developpment JS full stuck
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem>start learning 31 August</ListGroupItem>
    <ListGroupItem>finish the fist of Jnuary</ListGroupItem>
    <ListGroupItem>learning web developpment JS</ListGroupItem>
  </ListGroup>
  <Card.Body>
    <Card.Link href="#">See more</Card.Link>
    <Card.Link href="#">GOMYCODE</Card.Link>
  </Card.Body>
</Card>
        </Col>
        <Col sm={7} id="dev2">
          <div id="f">
            <h1> Introduction </h1>
            <p>Hello my name is Raed Rdhaounia</p>
            <p>
              I am a junor web developper not yet finishing my lessons but not
              longer to.
            </p>
            <p>
              I had studied physics sciences like a student ay the university
              with a good range in the last year.
            </p>
            <p>
              My cv will be able to sent if ouare interresting in my skills and
              your needs.
            </p>
            <p>Enjoy making a visit and just don't forget to keep in touch. </p>
          </div>
          <Form id="fo">
            <Form.Row>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
            </Form.Row>

            <Form.Group controlId="formGridAddress1">
              <Form.Label>Address</Form.Label>
              <Form.Control placeholder="1234 Main St" />
            </Form.Group>

            <Form.Row>
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>City</Form.Label>
                <Form.Control />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>State</Form.Label>
                <Form.Control as="select" defaultValue="Choose...">
                  <option>Choose...</option>
                  <option>...</option>
                </Form.Control>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridZip">
                <Form.Label>Zip</Form.Label>
                <Form.Control />
              </Form.Group>
            </Form.Row>

            <Form.Group id="formGridCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
        <Col sm={2} id='dev3'>
          <h1> skills </h1>
          <Card style={{ width: 'width: 100% !important;' }}>
  <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png" />
  <Card.Body>
    <Card.Title >HTML</Card.Title>
    <Card.Text>
    HyperText Markup Language
    </Card.Text>
    <Card.Link href="#">See more</Card.Link>
  </Card.Body>
</Card>
          </Col>
      </Row>
    </Container>
  </div>
);

export default App;
