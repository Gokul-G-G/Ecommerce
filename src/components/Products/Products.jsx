import React, { useEffect, useState } from "react";
import axios from "axios";
import "../Products/Products.css";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch products from the API
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="products-container">
      {loading ? (
        <p>Loading products...</p>
      ) : (
        <div className="products">
          {products.map((product) => (
            <div key={product.id} className="product">
              <img
                src={product.image}
                alt={product.title}
                className="product-image"
              />
              <div className="product-details">
                <h3>{product.title}</h3>
                <p>{product.description}</p>
                <p className="price">
                  <span>Rs </span>
                  <s>{product.price + 1000}</s> {product.price}/-
                </p>
                <button className="btn">
                  Add to Cart <i className="fa-solid fa-cart-shopping"></i>
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Products;
