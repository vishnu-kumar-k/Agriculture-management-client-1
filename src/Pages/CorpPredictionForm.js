import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import '../StyleSheet/Home.css'

function CropPredictionForm() {
  const [formData, setFormData] = useState({
    soilType: '',
    temperatureRange: '',
    precipitation: '',
    altitude: '',
    previousCrop: '',
    landSize: '',
    drainage: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // Display form data in console for example
    setFormData({
      soilType: '',
      pHLevel: '',
      temperatureRange: '',
      precipitation: '',
      farmingType: '',
      previousCrop: '',
      landSize: '',
      drainage: ''
    });
  };

  return (
    <Container className='predictcorp'>
      <Form onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="soilType">
            <Form.Label>Soil Type</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter soil type"
              value={formData.soilType}
              onChange={handleChange}
            />
          </Form.Group>

          
        </Row>

        <Row className="mb-3">
          
          <Form.Group as={Col} controlId="altitude">
            <Form.Label>FarmingType</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter FarmingType"
              value={formData.farmingType}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="precipitation">
            <Form.Label>Precipitation</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter precipitation"
              value={formData.precipitation}
              onChange={handleChange}
            />
          </Form.Group>
        </Row>

        <Row className="mb-3">
        <Form.Group as={Col} controlId="temperatureRange">
            <Form.Label>Temperature Range</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter temperature range"
              value={formData.temperatureRange}
              onChange={handleChange}
            />
            
          </Form.Group>

          <Form.Group as={Col} controlId="previousCrop">
            <Form.Label>Previous Crop</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter previous crop"
              value={formData.previousCrop}
              onChange={handleChange}
            />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="landSize">
            <Form.Label>Land Size</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter land size"
              value={formData.landSize}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="drainage">
            <Form.Label>Drainage</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter drainage"
              value={formData.drainage}
              onChange={handleChange}
            />
          </Form.Group>
        </Row>

        <Button variant="primary" type="submit">
          Predict Suitable Crop
        </Button>
      </Form>
    </Container>
  );
}

export default CropPredictionForm;
