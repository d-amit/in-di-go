import React from 'react';
import { Section, Card } from '../../components';
import MDL from 'material-design-lite/material.min.js';
import $ from 'jquery';

class FormSection extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name : '',
      email: '',
      phone: '',
      details : '',
      error : '',
      sent: false
    };
  }

  componentWillUpdate(nextProps, nextState) {
    if (nextState.error.length > 1) {
      this.showDialog();
    }
  }

  showDialog() {
    let dialog = document.querySelector('dialog');

    if (! dialog.showModal) {
      dialogPolyfill.registerDialog(dialog);
    }

    dialog.querySelector('.close').addEventListener('click', function() {
        dialog.close();
    });

    dialog.showModal();
  }

  handleChange(type, event) {
    this.setState({ [type] : event.target.value });
  }

  handleSubmit() {
    if (this.fieldAreValid()) {
      $.ajax({
          url: "https://formspree.io/info@in-di-go.com",
          method: "POST",
          data: {
            'name' : this.state.name,
            'email' : this.state.email,
            'phone' : this.state.phone,
            'details' : this.state.details
          },
          dataType: "json",
          success: this.handleSuccess.bind(this),
          error: this.handleError.bind(this)
      });
    } else {
      this.setState({
        error: 'Please complete the form.'
      });
    }
  }

  handleError(response) {
    if (response.responseText) {
      let errorObj = JSON.parse(response.responseText);
      this.setState(errorObj);
    }
  }

  handleSuccess(response) {
    //console.info(response.success);
    if (response.success) {
      this.setState({
        sent: true,
        error: ''
      });
    }
  }

  fieldAreValid() {
    return this.state.name.length > 2
      && this.state.email.length > 9
      && this.state.phone.length >= 10
      && this.state.details.length > 2;
  }

  render() {
    let sectionClass = `icg-form ${this.props.className}`;
    let aos = {
      type : "fade-up",
      duration: 1500
    };

    return (
      <Section id={this.props.id} className={sectionClass}>
        <p className="centered" data-aos="fade-in">
          Fill out the form below with some information about your project.
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
                      <input className="mdl-textfield__input" type="text" id="fullname" pattern="[A-Z,a-z, ]*" value={this.state.name} onChange={this.handleChange.bind(this, 'name')}/>
                      <label className="mdl-textfield__label" htmlFor="fullname">Name</label>
                    </div>
                  </div>

                  <div className="mdl-cell mdl-cell--4-col mdl-cell--8-col-tablet mdl-cell--4-col-phone">
                    <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label full-width">
                      <input className="mdl-textfield__input" type="text" id="email" value={this.state.email} onChange={this.handleChange.bind(this, 'email')}/>
                      <label className="mdl-textfield__label" htmlFor="email">Email</label>
                    </div>
                  </div>

                  <div className="mdl-cell mdl-cell--4-col mdl-cell--8-col-tablet mdl-cell--4-col-phone">
                    <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label full-width">
                      <input className="mdl-textfield__input" type="text" id="phone" pattern="[0-9]*" value={this.state.phone} onChange={this.handleChange.bind(this, 'phone')}/>
                      <label className="mdl-textfield__label" htmlFor="phone">Phone</label>
                    </div>
                  </div>

                  <div className="mdl-cell mdl-cell--12-col mdl-cell--8-col-tablet mdl-cell--4-col-phone">
                    <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label full-width">
                      <textarea className="mdl-textfield__input" type="text" rows= "5" id="details" value={this.state.details} onChange={this.handleChange.bind(this, 'details')}></textarea>
                      <label className="mdl-textfield__label" htmlFor="details">Tell us about your project</label>
                    </div>
                  </div>

                </div>

              </form>

              <button className="mdl-button mdl-js-button" onClick={this.handleSubmit.bind(this)}>
                <span className="hvr-wobble-horizontal">
                  <i className="material-icons">send</i> Send
                </span>
              </button>

            </Card>
          </div>
        </div>

        <dialog className="mdl-dialog">
          <h4 className="mdl-dialog__title">Sorry...</h4>
          <div className="mdl-dialog__content">
            <p>{this.state.error}</p>
          </div>
          <div className="mdl-dialog__actions">
            <button type="button" className="mdl-button close">Close</button>
          </div>
        </dialog>
      </Section>
    );
  }

}

export default FormSection;
