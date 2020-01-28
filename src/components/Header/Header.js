import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';


class Header extends Component {
  renderAuthentificationLink = () => {
    if (this.props.isLoggedIn) {
      return (
        <li className="nav-item">
          <Link
            to="/"
            className="nav-link"
            type="button"
            onClick={() => this.props.signOutUser()}
          >
            Sign Out
          </Link>
        </li>
      );
    }
    return [
      <li key={1} className="nav-item">
        <Link to="/signin" className="nav-link">Sign In</Link>
      </li>,
      <li key={2} className="nav-item">
        <Link to="/signup" className="nav-link">Sign Up</Link>
      </li>
    ];
  }

  render() {
    return (
      <nav className="navbar navbar-expand navbar-light bg-light">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link">Home</Link>
            </li>
            {this.renderAuthentificationLink()}
          </ul>
        </div>
      </nav>
    );
  }
}

Header.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  signOutUser: PropTypes.func.isRequired
};

export default Header;
