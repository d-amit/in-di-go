import React from 'react';
import { connect } from 'react-redux';
import { scrollTo } from '../../redux/actions';
import Scroll from 'react-scroll';
import IntroView from './IntroView';
import MissionView from './MissionView';
import ServiceView from './ServiceView';

const Home = ({ dispatch }) => {

  let handleScrollToMission = (e) => {
    e.preventDefault()
    dispatch(scrollTo('mission'));
  }

  let handleScrollToService = (e) => {
    e.preventDefault()
    dispatch(scrollTo('services'));
  }

  return (
    <div className="icg-home-container">
      <IntroView handleScrollTo={handleScrollToService} />
      <ServiceView handleScrollTo={handleScrollToMission} />
      <MissionView />
    </div>
  )
};

export default connect(
  state => ({ scrollTo: state.scrollTo })
)(Home);
