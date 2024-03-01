import React from 'react';
import { Container, Button } from 'react-bootstrap';
import Head from 'next/head';
import styles from "@/styles/Home.module.css";

const HomePage = () => {
  return (
    <>
      <Head>
        <title>RepairShare</title>
        <meta name="landing page" content="RepairShare" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div style={{ backgroundImage: "url('./landingpageimage.jpeg')", height: "100vh", width: "100vw", backgroundRepeat: "no-repeat", backgroundAttachment: "fixed", backgroundSize: "cover" }}>
        <Container fluid className={`${styles.vertical_center} d-flex mx-auto justify-content-center align-items-center text-center flex-grow-1`}>
          <div>
            <h1 className={`${styles.headline} mb-2`}>WE CAN FIX IT TOGETHER</h1>
            <h4 className={`${styles.slogan} mb-2`}>REPAIR, SHARE, CARE</h4>
            <Button variant="outline-light" size="lg" className={`${styles.button} m-0`}>Create Account</Button>
            <Button variant="outline-light" size="lg" className={`${styles.button}`}>Log-In</Button>
          </div>
        </Container>
      </div>
      </>
  );
};

export default HomePage;
