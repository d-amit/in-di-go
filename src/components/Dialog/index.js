import React from 'react';

require('dialog-polyfill/dialog-polyfill.css');

class Dialog extends React.Component {

  render() {
    let { title, ...props } = this.props;
    let className = props.className ? `mdl-dialog ${props.className}` : 'mdl-dialog';
    return (
      <dialog className={className}>
        <h4 className="mdl-dialog__title">{title}</h4>
        {props.children}
      </dialog>
    );
  }

}

class DialogContent extends React.Component {

  render() {
    let className = this.props.className ? `mdl-dialog__content ${this.props.className}` : 'mdl-dialog__content';
    return (
      <div className={className}>{this.props.children}</div>
    );
  }

}

class DialogActions extends React.Component {

  render() {
    let className = this.props.className ? `mdl-dialog__actions ${this.props.className}` : 'mdl-dialog__actions';
    return (
      <div className={className}>{this.props.children}</div>
    );
  }

}

export { Dialog, DialogContent, DialogActions };
