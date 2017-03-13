import React from 'react';
import { Section, Card, TextField, Dialog, DialogContent, DialogActions } from '../../components';
import ThankYouSection from './ThankYouSection';
import MDL from 'material-design-lite/material.min.js';
import $ from 'jquery';
import dialogPolyfill from 'dialog-polyfill';


// TODO: update to use redux instead of component state
// TODO: maybe make a form component!
class ContactSection extends React.Component {

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

  componentDidMount() {
    componentHandler.upgradeDom();
  }

  showDialog() {
    let dialog = document.querySelector('dialog');

    dialogPolyfill.registerDialog(dialog);

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
    }
    else {
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

    return this.state.sent ? (
      <ThankYouSection id={this.props.id} className={sectionClass} />
    ) : (
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
                    <TextField floatingLabel fullWidth id="fullname" label="Name"
                      pattern="[A-Z,a-z, ]*" value={this.state.name}
                      onChange={this.handleChange.bind(this, 'name')}>
                    </TextField>
                  </div>

                  <div className="mdl-cell mdl-cell--4-col mdl-cell--8-col-tablet mdl-cell--4-col-phone">
                    <TextField floatingLabel fullWidth id="email" label="Email"
                      value={this.state.email} onChange={this.handleChange.bind(this, 'email')}>
                    </TextField>
                  </div>

                  <div className="mdl-cell mdl-cell--4-col mdl-cell--8-col-tablet mdl-cell--4-col-phone">
                    <TextField floatingLabel fullWidth id="phone" label="Phone" pattern="[0-9]*"
                      value={this.state.phone} onChange={this.handleChange.bind(this, 'phone')}>
                    </TextField>
                  </div>

                  <div className="mdl-cell mdl-cell--12-col mdl-cell--8-col-tablet mdl-cell--4-col-phone">
                    <TextField floatingLabel fullWidth
                      id="details" label="Tell us about your project" style={{height: '150px'}} rows= "5"
                      value={this.state.details} onChange={this.handleChange.bind(this, 'details')}>
                    </TextField>
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

        <Dialog className="error " title="Sorry...">
          <DialogContent>
            <p>{this.state.error}</p>
          </DialogContent>
          <DialogActions>
            <button type="button" className="mdl-button close">Close</button>
          </DialogActions>
        </Dialog>

      </Section>
    );
  }

}

export default ContactSection;
