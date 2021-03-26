import { Component } from "react";
import "./App.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seclectedColors: [
        { id: 1, hex: "#54c06c", isLocked: false },
        { id: 2, hex: "#e4d623", isLocked: false },
        { id: 3, hex: "#b5453f", isLocked: false },
        { id: 4, hex: "#e8630c", isLocked: false },
        { id: 5, hex: "#5d1170", isLocked: false },
      ],
    };
  }
  render() {
    return (
      <Container fluid>
        <Row>
          <Col className="text-center">
            <Button>Generate Colors</Button>
          </Col>
        </Row>
        <Row>
          <Col className=" bg-dark"> Color 1</Col>
          <Col className=" bg-dark"> Color 2</Col>
          <Col className=" bg-dark"> Color 3</Col>
          <Col className=" bg-dark"> Color 4</Col>
          <Col className=" bg-dark"> Color 5</Col>
        </Row>
        <div> Testing Bootstrapping</div>
      </Container>
    );
  }
}

export default App;
