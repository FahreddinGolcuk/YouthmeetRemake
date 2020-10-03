import React, {useState} from 'react';
import {Text} from 'react-native';
import {BackButton, Background, Button, TextInput} from '@Components/index';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Colors} from '@Theme/index';
import {normalize} from '@Utils/Device';

const RegisterScreen: React.FunctionComponent = (): JSX.Element => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Background>
      <BackButton />
      <Text>Register</Text>
      <TextInput
        hasIcon
        placeholder="Enter Name"
        Icon={() => (
          <Icon color={Colors.secondary} name="male" size={normalize(20)} />
        )}
        onChange={setName}
      />
      <TextInput
        hasIcon
        Icon={() => (
          <Icon
            color={Colors.secondary}
            name="user-circle"
            size={normalize(20)}
          />
        )}
        placeholder="Enter Email"
        onChange={setEmail}
      />
      <TextInput
        hasIcon
        Icon={() => (
          <Icon color={Colors.secondary} name="unlock" size={normalize(20)} />
        )}
        secureTextEntry
        placeholder="Enter Password"
        onChange={setPassword}
      />
      <Button
        title="Register"
        onPress={() => console.log(name, email, password)}
      />
    </Background>
  );
};

export default RegisterScreen;
