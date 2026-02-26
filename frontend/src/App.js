import { useEffect, useState } from "react";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched products:", data);
        setProducts(data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  return (
    <div>
      <h1>Products</h1>

      {products.length === 0 ? (
        <p>No products found</p>
      ) : (
        products.map((product) => (
          <div key={product.id} style={{ border: "1px solid gray", margin: "10px", padding: "10px" }}>
            <h3>{product.name}</h3>
            <p>Price: ₹{product.price}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default App;