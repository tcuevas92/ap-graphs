import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NotFound extends Component {
    render() {
        return (
            <div className="text-center">
                <strong>There's nothing here!</strong>
                <br />
                <br />
                <Link to="/">Back to the home page</Link>
            </div>
        );
    }
}

export default NotFound;