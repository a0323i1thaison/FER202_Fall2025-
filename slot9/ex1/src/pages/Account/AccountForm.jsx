// src/pages/Account/AccountForm.jsx
import React from 'react';
import { Form, InputGroup, Row, Col } from 'react-bootstrap';

const AccountForm = () => {
  // isInvalidPasswordMatch: true để minh họa lỗi
  const isInvalidPasswordMatch = true;
  const isInvalidAnswer = true;
  return (
    <Form>
      <Form.Group className="mb-3">
        <Form.Label>Username</Form.Label>
        <InputGroup>
          <InputGroup.Text><i className="bi bi-person"></i></InputGroup.Text>
          <Form.Control type="text" placeholder="Choose a username" />
        </InputGroup>
      </Form.Group>

      <Row className="mb-3">
        <Form.Group as={Col}>
          <Form.Label>Password</Form.Label>
          <InputGroup>
            <InputGroup.Text><i className="bi bi-lock"></i></InputGroup.Text>
            <Form.Control type="password" placeholder="Enter password" required />
          </InputGroup>
        </Form.Group>

        <Form.Group as={Col}>
          <Form.Label>Confirm Password</Form.Label>
          <InputGroup hasValidation>
            <InputGroup.Text><i className="bi bi-lock-fill"></i></InputGroup.Text>
            <Form.Control 
              type="password" 
              placeholder="Confirm password" 
              required
              isInvalid={isInvalidPasswordMatch} // Viền đỏ
            />
            <Form.Control.Feedback type="invalid">
              Mật khẩu xác nhận không khớp.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      </Row>

      <Form.Group className="mb-3">
        <Form.Label>Secret Question</Form.Label>
        <Form.Select>
          <option>Select a secret question...</option>
          <option>What is your mother's maiden name?</option>
          <option>What was the name of your first pet?</option>
        </Form.Select>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Answer</Form.Label>
        <Form.Control 
          type="text" 
          placeholder="Enter your answer" 
          required 
          isInvalid={isInvalidAnswer} // Viền đỏ
        />
        <Form.Control.Feedback type="invalid">
            Câu trả lời bí mật là bắt buộc.
        </Form.Control.Feedback>
      </Form.Group>
    </Form>
  );
};

export default AccountForm;