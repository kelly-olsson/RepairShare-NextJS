import React from 'react';
import { Container, Button } from 'react-bootstrap';

const HomePage = () => {
  return (
    <div>
      <header style={{ backgroundImage: "url('./landingpageimage.jpeg')", height: "100vh", backgroundRepeat: "no-repeat", backgroundAttachment: "fixed", backgroundSize: "cover" }}>
        <Container className="d-flex justify-content-center align-items-center h-100">
          <div className="text-white text-center">
            <h1 className="mb-3">WE CAN FIX IT TOGETHER</h1>
            <h4 className="mb-3">REPAIR, SHARE, CARE</h4>
            <Button variant="outline-light" size="lg" className="m-2">Create Account</Button>
            <Button variant="outline-light" size="lg" className="m-2">Log-In</Button>
          </div>
        </Container>
      </header>
    </div>
  );
};

export default HomePage;
