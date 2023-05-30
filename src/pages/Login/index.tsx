import {useNavigation} from '@react-navigation/core';
import React, {useCallback, useRef} from 'react';
import {View, KeyboardAvoidingView, Platform} from 'react-native';
import {ScrollView, TextInput} from 'react-native-gesture-handler';
import {Form} from '@unform/mobile';
import {FormHandles} from '@unform/core';
import * as Yup from 'yup';

import {Button} from '../../components/Button';
import {UnderlineText} from '../../components/UnderlineText';
import getValidationErrors from '../../utils/getValidationErrors';
import {Container, CreateAccount, CreateAccountText, Title} from './styles';
import CustomInput from '../../components/Input';

interface SignInFormData {
  email: string;
  password: string;
}

export function Login(): JSX.Element {
  const formRef = useRef<FormHandles>(null);
  const passwordInputRef = useRef<TextInput>(null);
  const navigation = useNavigation();

  const handleSignIn = useCallback(
    async (data: SignInFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          email: Yup.string()
            .email('Inset a valid e-mail')
            .required('E-mail required'),
          password: Yup.string()
            .required('Password required')
            .min(8, 'Minimum 8 characters'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        navigation.navigate('Home');
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);

          return;
        }
      }
    },
    [navigation],
  );

  return (
    <>
      <KeyboardAvoidingView
        style={{flex: 1}}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        enabled>
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{flex: 1}}>
          <Container>
            <View>
              <Title>Login</Title>
            </View>

            <Form ref={formRef} onSubmit={handleSignIn} style={{width: '100%'}}>
              <CustomInput
                autoCorrect={false}
                autoCapitalize="none"
                keyboardType="email-address"
                returnKeyType="next"
                name="email"
                label="E-mail"
                placeholder="Enter your e-mail"
                onSubmitEditing={() => {
                  passwordInputRef.current?.focus();
                }}
              />
              <CustomInput
                ref={passwordInputRef}
                secureTextEntry
                returnKeyType="send"
                name="password"
                label="Password"
                placeholder="Minimum 8 characters"
                onSubmitEditing={() => {
                  formRef.current?.submitForm();
                }}
              />

              <Button
                onPress={() => {
                  formRef.current?.submitForm();
                }}>
                Login
              </Button>
            </Form>

            <CreateAccount onPress={() => navigation.navigate('SignUp')}>
              <CreateAccountText>
                Don’t have an account? <UnderlineText>Sign up</UnderlineText>{' '}
                here
              </CreateAccountText>
            </CreateAccount>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
}
