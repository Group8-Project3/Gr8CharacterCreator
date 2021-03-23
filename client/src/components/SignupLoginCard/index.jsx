import React, { useState } from "react";
import { Card, Form, Col, Row } from "react-bootstrap";
import axios from "axios";
import DelegatedAuthList from "../DelegatedAuthList";

import {
  PaddedContainer,
  ResponsiveHeader4,
  VerticalCenterWrapper,
  SubmitButtom,
} from "./styles";

const SignUpLoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    const userData = {
      email,
      password,
    };
    axios
      .post("/api/auth/register_login", userData)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
        console.log(err.response);
      });
  };

  return (
    <Form onSubmit={onSubmit}>
      <Form.Group controlId="formBasicEmail">
        <Row>
          <Form.Label column xs="2" sm="1"></Form.Label>
          <Col xs="10" sm="11">
            <Form.Control
              type="email"
              placeholder="Enter email"
              onChange={(e) => {
                setEmail(e.target.value);
                console.log(email);
              }}
              required
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Col>
        </Row>
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Row>
          <Form.Label column xs="2" sm="1"></Form.Label>
          <Col xs="10" sm="11">
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Col>
        </Row>
      </Form.Group>
      <VerticalCenterWrapper>
        <SubmitButtom type="submit">Sign Up</SubmitButtom>
        <SubmitButtom href="http://localhost:3000/characterlist">Login</SubmitButtom>
      </VerticalCenterWrapper>
    </Form>
  );
};

const SignupLoginCard = () => {
  return (
    <Card>
      <Card.Header>
        <Card.Title>DnD Character Creator Sign up / Login</Card.Title>
      </Card.Header>
      <PaddedContainer>
        <ResponsiveHeader4>With email:</ResponsiveHeader4>
        <br />
        <SignUpLoginForm />
        <Row style={{ borderBottom: "1px solid #dee2e6" }} />
        <ResponsiveHeader4>
          Or with your favorite third party provider:
        </ResponsiveHeader4>
        <br />
        <DelegatedAuthList />
      </PaddedContainer>
    </Card>
  );
};

export default SignupLoginCard;
