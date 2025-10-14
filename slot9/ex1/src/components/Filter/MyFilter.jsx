// src/components/Filter/Filter.jsx
import React from 'react';
import { Card, Form, Button } from 'react-bootstrap';

const Filter = () => {
  return (
    <Card className="mb-4">
      <Card.Header as="h5">Filter Movies</Card.Header>
      <Card.Body>
        {/* Search: Tìm kiếm theo title hoặc description */}
        <Form.Group className="mb-3">
          <Form.Label>Search</Form.Label>
          <Form.Control type="text" placeholder="Title, description, etc." />
        </Form.Group>

        {/* Filter: Lọc theo năm */}
        <Form.Group className="mb-3">
          <Form.Label>Filter by Year</Form.Label>
          <Form.Select>
            <option>All Years</option>
            <option value="<=2000">≤ 2000</option>
            <option value="2001-2015">2001 - 2015</option>
            <option value=">2015"> 2015</option>
          </Form.Select>
        </Form.Group>

        {/* Sorting: Sắp xếp */}
        <Form.Group className="mb-3">
          <Form.Label>Sorting</Form.Label>
          <Form.Select>
            <option value="year_desc">Year ↓</option>
            <option value="year_asc">Year ↑</option>
            <option value="title_asc">Title A → Z</option>
            <option value="title_desc">Title Z → A</option>
            <option value="duration_asc">Duration ↑</option>
            <option value="duration_desc">Duration ↓</option>
          </Form.Select>
        </Form.Group>

        <Button variant="primary" className="w-100">
          Apply Filters
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Filter;