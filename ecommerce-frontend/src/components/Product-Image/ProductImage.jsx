import { Component } from "react";
import "./ProductImages.scss"
import { 
  IoIosArrowForward,
  IoIosArrowBack 
 } from "react-icons/io";


export class ProductImages extends Component {
  state = {
    images : this.props.images || [],
    // selected : 0
  }


  slider(direction) {
    if ( direction === 'forward' ) {
      this.setState = {
        // selected : this.state.selected + 1
      }
    }
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
          <IoIosArrowBack onClick={this.slider('forward')} className="carousel-arrow left-12" />
          {/* Main Image */}
          <img className="w-full h-full max-h-[950px] object-cover object-top" src={this.state.images[0]} alt="product-image" />

          {/* Right Arrow */}
          <IoIosArrowForward className="carousel-arrow right-12" />
        </div>
      </div>
    )
  }
}