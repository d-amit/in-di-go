import React from 'react';
import { Section, Card } from '../../components';
import MDL from 'material-design-lite/material.min.js';

class FormSection extends React.Component {

  render() {
    let sectionClass = `icg-form ${this.props.className}`;
    let aos = {
      type : "fade-up",
      duration: 1500
    };

    return (
      <Section id={this.props.id} className={sectionClass}>
        <p className="centered" data-aos="fade-in">
          Fill out the Project Inquiry form below with some information about your project.
        </p>
        <p className="centered" data-aos="fade-in">
          Please allow a couple of business days for me to respond.
        </p>

        <div className="form-container mdl-grid centered">
          <div className="mdl-cell mdl-cell--12-col mdl-cell--8-col-tablet mdl-cell--4-col-phone">
            <Card aos={aos} className="form-card mdl-shadow--3dp full-width">

              <form action="#">

                <div className="mdl-grid">
                  <div className="mdl-cell mdl-cell--4-col mdl-cell--8-col-tablet mdl-cell--4-col-phone">
                    <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label full-width">
                      <input className="mdl-textfield__input" type="text" id="fullname" />
                      <label className="mdl-textfield__label" htmlFor="fullname">Name</label>
                    </div>
                  </div>
                  <div className="mdl-cell mdl-cell--4-col mdl-cell--8-col-tablet mdl-cell--4-col-phone">
                    <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label full-width">
                      <input className="mdl-textfield__input" type="text" id="email" />
                      <label className="mdl-textfield__label" htmlFor="email">Email</label>
                    </div>
                  </div>
                  <div className="mdl-cell mdl-cell--4-col mdl-cell--8-col-tablet mdl-cell--4-col-phone">
                    <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label full-width">
                      <input className="mdl-textfield__input" type="text" id="phone" />
                      <label className="mdl-textfield__label" htmlFor="phone">Phone</label>
                    </div>
                  </div>
                  <div className="mdl-cell mdl-cell--12-col mdl-cell--8-col-tablet mdl-cell--4-col-phone">
                    <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label full-width">
                      <textarea className="mdl-textfield__input" type="text" rows= "5" id="details" ></textarea>
                      <label className="mdl-textfield__label" htmlFor="details">Tell us about your project</label>
                    </div>
                  </div>
                </div>

              </form>

            </Card>
          </div>
        </div>
      </Section>
    );
  }

}

export default FormSection;
