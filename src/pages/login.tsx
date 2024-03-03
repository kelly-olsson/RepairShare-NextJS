import React from 'react';
import { Container, Button } from 'react-bootstrap';
import Head from 'next/head';
import styles from "@/styles/Login.module.css";

export default function Login() {
    return (
    <>
      <Head>
        <title>Login</title>
        <meta name="login page" content="RepairShare" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="favicon.ico" />
      </Head>
      <div>
        <div>Login</div>
      </div>
    </>
  );
}