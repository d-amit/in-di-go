import React from 'react';
import { Section, Button } from '../../components';

import { actions } from '../../redux';
import { connect } from 'react-redux';

const MissionSection = ({ className, id, view, onLinkClick }) => {

    let sectionClass = `icg-mission ${className}`;
    let aosButton = { type: 'fade-up' };

    return (
      <Section id={id} className={sectionClass}>

        <h2 className="centered" data-aos="fade-down">Let's Talk About Your Project</h2>

        <Button aos={aosButton}
          handleClick={() => { onLinkClick('CONTACT') }}
          className="centered hvr-grow">
          Start a Conversation
        </Button>

      </Section>
    );

}

const mapStateToProps = (state) => {
  return {
    view : state.view
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onLinkClick: (view) => {
      dispatch(actions.getActiveView(view))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MissionSection);
