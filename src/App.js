import "./styles.css";

import React, { useState, useEffect } from "react";
import GetData from "./api/GetData";
import ProductList from "./components/ProductList";
import { Toaster } from "react-hot-toast";

export default function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchMyAPI() {
      let response = await GetData();
      setProducts(response.data);
      setLoading(false);
    }
    fetchMyAPI();
  }, []);

  return (
    <div className="App">
      <ProductList
        loading={loading}
        products={products}
        setProducts={setProducts}
      />
      <Toaster />
    </div>
  );
}
