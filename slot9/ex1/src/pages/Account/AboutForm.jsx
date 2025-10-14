// src/pages/Account/AboutForm.jsx
import React from 'react';
import { Form, Row, Col } from 'react-bootstrap';

const AboutForm = () => {
  // isInvalidEmail: true để minh họa trường bắt buộc có lỗi
  const isInvalidEmail = true; 
  return (
    <Form>
      <Row className="mb-3">
        <Form.Group as={Col}>
          <Form.Label>First Name</Form.Label>
          <Form.Control type="text" placeholder="Enter first name" />
        </Form.Group>

        <Form.Group as={Col}>
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="text" placeholder="Enter last name" />
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col}>
          <Form.Label>Email</Form.Label>
          <Form.Control 
            type="email" 
            placeholder="Enter email" 
            required
            isInvalid={isInvalidEmail} // Viền đỏ theo yêu cầu
          />
          <Form.Control.Feedback type="invalid">
            Email là trường bắt buộc.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col}>
          <Form.Label>Phone</Form.Label>
          <Form.Control type="tel" placeholder="Enter phone number" />
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} md={6}>
          <Form.Label>Age</Form.Label>
          <Form.Control type="number" placeholder="Enter age" />
        </Form.Group>
        
        <Form.Group as={Col} md={6}>
          <Form.Label>Avatar (File)</Form.Label>
          <Form.Control type="file" />
        </Form.Group>
      </Row>
    </Form>
  );
};

export default AboutForm;