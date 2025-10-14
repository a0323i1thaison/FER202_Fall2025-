// src/pages/Account/AccountPage.jsx 
// LƯU Ý: File này nằm trong thư mục 'Account'

import React, { useState } from 'react';
import { Container, Card, Nav, ProgressBar, Button, Row, Col } from 'react-bootstrap';

// Import các Form con (Sử dụng đường dẫn relative: './TênFile' vì nằm cùng thư mục)
import AboutForm from './AboutForm';
import AccountForm from './AccountForm';
import AddressForm from './AddressForm';

const AccountPage = () => {
  const [activeStep, setActiveStep] = useState(1);
  const totalSteps = 3;

  const handleNext = () => setActiveStep(prev => (prev < totalSteps ? prev + 1 : prev));
  const handlePrevious = () => setActiveStep(prev => (prev > 1 ? prev - 1 : prev));

  const progress = (activeStep / totalSteps) * 100;
  
  const steps = [
    { id: 1, title: 'About', icon: 'bi-person-circle', component: AboutForm },
    { id: 2, title: 'Account', icon: 'bi-lock', component: AccountForm },
    { id: 3, title: 'Address', icon: 'bi-geo-alt', component: AddressForm },
  ];

  const CurrentForm = steps.find(step => step.id === activeStep).component;

  return (
    // Bọc trang Account trong Container để căn giữa và tạo khoảng cách
    <Container className="my-5" style={{ maxWidth: '800px' }}>
      <Card>
        <Card.Header>
          <h4 className="text-center">Build Your Profile Wizard</h4>
          
          {/* Thanh Tiến Trình ProgressBar */}
          <ProgressBar now={progress} label={`${Math.round(progress)}%`} className="mb-4 mt-3" />
          
          {/* Nav Tabs */}
          <Nav variant="pills" justify>
            {steps.map(step => (
              <Nav.Item key={step.id}>
                <Nav.Link 
                  active={step.id === activeStep}
                  // Vô hiệu hóa việc chuyển tab bằng click nếu không phải tab hiện tại
                  disabled={step.id !== activeStep} 
                  className={step.id === activeStep ? 'text-primary' : 'text-secondary'}
                >
                  <i className={`bi ${step.icon} me-2`}></i> 
                  {step.title}
                </Nav.Link>
              </Nav.Item>
            ))}
          </Nav>
        </Card.Header>
        
        <Card.Body>
          {/* Hiển thị Form hiện tại */}
          <CurrentForm />
        </Card.Body>
        
        <Card.Footer>
          {/* Nút điều hướng */}
          <Row>
            <Col className="d-flex justify-content-between">
              {/* Previous Button (Disabled ở bước 1) */}
              <Button 
                variant="secondary" 
                onClick={handlePrevious} 
                disabled={activeStep === 1}
              >
                <i className="bi bi-arrow-left me-2"></i> Previous
              </Button>
              
              {/* Next/Finish Button */}
              {activeStep < totalSteps ? (
                <Button variant="primary" onClick={handleNext}>
                  Next <i className="bi bi-arrow-right ms-2"></i>
                </Button>
              ) : (
                <Button variant="success" onClick={() => alert('Đã hoàn thành Profile!')}>
                  <i className="bi bi-check-circle me-2"></i> Finish
                </Button>
              )}
            </Col>
          </Row>
        </Card.Footer>
      </Card>
    </Container>
  );
};

export default AccountPage;