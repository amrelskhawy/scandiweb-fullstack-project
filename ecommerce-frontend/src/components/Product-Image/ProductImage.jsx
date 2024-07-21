import { Component } from "react";
import "./ProductImages.scss"


export class ProductImages extends Component {
  render() {
    return (
      <div className="product-images__wrapper">
        <div className="product-images__preview">
          {
            [1,2,3,4, 5].map(el => (

              <img key={el} className="image__preview" src="/Image.png" alt="" />
            ))
          }
        </div>
        <div className="product-images__mainImage">
          <img src="/Image.png" alt="" />
        </div>
      </div>
    )
  }
}