import { Component } from "react";
import { Link } from "react-router-dom";
import "./ProductDetails.scss"
import Button from "../../components/Button";
import { ProductImages } from "../../components/Product-Image/ProductImage";
import parse from 'html-react-parser';


class ProductDetails extends Component {

  state = {
    product: {
      "id": "jacket-canada-goosee",
      "name": "Jacket",
      "inStock": true,
      "gallery": [
        "https://images.canadagoose.com/image/upload/w_480,c_scale,f_auto,q_auto:best/v1576016105/product-image/2409L_61.jpg",
        "https://images.canadagoose.com/image/upload/w_480,c_scale,f_auto,q_auto:best/v1576016107/product-image/2409L_61_a.jpg",
        "https://images.canadagoose.com/image/upload/w_480,c_scale,f_auto,q_auto:best/v1576016108/product-image/2409L_61_b.jpg",
        "https://images.canadagoose.com/image/upload/w_480,c_scale,f_auto,q_auto:best/v1576016109/product-image/2409L_61_c.jpg",
        "https://images.canadagoose.com/image/upload/w_480,c_scale,f_auto,q_auto:best/v1576016110/product-image/2409L_61_d.jpg",
        "https://images.canadagoose.com/image/upload/w_1333,c_scale,f_auto,q_auto:best/v1634058169/product-image/2409L_61_o.png",
        "https://images.canadagoose.com/image/upload/w_1333,c_scale,f_auto,q_auto:best/v1634058159/product-image/2409L_61_p.png"
      ],
      "description": "<p>Awesome winter jacket</p>",
      "category": "clothes",
      "attributes": [
        {
          "id": "Size",
          "items": [
            {
              "displayValue": "Small",
              "value": "S",
              "id": "Small",
              "__typename": "Attribute"
            },
            {
              "displayValue": "Medium",
              "value": "M",
              "id": "Medium",
              "__typename": "Attribute"
            },
            {
              "displayValue": "Large",
              "value": "L",
              "id": "Large",
              "__typename": "Attribute"
            },
            {
              "displayValue": "Extra Large",
              "value": "XL",
              "id": "Extra Large",
              "__typename": "Attribute"
            }
          ],
          "name": "Size",
          "type": "text",
          "__typename": "AttributeSet"
        }
      ],
      "prices": [
        {
          "amount": 518.47,
          "currency": {
            "label": "USD",
            "symbol": "$",
            "__typename": "Currency"
          },
          "__typename": "Price"
        }
      ],
      "brand": "Canada Goose",
      "__typename": "Product"
    }
  }
  render() {
    const { name, prices, description } = this.state.product
    return (
      <>
        <div className="container">
          <div className="product-wrapper flex ">
            {/* Product Images */}
            <div className="images-container flex-1">
              <ProductImages />
            </div>
            <div className="content-container w-[540px] text-2xl grid gap-5">
              <h2 className="text-5xl mb-6 font-semibold">{name}</h2>

              {
                this.state.product.attributes.map(attr => {

                  const { id, name, items } = attr

                  return (

                    <div key={id} id={id} className="variant-section">
                      <h4 className="variant-section__title uppercase">{name} :</h4>
                      <div>
                        {
                          items.map(item => (
                            <span key={item.id} className="variant-item-span">{item.value}</span>
                          ))
                        }
                      </div>
                    </div>
                  )
                })
              }

              <div className="prices variant-section">
                <h4 className="variant-section__title">Price:</h4>
                <p className="price">{prices[0].currency.symbol}{prices[0].amount}</p>
              </div>


              <Button title="ADD TO CART" />

              <div className="desc leading-10 font-medium mt-8">
                {parse(description)}

              </div>

            </div>
          </div>
        </div>
      </>
    )
  }
}

export default ProductDetails