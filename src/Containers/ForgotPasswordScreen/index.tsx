import React, {useState} from 'react';
import {Text} from 'react-native';
import {BackButton, Background, Button, TextInput} from '@Components/index';
import NavigationHelper from '@Plugins/NavigationHelper';

const ForgotPasswordScreen: React.FunctionComponent = (): JSX.Element => {
  const [email, setEmail] = useState('');
  return (
    <Background>
      <BackButton />
      <TextInput placeholder="E-mail" onChange={setEmail} />
      <Button
        title="RESET"
        onPress={() => NavigationHelper.navigate('Login')}
      />
    </Background>
  );
};

export default ForgotPasswordScreen;
