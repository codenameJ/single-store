import React from "react";
import ProductDetail from "./ProductDetail";

const ProductList = () => {

  return (
    <div className="product-list-section">
      
        <div className="col-12">
        <div className="row">
       <ProductDetail/>
       <ProductDetail/>
       <ProductDetail/>
       <ProductDetail/>
       <ProductDetail/>
      </div>
      </div>
    </div>
  );
};

export default ProductList;
