import { Component } from "react";
import { Link } from "react-router-dom";
import ProductCard from "../../components/product-card/ProductCard";
import "./CategoryPage.scss"

class CategoryPage extends Component {
  render() {
    return (
      <>
        <div className="container">
          <h2 className="text-4xl capitalize">{this.props.category}</h2>

          <div className="products-container">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </>
    )
  }
}

export default CategoryPage