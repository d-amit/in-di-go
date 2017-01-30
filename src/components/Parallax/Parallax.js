import React from 'react';

class ParallaxContainer extends React.Component {
  render() {
    return <div className="parallax" {...this.props}>
      {this.props.children}
    </div>;
  }
}

class ParallaxGroup extends React.Component {
  render() {
    return <div className="parallax__group" {...this.props}>
      {this.props.children}
    </div>;
  }
}

class ParallaxLayerBase extends React.Component {
  render() {
    return <div className="parallax__layer parallax__layer--base" {...this.props}>
      {this.props.children}
    </div>;
  }
}

class ParallaxLayerBack extends React.Component {
  render() {
    return <div className="parallax__layer parallax__layer--back" {...this.props}>
      {this.props.children}
    </div>;
  }
}

class ParallaxLayerDeep extends React.Component {
  render() {
    return <div className="parallax__layer parallax__layer--deep" {...this.props}>
      {this.props.children}
    </div>;
  }
}

export {
  ParallaxContainer,
  ParallaxGroup,
  ParallaxLayerBase,
  ParallaxLayerBack,
  ParallaxLayerDeep
};
