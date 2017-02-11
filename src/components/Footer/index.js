import React from 'react';
require('./_footer.scss');

class Footer extends React.Component {

  render() {
    let footerClass = this.props.className ? `icg-footer ${this.props.className}` : 'icg-footer';
    return (
      <footer className={footerClass}>
        <div className="footer-container">
            <p>Copyright © 2017 ICG - Indigo Consulting Group, Inc. All rights reserved.</p>
        </div>
      </footer>
    );
  }

}

export default Footer;
