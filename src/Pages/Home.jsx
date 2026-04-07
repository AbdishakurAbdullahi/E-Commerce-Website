import { getProducts } from "../Data/products";
import { Link } from "react-router-dom";
function Home() {
  
  const products = getProducts();
  return (
    <div className="page">
      {/* Hero */}
      <div className="home-hero">
        <h1 className="home-title">Welcome to ShopHub</h1>
        <p>Discover amazing products at great prices</p>
      </div>

      {/* Products */}
      <div className="container">
        <h2 className="page-title">Our products</h2>

        <div className="product-grid">
          {products.map((i) => (
            <div className="product-card" key={i.id}>
              <img className="product-card-image" src={i.image} alt="" />
              <div className="product-card-content">
                <h3 className="product-card-name">{i.name}</h3>
                <p className="product-card-price">$ {i.price}</p>

                <div className="product-card-actions">
                  <Link className="btn btn-secondary">View Details</Link>
                  <button className="btn btn-primary">Add to Cart</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
