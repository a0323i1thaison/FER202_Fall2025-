// src/pages/HomePage.jsx

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

// Import components và dữ liệu theo cấu trúc file mới nhất
import MyNavBar from '../components/NavBar/MyNavBar';
import MyFooter from '../components/Footer/MyFooter';
import MyFilter from '../components/Filter/MyFilter'; 
import HomeCarousel from '../components/Movie/HomeCarousel';
import MovieCard from '../components/Movie/MovieCard'; 

// SỬA LỖI: Dùng đường dẫn ĐÚNG và Named Import
import { movies as moviesData } from '../components/data/movies'; 

const HomePage = () => {
    // Chỉ lấy 3 phim đầu tiên để hiển thị (như trong ảnh mẫu)
    const moviesToShow = moviesData.slice(0, 3); 

    return (
        <>
            <MyNavBar /> 
            
            <Container fluid className="mt-4">
                <Row>
                    {/* CỘT LỌC (SIDEBAR) */}
                    <Col md={3} className="px-4">
                        <MyFilter />
                    </Col>
                    
                    {/* CỘT NỘI DUNG CHÍNH (Movie Collection) */}
                    <Col md={9}>
                        <h2 className="mb-4 text-center">
                            <i className="bi bi-film me-2"></i> Movie Collection
                        </h2>
                        
                        {/* Banner/Featured Movie (Pokemon) */}
                        <HomeCarousel /> 
                        
                        <h3 className="mt-5 mb-4 text-center text-muted">Featured Movies Collections</h3>
                        
                        <h3 className="mb-4">My movies</h3>
                        
                        {/* Danh sách phim - Lặp qua MovieCard */}
                        <div className="d-flex flex-wrap gap-4">
                            {moviesToShow.map(movie => (
                                <MovieCard 
                                    key={movie.id} 
                                    movie={movie} 
                                /> 
                            ))}
                        </div>
                    </Col>
                </Row>
            </Container>

            <MyFooter />
        </>
    );
};

export default HomePage;