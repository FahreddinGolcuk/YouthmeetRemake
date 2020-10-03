import React from 'react';
import {TextInput as TextInputNative, View, ViewStyle} from 'react-native';
import _style from './style';
import {Colors} from '@Theme/index';
import {deviceHeight, normalize} from '@Utils/Device';

interface TextInputProps {
  placeholder: string;
  size?: 'xSmall' | 'small' | 'medium' | 'large' | 'xLarge';
  style?: ViewStyle;
  placeholderTextColor?: string;
  Icon?: React.FunctionComponent | any;
  onChange: (value: string) => void;
  secureTextEntry?: boolean;
  hasIcon?: boolean;
}

const TextInput: React.FunctionComponent<TextInputProps> = ({
  size = 'medium',
  placeholder,
  style = {},
  placeholderTextColor = Colors.text,
  Icon,
  onChange,
  secureTextEntry = false,
  hasIcon = false,
}): JSX.Element => {
  return (
    <View style={[_style.container, _style[size], style]}>
      {hasIcon && <Icon style={[_style.icon]} />}
      <TextInputNative
        secureTextEntry={secureTextEntry}
        onChangeText={onChange}
        style={{
          left: normalize(8),
          height: deviceHeight() / 15,
          width: '90%',
        }}
        placeholderTextColor={placeholderTextColor}
        placeholder={placeholder}
      />
    </View>
  );
};

export default TextInput;
