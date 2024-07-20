import { Component } from "react";
import "./ProductCard.scss"
class ProductCard extends Component {



    render() {
        return (
            <div className="product-card group transition-all relative ">
                <img src="Image.png" alt="product image" className="w-full" />
                <div className="card-body">
                    <p>Running Short</p>
                    <span className="inline-block font-medium">
                        $50.00
                    </span>
                </div>

                <button className=" bg-mainColor transition-all group-hover:flex justify-center items-center w-14 h-14 absolute rounded-full bottom-8 right-8 outline-[5px] outline  outline-white hidden">
                    <img width={30} className="relative top-1"  src="Icon/Vector.png" alt="" />
                </button>
            </div>
        )
    }
}

export default ProductCard