import React from 'react';
import Animation from 'lottie-react-native';

import loaderSource from './loader.json'

class LoadingAnimation extends React.Component {
  componentDidMount = () => {
    this.animation.play();
  };

  render() {
    return (
      <Animation
        ref={animation => { this.animation = animation; }}
        style={{
          width: '100%',
          height: '100%',
        }}
        source={loaderSource}
        loop
      />
    )
  }
}

export default LoadingAnimation