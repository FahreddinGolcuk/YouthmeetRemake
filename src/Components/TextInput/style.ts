import {ViewStyle, StyleSheet, TextStyle} from 'react-native';
import {Colors, Helpers} from '@Theme/index';
import {deviceHeight, normalize} from '@Utils/Device';
import Icon from 'react-native-vector-icons/FontAwesome';
import React from 'react';

interface StyleProps {
  container: ViewStyle;
  placeholder: TextStyle;
  xSmall: ViewStyle;
  small: ViewStyle;
  medium: ViewStyle;
  large: ViewStyle;
  xLarge: ViewStyle;
  icon: ViewStyle;
}

export default StyleSheet.create<StyleProps>({
  container: {
    backgroundColor: Colors.primary,
    height: deviceHeight() / 15,
    borderRadius: 6,
    shadowColor: Colors.secondary,
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowOpacity: 0.6,
    shadowRadius: 18,
    margin: normalize(8),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  placeholder: {
    color: Colors.primary,
    fontSize: normalize(20),
  },
  xSmall: {
    width: '20%',
  },
  small: {
    width: '30%',
  },
  large: {
    width: '50%',
  },
  medium: {
    width: '40%',
  },
  xLarge: {
    width: '70%',
  },
  icon: {
    margin: normalize(8),
  },
});
