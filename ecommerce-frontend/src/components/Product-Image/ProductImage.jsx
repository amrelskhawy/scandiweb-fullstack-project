import { Component } from "react";
import "./ProductImages.scss"
import {
  IoIosArrowForward,
  IoIosArrowBack
} from "react-icons/io";


export class ProductImages extends Component {
  state = {
    images: this.props.images || [],
    selected: 0
  }


  slider(direction) {
    console.log(direction);
    console.log(this.state.selected);
    if (direction === 'forward' &&
      this.state.selected < this.state.images.length - 1) {
      this.setState({
        selected: this.state.selected + 1
      })
    }

    else if (direction === 'backward' &&
      this.state.selected > 0) {
      this.setState({
        selected: this.state.selected - 1
      })
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
          <IoIosArrowBack onClick={() => this.slider('backward')} className="carousel-arrow left-12" />
          {/* Main Image */}
          <img className="w-full h-full max-h-[950px] object-cover object-top" src={this.state.images[this.state.selected]} alt="product-image" />

          {/* Right Arrow */}
          <IoIosArrowForward onClick={() => this.slider('forward')} className="carousel-arrow right-12" />
        </div>
      </div>
    )
  }
}