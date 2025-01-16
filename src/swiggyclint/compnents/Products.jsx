import React from "react";
import { useState, useEffect } from "react";
import { API_URL } from "../../../API/api";
import { useParams } from "react-router-dom";
import Topbar from "./Topbar";

const Products = () => {
  const [products, setProducts] = useState([]);
  const { firmId,firmName} = useParams();

  const productHandler = async () => {
    try {
      const response = await fetch(`${API_URL}product/${firmId}/product`);
      const newproductdata = await response.json();
      setProducts(newproductdata.products);
      console.log(newproductdata.products);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    productHandler();
  }, [firmId]);
  return (
    <>
      
      <section className="productsection">
        <div className="topbar">
        <Topbar />
        </div>
        <h3>{firmName}</h3>
        {products.map((item) => {
          return (
            <div className="productBox" key={item._id}>
              <div className="pdoductdetails">
                <div><strong>{item.productName}</strong> </div>
                <div>₹ {item.price}</div>
                <div>{item.description}</div>
              </div>
              <div className="productGroup">
                <img
                  src={`${API_URL}product/uploads/${item.image}`}
                  alt="Image not Uploded"
                />
                <div className="addButton">Add</div>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default Products;
