import React, {useState} from 'react';
import {Background, Button, TextInput} from '@Components/index';
import {Colors} from '@Theme/index';
import Icon from 'react-native-vector-icons/FontAwesome';
import {normalize} from '@Utils/Device';
import NavigationHelper from '@Plugins/NavigationHelper';
import {Text} from 'react-native';

const LoginScreen: React.FunctionComponent = (): JSX.Element => {
  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <Background>
      <TextInput
        hasIcon
        size="medium"
        onChange={setMail}
        Icon={() => (
          <Icon color={Colors.secondary} name="male" size={normalize(20)} />
        )}
        placeholder="E-mail"
      />
      <TextInput
        hasIcon
        secureTextEntry={true}
        onChange={setPassword}
        size="medium"
        Icon={() => (
          <Icon color={Colors.secondary} name="unlock" size={normalize(20)} />
        )}
        placeholder="Password"
      />
      <Button
        title="LOGIN"
        onPress={() => console.log(mail, password)}
        size="medium"
      />
      <Text
        onPress={() => NavigationHelper.navigate('ForgotPassword')}
        style={{color: Colors.secondary}}>
        Forgot Password
      </Text>
      <Button
        backgroundColor={Colors.fourth}
        title="REGISTER"
        onPress={() => NavigationHelper.navigate('Register')}
        size="medium"
      />
    </Background>
  );
};

export default LoginScreen;
