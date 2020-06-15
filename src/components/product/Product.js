import React, { Component } from "react";
import ProductList from "./ProductList";
class Product extends Component {
  render() {
    return (
      <div className="dashboard-container">
        <div className="row">
          <div className="col s12 m6">
              <ProductList/>
          </div>
        </div>
      </div>
    );
  }
}

export default Product;