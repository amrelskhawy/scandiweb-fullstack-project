import { Component } from "react";
import { Link } from "react-router-dom";


class NotFound extends Component {
    render() {
        return (
            <div>
                <h1>404</h1>
                <p>Not Found Page</p>
                <Link to={'/women'}>Back to Categories</Link>
            </div>
        )
    }
}

export default NotFound