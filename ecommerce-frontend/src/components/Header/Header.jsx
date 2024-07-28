import React, { Component } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Header.scss"

class Header extends Component {
  state = {
    navLinks: [
      {
        id: 1,
        title: 'Women',
        link: '/women',
        active: false
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

  componentDidMount() {
    this.updateActiveLink(this.props.location.pathname);
  }

  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      this.updateActiveLink(this.props.location.pathname);
    }
  }

  updateActiveLink = (currentPath) => {
    const updatedNavLinks = this.state.navLinks.map(link => ({
      ...link,
      active: link.link === currentPath
    }));

    this.setState({ navLinks: updatedNavLinks });
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
              ))
            }
          </div>
          {/* Shop Icon */}
          <img height={41} width={41} src="/Icon/a-logo.png" alt="" />
          {/* Cart Button */}
          <button>
            <img src="/Icon/Empty Cart.png" alt="" />
          </button>
        </div>
      </header>
    )
  }
}

// Wrapper component to provide router props to class component
function HeaderWrapper(props) {
  const location = useLocation();
  const navigate = useNavigate();

  return <Header {...props} location={location} navigate={navigate} />;
}

export default HeaderWrapper;