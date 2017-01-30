import React from 'react';
import { Layout, Header, Navigation, Drawer, Content, Footer } from 'react-mdl';
import { Link } from 'react-router'
import Image from '../../components/Image/Image';
import './App.scss';

const title = `Indigo Consulting Group`;

export default class App extends React.Component {

  handleClick() {
    const layout = document.querySelector('.mdl-js-layout');
    layout.MaterialLayout.toggleDrawer();
  }

  render() {

    return <div className="icg">

      <Layout>

        <Header transparent title={title} style={{backgroundColor: '#1C3664'}} className="icg-header">
          <Image width={90} src={require('../../assets/images/logo_icg_white.svg')} />
        </Header>

        <Drawer>
          <Navigation>
            <Image width={'none'} src={require('../../assets/images/logo_icg.svg')} />
            <Link activeClassName="active" to="/" onClick={this.handleClick}>Home</Link>
            <Link activeClassName="active" to="about" onClick={this.handleClick}>About</Link>
            <Link activeClassName="active" to="contactus" onClick={this.handleClick}>Contact Us</Link>
          </Navigation>
        </Drawer>

        <Content>
          {this.props.children}
        </Content>

      </Layout>

    </div>;

  }

};
