import { useState } from "react";
import { Navbar, Nav, Button, Dropdown, Offcanvas } from "react-bootstrap";
import { Menu, User, LogOut } from "lucide-react";

function CustomNavbar() {
  const [show, setShow] = useState(false);

  return (
    <>
      <Navbar style={{ backgroundColor: "white" }} expand={false} className="shadow-sm px-3 d-flex justify-content-between">
        <Button variant="link" className="text-dark" onClick={() => setShow(true)}>
          <Menu size={24} />
        </Button>
        <Navbar.Brand href="#">Clean ULB</Navbar.Brand>
        <Dropdown align="end">
          <Dropdown.Toggle as={Button} variant="light" className="border-0">
            <User size={24} />
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item > My Profile</Dropdown.Item>
            <Dropdown.Item onClick={() => alert("Logging out...")}> <LogOut size={16} className="me-2" /> Logout</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Navbar>
      
      {/* Sidebar Menu */}
      <Offcanvas show={show} onHide={() => setShow(false)} placement="start">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">Profile</Nav.Link>
            <Nav.Link href="#">Settings</Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
export default CustomNavbar;