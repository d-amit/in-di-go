import React from 'react';
import SocialLogo from 'social-logos/build/';
import { Image } from '../../components';
require('./_footer.scss');

class Footer extends React.Component {

  render() {
    let footerClass = this.props.className ? `icg-footer ${this.props.className}` : 'icg-footer';
    return (
      <footer className={footerClass}>
        <div className="footer-content">
          <div className="footer-row">
            <Image className="footer-logo" width={250} mode="fill" src={require('../../assets/images/indigo_full_logo_white.svg')} />
            <ul className="footer-links">
              <li>
                <a target="_blank" href="https://github.com/d-amit/in-di-go">
                  <SocialLogo icon="github" size={ 48 } />
                </a>
              </li>
              <li>
                <a target="_blank" href="https://twitter.com/indigo_adaya">
                  <SocialLogo icon="twitter" size={ 48 } />
                </a>
              </li>
            </ul>
          </div>
          <div className="centered">
            <span className="madeWithLove">
              Made with <i className="material-icons">favorite</i> &nbsp;&nbsp;&nbsp;&nbsp;
            </span>
            <span className="copyright">© 2019 Indigo Consulting Group, Inc.</span>
          </div>
        </div>
      </footer>
    );
  }

}

export default Footer;
