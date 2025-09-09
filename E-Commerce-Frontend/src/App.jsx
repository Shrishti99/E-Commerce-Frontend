import { useState } from 'react'
import './App.css'
import { useFetchProducts, useFetchProductById } from './components/products'
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import Chatbot from './components/Chatbot';

function App() {
  const { products, loading, error } = useFetchProducts();
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [searchId, setSearchId] = useState('');
  const { product, loading: productLoading, error: productError } = useFetchProductById(selectedProductId);

  // 🔹 Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 10;

  // Calculate pagination indexes
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  const totalPages = Math.ceil(products.length / productsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchId.trim()) {
      setSelectedProductId(searchId.trim());
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <div className="w-100">
        <div className="p-3">
          {/* Navigation Bar */}
          <nav className="navbar navbar-expand-lg" data-bs-theme="dark">
            <div className="container-fluid">
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarTogglerDemo01"
                aria-controls="navbarTogglerDemo01"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                <Link className="navbar-brand" to="/">DEVSHRI</Link>
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <Link className="nav-link active" to="/">Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link active" to="/products">Product</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/about">About us</Link>
                  </li>
                </ul>
                <form className="d-flex" role="search" onSubmit={handleSearch}>
                  <input
                    className="form-control me-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                    value={searchId}
                    onChange={(e) => setSearchId(e.target.value)}
                  />
                  <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
              </div>
            </div>
          </nav>

          <br />

          {/* Selected Product Details */}
          {selectedProductId && (
            <div className="mb-4">
              <h2>Selected Product Details</h2>
              {productLoading ? (
                <div>Loading product...</div>
              ) : productError ? (
                <div>Error loading product: {productError.message}</div>
              ) : product ? (
                <div className="card">
                  <div className="card-body">
                    <h3 className="card-title">{product.name}</h3>
                    <p className="card-text">{product.description}</p>
                    <p className="card-text"><strong>Price: ${product.price}</strong></p>
                    <button
                      className="btn btn-secondary"
                      onClick={() => setSelectedProductId(null)}
                    >
                      Back to All Products
                    </button>
                  </div>
                </div>
              ) : null}
            </div>
          )}

          {/* Product List */}
          <div className="row">
            {currentProducts.map((product) => (
              <div key={product.id} className="col-sm-6 mb-3 mb-sm-0">
                <div className="card text-bg-light-center mb-3" style={{ height: '350px' }}>
                  <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text">{product.description}</p>
                    <p className="card-text">
                      <strong>Price: ${product.price}</strong>
                    </p>
                    <button
                      className="btn btn-primary"
                      onClick={() => setSelectedProductId(product.id)}
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination Controls */}
          <div className="d-flex justify-content-center align-items-center my-3">
            <button
              className="btn btn-outline-primary me-2"
              onClick={handlePrevPage}
              disabled={currentPage === 1}
            >
              ◀ Prev
            </button>
            <span className="fw-bold">
              Page {currentPage} of {totalPages}
            </span>
            <button
              className="btn btn-outline-primary ms-2"
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
            >
              Next ▶
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
                    <li><Link to="/about"><i className="bi bi-info-circle me-2"></i> About Us</Link></li>
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
      </div>
      {/* <Chatbot /> */}
    </div>
  )
}

export default App
