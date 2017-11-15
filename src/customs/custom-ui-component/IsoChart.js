
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {  requireNativeComponent, View } from 'react-native';

const iface = {
  name: 'IsoChart',
  propTypes: {
    /*centerText: PropTypes.string,
    centerTextColor: PropTypes.string,
    centerTextSize: PropTypes.number,
    drawCenterText: PropTypes.bool,
    holeColor: PropTypes.string,
    holeRadius: PropTypes.number,
    drawHoleEnabled: PropTypes.bool,
    usePercentValues: PropTypes.bool,
    transparentCircleRadius: PropTypes.number,
    transparentCircleColor: PropTypes.string,
    transparentCircleAlpha: PropTypes.number,
    highlightPerTapEnabled: PropTypes.bool,
    rotationEnabled: PropTypes.bool,
    drawEntryLabels: PropTypes.bool,
    displayLegends: PropTypes.bool,
    drawValues: PropTypes.bool,
    data: PropTypes.array,*/
    ...View.propTypes // include the default view properties
  }
};

module.exports = requireNativeComponent('RCTIsoChart', iface);