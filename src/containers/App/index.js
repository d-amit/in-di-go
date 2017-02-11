import React from 'react';
import AOS from 'aos/dist/aos';
require('aos/dist/aos.css');

import { Header, Footer } from '../../components';

class App extends React.Component {

  render() {

    return (
      <div className="icg icg-container">
        <Header />
        {this.props.children}
        <Footer className="centered"/>
      </div>
    );

  }

}

export default App;
