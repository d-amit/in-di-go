import React from 'react';
import './Parrallax.scss';

const renderComponent = (defaultClassName, otherClassNames, props) => {
  let componentClassName = (otherClassNames !== undefined) ?
    `${defaultClassName} ${otherClassNames}` : `${defaultClassName}`;
  return <div {...props} className={componentClassName}> {props.children} </div>;
}

class ParallaxContainer extends React.Component {
  render() {
    return renderComponent(`parallax`, this.props.className, this.props);
  }
}

class ParallaxGroup extends React.Component {
  render() {
    return renderComponent(`parallax__group`, this.props.className, this.props);
  }
}

class ParallaxLayerFore extends React.Component {
  render() {
    return renderComponent(`parallax__layer parallax__layer--fore`, this.props.className, this.props);
  }
}

class ParallaxLayerBase extends React.Component {
  render() {
    return renderComponent(`parallax__layer parallax__layer--base`, this.props.className, this.props);
  }
}

class ParallaxLayerBack extends React.Component {
  render() {
    return renderComponent(`parallax__layer parallax__layer--back`, this.props.className, this.props);
  }
}

class ParallaxLayerDeep extends React.Component {
  render() {
    return renderComponent(`parallax__layer parallax__layer--deep`, this.props.className, this.props);
  }
}

export {
  ParallaxContainer,
  ParallaxGroup,
  ParallaxLayerFore,
  ParallaxLayerBase,
  ParallaxLayerBack,
  ParallaxLayerDeep
};
