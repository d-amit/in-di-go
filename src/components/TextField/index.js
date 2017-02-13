import React from 'react';

class TextField extends React.Component {

  render() {
    let { id, rows, label, className, fullWidth, floatingLabel, ...props } = this.props;

    className += ' mdl-textfield mdl-js-textfield';

    if (fullWidth) {
      className += ' full-width'; // icg custom class
    }

    if (floatingLabel) {
      className += ' mdl-textfield--floating-label';
    }

    return (
      <div className={className}>
        { rows && rows.length > 0 ?
          ( <textarea className="mdl-textfield__input" type="text" {...props}></textarea>) :
          ( <input className="mdl-textfield__input" type="text" {...props}/> )
        }
        <label className="mdl-textfield__label" htmlFor={id}>{label}</label>
      </div>
    );
  }

}

export default TextField;
