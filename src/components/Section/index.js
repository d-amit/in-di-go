import React from 'react';

class Section extends React.Component {

  render() {
    return (
      <section id={this.props.id} className={this.props.className}>
        {this.props.children}
      </section>
    );
  }

}

export default Section;
