import React from 'react';
import Link from 'next/link';
import { Container, Button } from 'react-bootstrap';
import Head from 'next/head';
import styles from "@/styles/LandingPage.module.css";

export default function LandingPage() {
  return (
    <>
      <Head>
        <title>RepairShare</title>
        <meta name="landing page" content="RepairShare" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="favicon.ico" />
      </Head>
      <div className={styles.landing_bkg}>
        <Container fluid className={`${styles.vertical_center} d-flex mx-auto justify-content-center align-items-center text-center flex-grow-1`}>
          <div>
            <h1 className={`${styles.headline} mb-2`}>WE CAN FIX IT TOGETHER</h1>
            <h4 className={`${styles.slogan} mb-2`}>REPAIR, SHARE, CARE</h4>
            <Link href="/login" passHref legacyBehavior>
              <Button variant="outline-light" size="lg" className={`${styles.button} m-0`}>Create Account</Button>
            </Link>
            <Link href="/login" passHref legacyBehavior>
              <Button variant="outline-light" size="lg" className={`${styles.button}`}>Log-In</Button>
            </Link>
          </div>
        </Container>
      </div>
      </>
  );
}