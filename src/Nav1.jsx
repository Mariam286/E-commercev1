import React, { useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import Offcanvas from "react-bootstrap/Offcanvas";
import './index.css'
import { Shanta } from "./Context";
function Nav1() {
 let { cartCount } = useContext(Shanta)
  return (
    <>
      {[false].map((expand) => (
        <Navbar key={expand} expand={expand / 2} className="bg-dark  ">
          <Container fluid className="d-flex justify-content-between">
             <div className="d-flex justify-content-around align-items-center ">
            <Navbar.Brand
              href="#"
              className="text-dark badge bg-info "
              style={{ fontSize: "30px" }}
            >
              KShop
            </Navbar.Brand>
            <div className="icon">
               <Link
                    to="/car"
                  >
                    <div className="position-relative mt-3">
            <i className="fa-solid fa-cart-shopping " style={{color: "#dbde19ff",fontSize: "30px" }}></i>
            <span className="position-absolute top-0 translate-middle badge bg-danger rounded-pill">{cartCount}</span>
            </div>
            </Link>
            </div>
            </div>
            <Navbar.Toggle
              aria-controls={`offcanvasNavbar-expand-${expand}`}
              className="bg-secondary bg-opacity-50 text-white"
            />
            
            <Navbar.Offcanvas
              className="bg-dark"
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title
                  id={`offcanvasNavbarLabel-expand-${expand}`}
                  className="text-dark badge bg-info fs-4"
                >
                  KShop
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Link className="text-white nav-link active fs-4">Home</Link>
                  <Link
                    to="/Clothes"
                    className="text-white nav-link active  fs-4"
                  >
                    Clothes
                  </Link>
                  <Link
                    to="/Beauty"
                    className="text-white nav-link active  fs-4"
                  >
                    Beauty
                  </Link>
                  <Link
                    to="/electronics"
                    className="text-white nav-link active  fs-4"
                  >
                    Electronics
                  </Link>
                  <Link
                    to="/furniture"
                    className="text-white nav-link active  fs-4"
                  >
                    Furniture
                  </Link>
                  <Link
                    to="/shoes"
                    className="text-white nav-link active  fs-4"
                  >
                    Shoes
                  </Link>
                  <Link
                    to="/groceries"
                    className="text-white nav-link active  fs-4"
                  >
                    Groceries
                  </Link>
                  <Link
                    to="/accessories"
                    className="text-white nav-link active  fs-4"
                  >
                    Accessories
                  </Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default Nav1;
