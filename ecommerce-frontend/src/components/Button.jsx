import { Component } from "react";

class Button extends Component {
  render() {
    return (
      <button className="p-6 w-full bg-mainColor flex-center text-white font-bold">
        {this.props.title || 'Button'}
      </button>
    )
  }
}

export default Button