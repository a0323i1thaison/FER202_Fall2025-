// src/pages/Account/AddressForm.jsx
import React from 'react';
import { Form, Row, Col } from 'react-bootstrap';

const AddressForm = () => {
  // isInvalidStreet: true để minh họa lỗi
  const isInvalidStreet = true;
  return (
    <Form>
      <Form.Group className="mb-3">
        <Form.Label>Street</Form.Label>
        <Form.Control 
          type="text" 
          placeholder="Enter street address" 
          required
          isInvalid={isInvalidStreet} // Viền đỏ
        />
        <Form.Control.Feedback type="invalid">
          Địa chỉ đường là bắt buộc.
        </Form.Control.Feedback>
      </Form.Group>

      <Row className="mb-3">
        <Form.Group as={Col}>
          <Form.Label>City</Form.Label>
          <Form.Control type="text" placeholder="Enter city" />
        </Form.Group>

        <Form.Group as={Col}>
          <Form.Label>Country</Form.Label>
          <Form.Select>
            <option>Choose...</option>
            <option>Vietnam</option>
            <option>USA</option>
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} md={4}>
          <Form.Label>Zip Code</Form.Label>
          <Form.Control type="text" placeholder="Enter zip code" />
        </Form.Group>
      </Row>
    </Form>
  );
};

export default AddressForm;