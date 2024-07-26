import { Component } from "react";

class Button extends Component {
  render() {
    return (
      <button className=" w-full bg-mainColor flex-center text-white font-bold">
        {this.props.title || 'Button'}
      </button>
    )
  }
}

export default Button