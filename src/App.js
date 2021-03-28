import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import { Container, Form, Button, Carousel } from "react-bootstrap";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul className="nav">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/staff">The Staff</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/staff">
            <MeetStaff />
          </Route>
          <Route path="/services">
            <Services />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <Container>
      <h2>Family Forney Fotography</h2>
      <div style={{ display: "flex", justifyContent: "center"}}>
      <div style={{ maxWidth: "500px"}}>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={process.env.PUBLIC_URL + '/images/020.jpg'}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={process.env.PUBLIC_URL + '/images/022_(2).jpg'}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={process.env.PUBLIC_URL + '/images/E044.jpg'}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </div>
      </div>
    </Container>
  );
}

function About() {
  return (
    <Container>
      <h2>About</h2>
    </Container>
  );
}

function Contact() {
  return (
    <Container>
      <h1>Contact</h1>
      <h2>Phone: 509-820-0538</h2>
      <h2>
        <a href="mailto: forneyfamilyfotography@gmail.com">Email</a>
      </h2>
    </Container>
  );
}

function Services() {
  return (
    <Container>
      <h2>Services</h2>
    </Container>
  );
}

function MeetStaff() {
  return (
    <Container>
      <h2>Meet The Staff</h2>
    </Container>
  );
}

function Reviews() {
  return (
    <Form>
      <Button>Submit</Button>
    </Form>
  );
}
