import React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import NavigationHelper from '@Plugins/NavigationHelper';
import {Helpers} from '@Theme/index';
import {normalize} from '@Utils/Device';
import Icon from 'react-native-vector-icons/FontAwesome';
import _style from './style';

interface BackButtonProps {
  onPress?: () => void;
  iconColor?: string;
  left?: number;
  top?: number;
}

const BackButton: React.FunctionComponent<BackButtonProps> = ({
  onPress = () => NavigationHelper.back(),
  left = normalize(10),
  top = normalize(10),
}): JSX.Element => (
  <TouchableOpacity
    onPress={onPress}
    style={{
      position: 'absolute',
      left,
      top,
      ...Helpers.maxZIndex,
    }}>
    <View style={[_style.container]}>
      <Icon name="arrow-left" size={normalize(16)} />
    </View>
  </TouchableOpacity>
);

export default BackButton;
