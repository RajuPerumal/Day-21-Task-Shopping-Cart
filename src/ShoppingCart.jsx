import React, { useState } from 'react';
import './ShoppingCart.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function ShoppingCart() {
  const [cart, setCart] = useState([]);
  const [isCartVisible, setIsCartVisible] = useState(false);

  const products = [
    {
      id: 1,
      name: "Elegant Handbag",
      description: "A beautiful elegance luxury fashion handbag.",
      priceRange: "$150.00 - $250.00",
      imageUrl: "https://img.freepik.com/free-photo/beautiful-elegance-luxury-fashion-green-handbag_1203-7655.jpg?t=st=1723555307~exp=1723558907~hmac=b3b139de84826f849bc9936bb8e98e5e8d0873f3593016049f422164318d5b7a&w=360",
      isOnSale: false,
      rating: null,
    },
    {
      id: 2,
      name: "Stylish Sunglasses",
      description: "Fashionable sunglasses to protect your eyes from the sun.",
      price: "$45.00",
      oldPrice: "$60.00",
      imageUrl: "https://img.freepik.com/free-photo/sunglasses-luxury-fashion-stylish-black-frame_1203-2904.jpg?t=st=1723555502~exp=1723559102~hmac=a250c28ef14b711491c787b8b94cf15dc3f5b70b738c32a71d72a6e9b2762252&w=360",
      isOnSale: true,
      rating: 4,
    },
    {
      id: 3,
      name: "Classic Wristwatch",
      description: "A timeless classic wristwatch for all occasions.",
      price: "$200.00",
      imageUrl: "https://img.freepik.com/free-photo/close-up-stainless-steel-watch_1203-1693.jpg?t=st=1723555585~exp=1723559185~hmac=16dbd3b23e3c2d7be9ff5dbf40f1a8ebfcfbd5422f393b9187d3ae37dbca04f5&w=360",
      isOnSale: false,
      rating: 5,
    },
    {
      id: 4,
      name: "Trendy Sneakers",
      description: "Comfortable and stylish sneakers for everyday wear.",
      price: "$80.00",
      imageUrl: "https://img.freepik.com/free-photo/black-sport-shoes-isolated-white-background_1203-4283.jpg?t=st=1723555645~exp=1723559245~hmac=90252cb6514dbd2b4088cd362cf90bc78537af17cb1217db8d58084b344f1d72&w=360",
      isOnSale: true,
      rating: 4,
    },
    {
      id: 5,
      name: "Leather Wallet",
      description: "A premium leather wallet that combines style and utility.",
      price: "$60.00",
      imageUrl: "https://img.freepik.com/free-photo/black-leather-wallet-isolated-white-background_1203-1976.jpg?t=st=1723555768~exp=1723559368~hmac=64e985178e6c16951b477d9ab99d97a6aeb65ba2cc9cc07f8a38272c1cc3ee8c&w=360",
      isOnSale: false,
      rating: 5,
    },
    {
      id: 6,
      name: "Stylish Backpack",
      description: "A fashionable and durable backpack for daily use.",
      price: "$75.00",
      imageUrl: "https://img.freepik.com/free-photo/black-backpack-isolated-white-background_1203-2581.jpg?t=st=1723555860~exp=1723559460~hmac=a2303bb05ef8ff5e8b64c1e1e9272a38c344c6ed313c6c3294f8ec434cd0dba3&w=360",
      isOnSale: true,
      rating: 4,
    },
    {
      id: 7,
      name: "Fashionable Hat",
      description: "A stylish hat that complements any outfit.",
      price: "$35.00",
      imageUrl: "https://img.freepik.com/free-photo/black-fashion-hat-isolated-white-background_1203-3502.jpg?t=st=1723555960~exp=1723559560~hmac=87c84e7b5cfb4a1e4189cdb730c5a849dffb4f646ea84c70663f9bc99ca4a11b&w=360",
      isOnSale: false,
      rating: 4,
    },
    {
      id: 8,
      name: "Premium Laptop",
      description: "A high-performance laptop for work and play.",
      price: "$1200.00",
      imageUrl: "https://img.freepik.com/free-photo/black-laptop-isolated-white-background_1203-4632.jpg?t=st=1723556053~exp=1723559653~hmac=be9a6c4f3076b7e5b0ab6ff0b2d912162cfab80cc2a50e73c68d5f21343a45af&w=360",
      isOnSale: true,
      rating: 5,
    },
  ];
  
  
  

  const toggleCartVisibility = () => {
    setIsCartVisible(!isCartVisible);
  };

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(item => item.id === product.id);
      if (existingItem) {
        return prevCart.map(item => 
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(item => item.id === productId);
      if (existingItem.quantity > 1) {
        return prevCart.map(item => 
          item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
        );
      } else {
        return prevCart.filter(item => item.id !== productId);
      }
    });
  };

  const handleCloseModal = () => {
    setIsCartVisible(false);
  };

  return (
    <div id="webcrumbs">
      <div className="container-fluid bg-light">
        <header className="bg-white py-4 shadow-sm">
          <div className="container d-flex justify-content-between align-items-center">
            <div>
              <span className="font-weight-bold h5">Start Bootstrap</span>
              <nav className="d-inline-block ml-4">
                <a href="#" className="text-muted mx-2">Home</a>
                <a href="#" className="text-muted mx-2">About</a>
                <div className="dropdown d-inline-block">
                  <a href="#" className="text-muted dropdown-toggle" data-toggle="dropdown" aria-expanded="false">Shop</a>
                  <div className="dropdown-menu">
                    <a href="#" className="dropdown-item">All Products</a>
                    <a href="#" className="dropdown-item">New Arrivals</a>
                    <a href="#" className="dropdown-item">Sales</a>
                  </div>
                </div>
              </nav>
            </div>
            <div>
              <button className="btn btn-outline-secondary" onClick={toggleCartVisibility}>
                <i className="bi bi-cart"></i> Cart ({cart.reduce((total, item) => total + item.quantity, 0)})
              </button>
            </div>
          </div>
        </header>

        <section className="bg-dark text-white py-5 mb-5">
          <div className="container text-center">
            <h1 className="display-4">Shop in style</h1>
            <p className="lead">With this shop homepage template</p>
          </div>
        </section>

        <main className="container">
          <div className="row">
            {products.map((product) => {
              const inCart = cart.find(item => item.id === product.id);
              return (
                <div key={product.id} className="col-lg-3 col-md-4 col-sm-6 mb-4">
                  <div className="card h-100 shadow-sm">
                    <img
                      src={product.imageUrl}
                      className="card-img-top"
                      alt={product.name}
                    />
                    {product.isOnSale && (
                      <span className="badge badge-dark position-absolute top-0 end-0 m-2">Sale</span>
                    )}
                    <div className="card-body text-center">
  <h5 className="card-title">{product.name}</h5>
  <p>{product.description}</p>
  {product.rating && (
    <div className="mb-2">
      {[...Array(product.rating)].map((_, i) => (
        <i key={i} className="bi bi-star-fill text-warning"></i>
      ))}
    </div>
  )}
  <div className="d-flex justify-content-center">
    {product.oldPrice && (
      <p className="text-muted text-decoration-line-through me-2">{product.oldPrice}</p>
    )}
    <p className="text-primary">{product.price || product.priceRange}</p>
  </div>
  <button 
    className={`btn ${inCart ? 'btn-danger' : 'btn-primary'}`} 
    onClick={() => inCart ? removeFromCart(product.id) : addToCart(product)}
  >
    {inCart ? "Remove from Cart" : "Add to Cart"}
  </button>
</div>

                  </div>
                </div>
              );
            })}
          </div>
        </main>

        {/* Cart Modal */}
        <div className={`modal fade ${isCartVisible ? 'show' : ''}`} style={{ display: isCartVisible ? 'block' : 'none' }} id="cartModal" tabIndex="-1" aria-labelledby="cartModalLabel" aria-hidden={!isCartVisible}>
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="cartModalLabel">Your Cart</h5>
                <button type="button" className="btn-close" onClick={handleCloseModal}></button>
              </div>
              <div className="modal-body">
                {cart.length > 0 ? (
                  <ul className="list-group">
                    {cart.map(item => (
                      <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
                        {item.name} - {item.quantity}
                        <button className="btn btn-danger btn-sm" onClick={() => removeFromCart(item.id)}>Remove</button>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p>Your cart is empty.</p>
                )}
              </div>
              <div className="modal-footer">
              <button type="button" className="btn btn-primary" onClick={handleCloseModal}>Checkout</button>
                <button type="button" className="btn btn-secondary" onClick={handleCloseModal}>Close</button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default ShoppingCart;
