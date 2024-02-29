import React from 'react';
import { Container, Button } from 'react-bootstrap';
import Head from 'next/head';
import styles from "@/styles/Home.module.css";

const HomePage = () => {
  return (
    <div>
      <Head>
        <title>RepairShare</title>
        <meta name="landing page" content="RepairShare" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header style={{ backgroundImage: "url('./landingpageimage.jpeg')", height: "100vh", backgroundRepeat: "no-repeat", backgroundAttachment: "fixed", backgroundSize: "cover" }}>
        <Container className="d-flex justify-content-center align-items-center h-100">
          <div className="text-white text-center">
            <h1 className={`${styles.headline} mb-3`}>WE CAN FIX IT TOGETHER</h1>
            <h4 className={`${styles.slogan} mb-3`}>REPAIR, SHARE, CARE</h4>
            <Button variant="outline-light" size="lg" className={`${styles.button} m-0`}>Create Account</Button>
            <Button variant="outline-light" size="lg" className={`${styles.button}`}>Log-In</Button>
          </div>
        </Container>
      </header>
    </div>
  );
};

export default HomePage;
