import React from 'react';
import Head from 'next/head';
import { Container } from 'react-bootstrap';
import 'firebaseui/dist/firebaseui.css';
import Auth from '../components/Auth';
import styles from "@/styles/Login.module.css";

export default function LoginPage() {
    return (
    <>
      <Head>
        <title>Sign Up or Login!</title>
        <meta name="sign up or login page" content="RepairShare" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="favicon.ico" />
      </Head>
      <Container>
          <h1 id="welcome" className="display-4">Welcome to RepairShare!</h1>
          <div className={`${styles.callout} ${styles.info}`}><h4>New and Returning Users</h4> Use a sign in method to get started!</div>
      </Container>
      <Auth />
    </>
  );
}