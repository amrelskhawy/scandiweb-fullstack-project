import { Component } from "react";
import "./ProductCard.scss"
class ProductCard extends Component {

    state = {
        product : this.props.product || {}
    }

    render() {
        const mainImg = this.state.product.gallery.split(',')[0]

        return (
            <div className="product-card w-full  group hover:cursor-pointer hover:shadow-lg p-5 transition-all relative ">
                <img src={mainImg} alt="product image" className="w-full " />
                <div className="card-body mt-6">
                    <p className="text-2xl">{this.props.product.name}</p>
                    <span className="inline-block text-xl font-bold">
                        ${this.props.product.prices}
                    </span>
                </div>

                <button className="bg-mainColor transition-all hidden group-hover:flex cursor-pointer opacity-0 group-hover:opacity-100 justify-center items-center w-14 h-14 absolute rounded-full bottom-20 right-10 outline-[5px] outline  outline-white ">
                    <img width={30} className="relative top-1"  src="Icon/Vector.png" alt="" />
                </button>
            </div>
        )
    }
}

export default ProductCard