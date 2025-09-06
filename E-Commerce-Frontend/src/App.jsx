import { useState } from 'react'
import './App.css'
import { useFetchProducts, useFetchProductById } from './components/products'

function App() {
  const { products, loading, error } = useFetchProducts();
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [searchId, setSearchId] = useState('');
  const { product, loading: productLoading, error: productError } = useFetchProductById(selectedProductId);

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
      {/* <h1 className="mb-4">Our Products</h1> */}

      <div class="container-fluid">
        <div class="text-bg-secondary p-3">
          {/* Navigation Bar */}
          <nav class="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
            <div class="container-fluid">
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
                <a class="navbar-brand" href="#">DevShri Brand</a>
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">Home</a>
                  </li>
                   <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">Product</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">About us</a>
                  </li>
                </ul>
                <form class="d-flex" role="search">
                  <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                  <button class="btn btn-outline-success" type="submit">Search</button>
                </form>
              </div>
            </div>
          </nav>
          <br>
          </br>

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


          <div class="row">
            {products.map((product) => (
              <div key={product.id} class="col-sm-6 mb-3 mb-sm-0">
                <div class="card text-bg-light-center mb-3" style={{ height: '350px' }}>
                  <div class="card-body">
                    <h5 class="card-title" >{product.name}</h5>
                    <p class="card-text">{product.description}</p>
                    <p class="card-text">
                      <strong>Price: ${product.price}</strong>
                    </p>
                    <button
                      class="btn btn-primary"
                      onClick={() => setSelectedProductId(product.id)}
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}

            {/* Added the Footer Class */}
            <footer class="bg-dark text-light pt-4">
              <div class="container">
                <div class="row">
                  {/* <!-- Column 1: Connect --> */}
                  <div class="col-md-6 mb-3">
                    <h5>Connect</h5>
                    <ul class="list-unstyled">
                      <li><a href="mailto:contact@yourstore.com" class="text-light text-decoration-none">📧 DevShri@gamil.com</a></li>
                      <li><a href="#" class="text-light text-decoration-none">📱 +91 98765 43210</a></li>
                      <li>
                        <a href="https://github.com/Shrishti99" class="text-light me-2">🌐 CEO GitHub Repo</a><br></br>
                        <a href="https://github.com/Dgit-10" class="text-light me-2">📘 Employee GitHub Repo</a><br></br>
                        <a href="https://github.com/Shrishti99/E-Commerce-Frontend" class="text-light">📸 Source Code for FrontEnd</a><br></br>
                        <a href='https://github.com/Shrishti99/SpringBootHandsOn' class='text-light'>Source Code for Backend</a><br></br>
                      </li>
                    </ul>
                  </div>

                  {/* <!-- Column 2: Info / Other --> */}
                  <div class="col-md-6 mb-3">
                    <h5>Information</h5>
                    <ul class="list-unstyled">
                      <li><a href="components/aboutUs.js" class="text-light text-decoration-none">About Us</a></li>
                      <li><a href="#" class="text-light text-decoration-none">Terms & Conditions</a></li>
                      <li><a href="#" class="text-light text-decoration-none">Privacy Policy</a></li>
                    </ul>
                  </div>
                </div>

                {/* <!-- Copyright --> */}
                <div class="text-center py-3 border-top border-secondary mt-3">
                  <p class="mb-0">&copy; 2025 DevShri E-Commerce. All rights reserved.</p>
                </div>
              </div>
            </footer>

          </div>
        </div >
      </div>
    </div>
  )
}

export default App
