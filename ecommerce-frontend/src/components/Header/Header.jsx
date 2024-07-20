import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Header.scss"

class Header extends Component {

  state = {
    navLinks: [
      {
        id: 1,
        title: 'Women',
        link: '/women',
        active: true
      },
      {
        id: 2,
        title: 'Men',
        link: '/men',
        active: false
      },
      {
        id: 3,
        title: 'Kids',
        link: '/kids',
        active: false
      },
    ]
  }

   componentDidUpdate(prevState) {
    console.log(prevState);
   }
  

  render() {


    return (
      <header className="header flex-center ">
        <div className="header-wrapper container">

          {/* Links */}

          <div className="links-container">
            {
              this.state.navLinks.map(navLink => (
                <Link
                  key={navLink.id}
                  data-testid={`${navLink.active ? 'active-' : ''}category-link`}
                  className={navLink.active ? 'link active' : 'link'}
                  to={navLink.link}
                >
                  {navLink.title}
                </Link>
              )
              )
            }
          </div>


          {/* Shop Icon */}
          <img height={41} width={41} src="Icon/a-logo.png" alt="" />

          {/* Cart Button */}
            <button
              
            >
              <img src="Icon/Empty Cart.png" alt="" />
            </button>

        </div>
      </header>
    )
  }
}

export default Header