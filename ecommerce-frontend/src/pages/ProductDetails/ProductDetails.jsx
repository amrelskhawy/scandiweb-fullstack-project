import { Component } from "react";
import { Link } from "react-router-dom";
import "./ProductDetails.scss"
import Button from "../../components/Button";
import { ProductImages } from "../../components/Product-Image/ProductImage";
import parse from 'html-react-parser';


class ProductDetails extends Component {

  state = {
    product: {
      "id": "xbox-series-s",
      "name": "Xbox Series S 512GB",
      "inStock": false,
      "gallery": [
        "https://images-na.ssl-images-amazon.com/images/I/71vPCX0bS-L._SL1500_.jpg",
        "https://images-na.ssl-images-amazon.com/images/I/71q7JTbRTpL._SL1500_.jpg",
        "https://images-na.ssl-images-amazon.com/images/I/71iQ4HGHtsL._SL1500_.jpg",
        "https://images-na.ssl-images-amazon.com/images/I/61IYrCrBzxL._SL1500_.jpg",
        "https://images-na.ssl-images-amazon.com/images/I/61RnXmpAmIL._SL1500_.jpg"
      ],
      "description": "\n<div>\n    <ul>\n        <li><span>Hardware-beschleunigtes Raytracing macht dein Spiel noch realistischer</span></li>\n        <li><span>Spiele Games mit bis zu 120 Bilder pro Sekunde</span></li>\n        <li><span>Minimiere Ladezeiten mit einer speziell entwickelten 512GB NVMe SSD und wechsle mit Quick Resume nahtlos zwischen mehreren Spielen.</span></li>\n        <li><span>Xbox Smart Delivery stellt sicher, dass du die beste Version deines Spiels spielst, egal, auf welcher Konsole du spielst</span></li>\n        <li><span>Spiele deine Xbox One-Spiele auf deiner Xbox Series S weiter. Deine Fortschritte, Erfolge und Freundesliste werden automatisch auf das neue System übertragen.</span></li>\n        <li><span>Erwecke deine Spiele und Filme mit innovativem 3D Raumklang zum Leben</span></li>\n        <li><span>Der brandneue Xbox Wireless Controller zeichnet sich durch höchste Präzision, eine neue Share-Taste und verbesserte Ergonomie aus</span></li>\n        <li><span>Ultra-niedrige Latenz verbessert die Reaktionszeit von Controller zum Fernseher</span></li>\n        <li><span>Verwende dein Xbox One-Gaming-Zubehör -einschließlich Controller, Headsets und mehr</span></li>\n        <li><span>Erweitere deinen Speicher mit der Seagate 1 TB-Erweiterungskarte für Xbox Series X (separat erhältlich) und streame 4K-Videos von Disney+, Netflix, Amazon, Microsoft Movies &amp; TV und mehr</span></li>\n    </ul>\n</div>",
      "category": "tech",
      "attributes": [
        {
          "id": "Color",
          "items": [
            {
              "displayValue": "Green",
              "value": "#44FF03",
              "id": "Green",
              "__typename": "Attribute"
            },
            {
              "displayValue": "Cyan",
              "value": "#03FFF7",
              "id": "Cyan",
              "__typename": "Attribute"
            },
            {
              "displayValue": "Blue",
              "value": "#030BFF",
              "id": "Blue",
              "__typename": "Attribute"
            },
            {
              "displayValue": "Black",
              "value": "#000000",
              "id": "Black",
              "__typename": "Attribute"
            },
            {
              "displayValue": "White",
              "value": "#FFFFFF",
              "id": "White",
              "__typename": "Attribute"
            }
          ],
          "name": "Color",
          "type": "swatch",
          "__typename": "AttributeSet"
        },
        {
          "id": "Capacity",
          "items": [
            {
              "displayValue": "512G",
              "value": "512G",
              "id": "512G",
              "__typename": "Attribute"
            },
            {
              "displayValue": "1T",
              "value": "1T",
              "id": "1T",
              "__typename": "Attribute"
            }
          ],
          "name": "Capacity",
          "type": "text",
          "__typename": "AttributeSet"
        }
      ],
      "prices": [
        {
          "amount": 333.99,
          "currency": {
            "label": "USD",
            "symbol": "$",
            "__typename": "Currency"
          },
          "__typename": "Price"
        }
      ],
      "brand": "Microsoft",
      "__typename": "Product"
    }
  }
  render() {
    const { name, prices, description, gallery } = this.state.product
    return (
      <>
        <div className="container">
          <div className="product-wrapper flex ">
            {/* Product Images */}
            <div className="images-container flex-1">
              <ProductImages images={gallery} />
            </div>
            <div className="content-container w-[540px] text-2xl ">
              <h2 className="text-4xl mb-6 font-semibold">{name}</h2>

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
                {/* {parse(description)} */}
                {description.length > 300 ? parse(description.slice(0,300))  : description}

              </div>

            </div>
          </div>
        </div>
      </>
    )
  }
}

export default ProductDetails