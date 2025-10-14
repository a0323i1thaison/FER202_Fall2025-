import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Filter from "../components/Filter/MyFilter";
import NavBar from "../components/NavBar/MyNavBar";

export default function Home() {
  return (
    <>
      <NavBar />
      <Container className="mt-4">
        <Row>
          <Col md={3}>
            <Filter />
          </Col>
          <Col md={9}>
            <h2 className="mb-4">🎥 Movie Collection</h2>
            <p>Hiển thị danh sách phim tại đây (dữ liệu từ movies.js)...</p>
          </Col>
        </Row>
      </Container>
    </>
  );
}
