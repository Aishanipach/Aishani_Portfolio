import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import git from "./images/github-mark-white.png"
import linke from "./images/icons8-linkedin-50.png"
import dev from "./images/dev-to.png"
import "./NavScroll.css"



function NavScroll() {

  const [navvbar, setNavbar] = useState(false);
  const changeBg = () => {
    if (window.scrollY >= 80) {
      setNavbar(true)
    }

    else {
      setNavbar(false);
    }
  }

  window.addEventListener('scroll', changeBg);



  return (

    <Navbar bg="transparent" expand="lg" fixed='top' className="text-light" style={{ padding: "0" }}>
      <Container id={navvbar ? 'navbaractive' : 'navbar'} /*className={`text-light ${navvbar ? 'm-1' : 'm-5'}`}*/ fluid>
        <Navbar.Brand className="text-light " style={{ fontWeight: "500", fontSize: "23px" }} href="/">Aishani Pachauri.</Navbar.Brand>
        <Navbar.Toggle className="bg-light" aria-controls="navbarScroll" />
        <Navbar.Collapse style={{ justifyContent: 'flex-end' }} id="navbarScroll">
          <Nav

            className="d-flex justify-content-end"
            style={{ maxHeight: '200px', maxWidth: "100vw", fontWeight: "300" }}
            navbarScroll
          >
            <Nav.Link className="text-light mx-2" href="/">  Work </Nav.Link>
            <Nav.Link className="text-light mx-2" href="blog">Blog</Nav.Link>
            <Nav.Link className="text-light mx-2" href="about" >About</Nav.Link>
            <Nav.Link className="text-light mx-2" target="_blank" href="https://drive.google.com/file/d/1a5Nax-2I-9oUyxS-76Ccbv3NhMRite_k/view?usp=share_link">Resume</Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
      <div style={{ position: "fixed", top: "20vh", left: "90vw" }}>
        <div style={{ display: "flex", flexDirection: "column", alignContent: "center" }}>
          <a href="https://github.com/Aishanipach/"><img src={git} style={{ height: "20px", width: "20px", margin: "0.5rem" }}></img></a>
          <a href="https://www.linkedin.com/in/aishanipachauri/"><img src={linke} style={{ height: "20px", width: "20px", margin: "0.5rem" }}></img></a>
          <a href="https://dev.to/aishanipach/"><img src={dev} style={{ height: "25px", width: "25px", margin: "0.4rem" }}></img></a>
          <p style={{ transform: "rotate(90deg)", marginTop: "40vh", color: "#CBFF4D" }} href="mailto:aishani.pachauri@gmail.com"> aishani.pachauri@gmail.com</p>
        </div>

      </div>

    </Navbar>


  );
}


export default NavScroll;
