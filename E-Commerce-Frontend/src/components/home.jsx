// src/components/Home.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import samsung from "../assets/samsung.jpg";
import apple from "../assets/apple.jpeg";
import mac from "../assets/mac.png";
import sony from "../assets/sony.jpeg";
import lg from "../assets/lg.jpg";
import "./Home.css";

function Home() {
  const navigate = useNavigate();

  const products = [
    { img: samsung, name: "Samsung", caption: "Innovation at your fingertips" },
    { img: apple, name: "Apple", caption: "Think Different" },
    { img: mac, name: "Mac", caption: "Power and Performance" },
    { img: sony, name: "Sony", caption: "Be Moved" },
    { img: lg, name: "LG", caption: "Life's Good" },
  ];

  return (
    <div className="home-container">
     {/* Navbar */}
<nav className="navbar navbar-expand-lg navbar-dark bg-dark w-100 px-4">
  <a className="navbar-brand fw-bold" href="#">
    DEVSHRI
  </a>
  <button
    className="navbar-toggler"
    type="button"
    data-bs-toggle="collapse"
    data-bs-target="#navbarNav"
    aria-controls="navbarNav"
    aria-expanded="false"
    aria-label="Toggle navigation"
  >
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    {/* Removed ms-auto → so links stay beside brand */}
    <ul className="navbar-nav">
      <li className="nav-item">
        <a className="nav-link active" href="#">
          Home
        </a>
      </li>
     <li className="nav-item">
  <a
    className="nav-link"
    href="#"
    onClick={(e) => {
      e.preventDefault(); // stop page reload
      navigate("/products");
    }}
  >
    Products
  </a>
</li>

      <li className="nav-item">
        <a className="nav-link" href="#">
          About us
        </a>
      </li>
    </ul>
  </div>
</nav>


      {/* Brand Name */}
      <header className="text-center my-4">
        <h1 className="brand-name">DEVSHRI</h1>
      </header>

      {/* Carousel */}
      <div
        id="productCarousel"
        className="carousel slide w-100"
        data-bs-ride="carousel"
        data-bs-interval="1500" // auto-slide every 3s
      >
        <div className="carousel-inner">
          {products.map((product, index) => (
            <div
              key={index}
              className={`carousel-item ${index === 0 ? "active" : ""}`}
            >
              <img
                src={product.img}
                className="d-block w-100 carousel-img"
                alt={product.name}
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>{product.name}</h5>
                <p>{product.caption}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Controls */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#productCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#productCarousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>

        {/* Indicators */}
        <div className="carousel-indicators">
          {products.map((_, idx) => (
            <button
              key={idx}
              type="button"
              data-bs-target="#productCarousel"
              data-bs-slide-to={idx}
              className={idx === 0 ? "active" : ""}
              aria-current={idx === 0 ? "true" : undefined}
              aria-label={products[idx].name}
            ></button>
          ))}
        </div>
      </div>

      {/* View Products Button */}
      <div className="text-center my-4">
        <button
          className="btn btn-primary btn-lg"
          onClick={() => navigate("/products")}
        >
          View All Products
        </button>
      </div>

      {/* Footer */}
          <footer className="footer">
            <div className="container">
              <div className="row">
                {/* Column 1: Connect */}
                <div className="col-md-6 mb-3">
                  <h5>Connect with Us</h5>
                  <ul className="list-unstyled">
                    <li><a href="mailto:contact@yourstore.com"><i className="bi bi-envelope-fill me-2"></i> DevShri@gmail.com</a></li>
                    <li><a href="#"><i className="bi bi-telephone-fill me-2"></i> +91 98765 43210</a></li>
                    <li>
                      <a href="https://github.com/Shrishti99" target="_blank" rel="noopener noreferrer"><i className="bi bi-github me-2"></i> CEO GitHub Repo</a><br />
                      <a href="https://github.com/Dgit-10" target="_blank" rel="noopener noreferrer"><i className="bi bi-github me-2"></i> Employee GitHub Repo</a><br />
                      <a href="https://github.com/Shrishti99/E-Commerce-Frontend" target="_blank" rel="noopener noreferrer"><i className="bi bi-code-slash me-2"></i> Frontend Source Code</a><br />
                      <a href="https://github.com/Shrishti99/SpringBootHandsOn" target="_blank" rel="noopener noreferrer"><i className="bi bi-server me-2"></i> Backend Source Code</a>
                    </li>
                  </ul>
                </div>

                {/* Column 2: Info */}
                <div className="col-md-6 mb-3">
                  <h5>Information</h5>
                  <ul className="list-unstyled">
                    <li><a href="components/aboutUs.js"><i className="bi bi-info-circle me-2"></i> About Us</a></li>
                    <li><a href="#"><i className="bi bi-file-earmark-text me-2"></i> Terms & Conditions</a></li>
                    <li><a href="#"><i className="bi bi-shield-lock me-2"></i> Privacy Policy</a></li>
                  </ul>
                </div>
              </div>

              {/* Copyright */}
              <div className="text-center py-3 border-top mt-3">
                <p className="mb-0">&copy; 2025 DevShri E-Commerce. All rights reserved.</p>
              </div>
            </div>
          </footer>
    </div>
  );
}

export default Home;
