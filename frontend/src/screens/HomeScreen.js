import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import Products from "../components/Products";
import axios from "axios";

const HomeScreen = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get("/api/products");
      setProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <>
      <h6>Latest Products</h6>
      <Row>
        {products.map((product) => (
          <Col key={product._id} sm={12} md={8} lg={4} xl={3}>
            <Products product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomeScreen;
