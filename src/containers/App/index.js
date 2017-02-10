import React from 'react';
import AOS from 'aos/dist/aos';
require('aos/dist/aos.css');

import { Header } from '../../components';

class App extends React.Component {

  render() {

    return (
      <div className="icg icg-container">
        <Header />
        {this.props.children}
      </div>
    );

  }

}

export default App;
