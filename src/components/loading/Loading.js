import React, { PropTypes } from 'react';

import { View, Image } from 'react-native';

import style from './Loading.style';
import Loader from '../loading-animation/LoadingAnimation';

const Loading = (props) => {
  let showLoading = false;

  if (Array.isArray(props.actionType)) {
    props.actionType.forEach((action) => {
      showLoading = showLoading || props.loading[action];
    });
  } else {
    showLoading = props.loading[props.actionType];
  }

  return (
    showLoading ?
      <View style={style.root}>
        <View style={style.loadingImageContainer}>
          <Loader />
        </View>
      </View> : null
  );
};

export default Loading;
