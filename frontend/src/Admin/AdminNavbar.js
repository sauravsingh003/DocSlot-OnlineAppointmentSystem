import React from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { NavLink } from 'react-router-dom';
import { Navbar, Container, Nav, Badge, Button } from 'react-bootstrap';
import { FaHome, FaUserCircle, FaSignOutAlt } from 'react-icons/fa';
import 'react-toastify/dist/ReactToastify.css';
import "./Styles.css";

function AdminNavbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.clear();
    navigate('/');
  };

  return (
    <div>
      <Navbar
        variant="dark"
        expand="lg"
        className="px-5 custom-navbar"
      >
        <Container fluid>
          <Navbar.Brand as={NavLink} to="/admin" className="d-flex align-items-center text-decoration-none">
            <span className="logo-style text-white">
              DocSlot
            </span>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="ms-auto d-flex align-items-center gap-3">
              <Nav.Item className="admin-user-info">
                <span className="admin-badge">
                  <FaUserCircle />
                  {sessionStorage.getItem("userName")}
                </span>
                <Button
                  variant="danger"
                  className="logout-btn"
                  onClick={handleLogout}
                >
                  <FaSignOutAlt /> Logout
                </Button>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <ToastContainer />
    </div>
  );
}

export default AdminNavbar;
