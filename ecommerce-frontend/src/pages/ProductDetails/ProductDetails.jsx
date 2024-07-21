import { Component } from "react";
import { Link } from "react-router-dom";
import "./ProductDetails.scss"
import Button from "../../components/Button";
import { ProductImages } from "../../components/Product-Image/ProductImage";


class ProductDetails extends Component {
  render() {
    return (
      <>
        <div className="container">
          <div className="product-wrapper flex ">
            {/* Product Images */}
            <div className="images-container flex-1">
              <ProductImages />
            </div>
            <div className="content-container w-[540px] text-2xl grid gap-5">
              <h2 className="text-5xl mb-6 font-semibold">Running Shorts</h2>
              <div className="sizes variant-section">
                <h4 className="variant-section__title">SIZE:</h4>
                <div>
                  {
                    ["XS", "S", "M", "L"]
                      .map(size => (
                        <span className="size-span">{size}</span>

                      ))
                  }
                </div>
              </div>

              <div className="colors variant-section">
                <h4 className="variant-section__title">Color:</h4>
                <div>
                  {
                    ["#D3D2D5", "#2B2B2B", "#0F6450"]
                      .map(color => (
                        <span key={'color-' + color} style={{
                          background: color
                        }} className={`color-span`} />

                      ))
                  }
                </div>
              </div>

              <div className="prices variant-section">
                <h4 className="variant-section__title">Price:</h4>
                <p className="price">$50.00</p>
              </div>


              <Button title="ADD TO CART" />

              <p className="desc leading-10 font-medium mt-8">
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