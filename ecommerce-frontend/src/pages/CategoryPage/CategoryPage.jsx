import { Component } from "react";
import { Link } from "react-router-dom";
import ProductCard from "../../components/product-card/ProductCard";
import "./CategoryPage.scss"

class CategoryPage extends Component {

  state = {
    products : []
  }

  componentDidMount() {
    fetch('http://localhost:5000/api/products.php')
    .then((response) => response.json())
    .then(productsList => {
        this.setState({ products: productsList });
    })
    .then(() => {
      console.log(this.state.products)
    })
  }

  render() {
    return (
      <>
        <div className="container">
          <h2 className="text-4xl capitalize">{this.props.category}</h2>

          <div className="products-container">
            {
              this.state.products.length > 0 && this.state.products.map(product => (
                <ProductCard product={product} key={product.id} />

              ))
            }
          </div>
        </div>
      </>
    )
  }
}

export default CategoryPage