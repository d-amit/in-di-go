import React from 'react';
import { Link } from 'react-router';
import $ from 'jquery';

class Header extends React.Component {

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll.bind(this));
  }

  handleScroll() {
    if (window.scrollY < 100) {
      $('header').removeClass('header-active');
    } else {
      $('header').addClass('header-active');
    }
  }

  render() {
    return (
      <header className="transparent" data-aos="fade-down">

        <div className="icg-header">

          <ul className="navigation">
            <li><Link className="hvr-bob" to="/">Home</Link></li>
            <li><Link className="hvr-bob" to="/about">About</Link></li>
            <li><Link className="hvr-bob" to="/contactus">Contact</Link></li>
          </ul>

          <Link className="hvr-bob" to="/">
            <div className="shortLogo">icg</div>
            <div className="title">Indigo Consulting Group</div>
          </Link>

        </div>

      </header>
    );
  }

}

export default Header;
