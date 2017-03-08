import React from 'react';
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
            <li><a className="hvr-pop" onClick={this.props.goToView.bind(this, 'HOME')}>Home</a></li>
            <li><a className="hvr-pop" onClick={this.props.goToView.bind(this, 'ABOUT')}>About</a></li>
            <li><a className="hvr-pop" onClick={this.props.goToView.bind(this, 'CONTACT')}>Contact</a></li>
          </ul>

          <a className="hvr-pop" onClick={this.props.goToView.bind(this, 'HOME')}>
            <div className="shortLogo">icg</div>
            <div className="header-title">Indigo Consulting Group</div>
          </a>

        </div>

      </header>
    );
  }

}

export default Header;
