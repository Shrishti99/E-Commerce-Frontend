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
    <div className="container mt-4">
      <h1 className="mb-4">Our Products</h1>

      {/* Search by ID Form */}
      <div className="row mb-4">
        <div className="col-md-6">
          <form onSubmit={handleSearch} className="d-flex gap-2">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Product ID"
              value={searchId}
              onChange={(e) => setSearchId(e.target.value)}
            />
            <button type="submit" className="btn btn-primary">
              Search
            </button>
          </form>
        </div>
      </div>
      
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
        {products.map((product) => (
          <div key={product.id} className="col-md-4 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.description}</p>
                <p className="card-text"><strong>Price: ${product.price}</strong></p>
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
    </div>
    )
}

export default App
