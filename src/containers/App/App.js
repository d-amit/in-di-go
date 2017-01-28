import React from 'react';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import styles from './App.scss';

const title = `Indigo Consulting Group`;
const logoSrc = '../../assets/images/indigo_full_logo.png';

const App = () => (
  <div className={styles.icg}>

    <div style={{height: '300px', position: 'relative'}}>

      <Layout style={{background: 'url(http://www.getmdl.io/assets/demos/transparent.jpg) center / cover'}}>
        <Header transparent title={title} style={{color: 'white'}}>
          <img src={logoSrc} />
        </Header>
        <Drawer>
          <Navigation>
            <a href="">Link</a>
            <a href="">Link</a>
            <a href="">Link</a>
            <a href="">Link</a>
          </Navigation>
        </Drawer>
        <Content />
      </Layout>

    </div>

  </div>
);

export default App;
