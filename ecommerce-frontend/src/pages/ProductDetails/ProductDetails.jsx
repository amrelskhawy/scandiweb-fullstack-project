import { Component } from "react";
import { Link } from "react-router-dom";
import "./ProductDetails.scss"
import Button from "../../components/Button";

class ProductDetails extends Component {
  render() {
    return (
      <>
        <div className="container">
            <div className="product-wrapper">
                <div className="images-container"></div>
                <div className="content-container">
                    <h2>Running Shorts</h2>
                    <div className="sizes">
                        <h4>SIZE:</h4>
                        <div>
                            <span>XS</span>
                            <span>S</span>
                            <span>M</span>
                            <span>L</span>
                        </div>
                    </div>

                    <div className="colors">
                        <h4>Color:</h4>
                        <div>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>

                    <div className="price">
                        <h4>Price:</h4>
                        <p>$50.00</p>
                    </div>


                    <Button />


                    <p className="desc">
                        Find stunning women's cocktail dresses and party dresses. Stand out in lace and metallic cocktail dresses and party dresses from all your favorite brands.
                    </p>
                </div>
            </div>
        </div>
      </>
    )
  }
}

export default ProductDetails