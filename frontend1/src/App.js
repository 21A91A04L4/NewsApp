import { useState } from "react";
import{BrowserRouter,Routes,Route, Navigate} from 'react-router-dom';
import Menu from "./Components/menu.js";
import Form1 from "./Components/form.js";
import { Link } from "react-router-dom";

import {
  Row,
  Col,
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  Dropdown,
  Container,
} from "react-bootstrap";

import NewsList from "./Components/NewsList";

function App() {
  const [category, setCategory] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const handleCategoryClick = (cetegory) => {
    setCategory(cetegory);
    setSearchTerm("");
  };
  const handleClick = (cetegory) => {
    setCategory(cetegory);
    setSearchTerm("");
  };

  const handleForm = () => {
    Navigate('/form')
  }
  const handleSearch = (event) => {
    event.preventDefault();
    setCategory("");
    setSearchTerm(event.target.search.value);
  };

  return (
    <>
     <BrowserRouter>
    <Menu/>
      <Routes>
      <Route path='/form' element={<Form1/>}/>
        </Routes>
      </BrowserRouter>
      {/* <Route path='/admin' element={<Form1 />} /> */}
      <Navbar bg="light" expand="lg" className="mb-4">
        <Container>
          <Navbar.Brand href="/" className="fw-bold fs-4">
            News App
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="navbar-nav" />

          <Navbar.Collapse id="navbar-nav">
            <Nav className="me-auto">
              <Dropdown>
                <Dropdown.Toggle variant="outline-primary">
                  Categories
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item onClick={() => handleCategoryClick("placements")}>
                    Placements
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={() => handleCategoryClick("Technicalhub")}
                  >
                    Technicalhub
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={() => handleCategoryClick("Events")}
                  >
                    Events
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => handleCategoryClick("Sports")}>
                    Sports
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={() => handleCategoryClick("Holidays")}
                  >
                    Holidays
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Nav>

            <Form onSubmit={handleSearch} className="d-flex">
              <FormControl
                type="text"
                placeholder="Search"
                className="me-2"
                name="search"
              />

              <Button variant="outline-primary" type="submit">
                Search
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container>
        <Row>
          <Col xs={12} md={3}>
            <h5>Categories</h5>
            <Nav className="flex-column">
              <Nav.Link onClick={() => handleCategoryClick("placements")}>
                Placements
              </Nav.Link>
              <Nav.Link onClick={() => handleCategoryClick("Technicalhub")}>
                Technicalhub
              </Nav.Link>
              <Nav.Link onClick={() => handleCategoryClick("Events")}>
                Events
              </Nav.Link>
              <Nav.Link onClick={() => handleCategoryClick("Sports")}>
                Sports
              </Nav.Link>
              <Nav.Link onClick={() => handleCategoryClick("Holidays")}>
                Holidays
              </Nav.Link>
              <Nav.Link onClick={() => handleForm()}>
                Admin
              </Nav.Link>
              <Nav.Link onClick={() => handleForm()}>
                Form
              </Nav.Link>
              {/* <Link to = '/form' className= 'link'>Admin</Link> */}
              {/* <Route path='/form' element={<Form1/>}/> */}
              {/* <Nav.Link  to="/form">
                 Admin
             </Nav.Link> */}
            </Nav>
          </Col>

          <Col xs={12} md={9}>
            <NewsList category={category} searchTerm={searchTerm} />
          </Col>
        </Row>
      </Container>
      
    </>
  );
}

export default App;
