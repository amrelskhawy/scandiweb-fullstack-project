import { Component } from "react";
import "./ProductImages.scss"
import { 
  IoIosArrowForward,
  IoIosArrowBack 
 } from "react-icons/io";


export class ProductImages extends Component {
  state = {
    images : this.props.images || [],
    selected : 0
  }

  render() {



    return (
      <div className="product-images__wrapper">
        <div className="product-images__preview max-h-fit">
          {
            this.state.images.map(image => (

              <img key={image} className="image__preview" src={image} alt="" />
            ))
          }
        </div>
        <div className="product-images__mainImage">
          {/* left Arrow */}
          <IoIosArrowBack />
          {/* Main Image */}
          <img className="w-full h-full max-h-[950px] object-cover object-top" src={this.state.images[
            this.state.selected
          ]} alt="" />

          {/* Right Arrow */}
          <IoIosArrowForward />
        </div>
      </div>
    )
  }
}