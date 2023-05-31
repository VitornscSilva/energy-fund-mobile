import {useNavigation} from '@react-navigation/core';
import React, {useCallback, useRef, useState} from 'react';
import {View, KeyboardAvoidingView, Platform} from 'react-native';
import {ScrollView, TextInput} from 'react-native-gesture-handler';
import {useDispatch} from 'react-redux';
import {Form} from '@unform/mobile';
import {FormHandles} from '@unform/core';
import * as Yup from 'yup';

import {Button} from '../../components/Button';
import {UnderlineText} from '../../components/UnderlineText';
import getValidationErrors from '../../utils/getValidationErrors';
import {Container, HaveAccount, HaveAccountText, Title} from './styles';
import CustomInput from '../../components/Input';
import {signUpRequest} from '../../store/modules/auth/actions';

interface SignUpFormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}
const EyeIcon = require('../../assets/eye.png');

export function SignUp(): JSX.Element {
  const [isPasswordVisible, setIsPasswordVisibel] = useState(false);
  const formRef = useRef<FormHandles>(null);
  const lastNameInputRef = useRef<TextInput>(null);
  const emailInputRef = useRef<TextInput>(null);
  const passwordInputRef = useRef<TextInput>(null);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const handleSignIn = useCallback(
    async (data: SignUpFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          firstName: Yup.string().required('Your first name is required'),
          lastName: Yup.string().required('Your last name is required'),
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

        await dispatch(signUpRequest(data));
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);

          return;
        }
      }
    },
    [dispatch],
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
              <Title>Create your account</Title>
            </View>

            <Form ref={formRef} onSubmit={handleSignIn} style={{width: '100%'}}>
              <CustomInput
                autoCorrect={false}
                returnKeyType="next"
                name="firstName"
                label="First Name"
                placeholder="Enter your first name"
                onSubmitEditing={() => {
                  lastNameInputRef.current?.focus();
                }}
              />

              <CustomInput
                ref={lastNameInputRef}
                autoCorrect={false}
                returnKeyType="next"
                name="lastName"
                label="Last Name"
                placeholder="Enter your last name"
                onSubmitEditing={() => {
                  emailInputRef.current?.focus();
                }}
              />

              <CustomInput
                ref={emailInputRef}
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
                secureTextEntry={!isPasswordVisible}
                returnKeyType="send"
                name="password"
                label="Password"
                placeholder="Minimum 8 characters"
                onSubmitEditing={() => {
                  formRef.current?.submitForm();
                }}
                icon={EyeIcon}
                onPress={() => setIsPasswordVisibel(prevState => !prevState)}
              />

              <Button
                onPress={() => {
                  formRef.current?.submitForm();
                }}>
                Create account
              </Button>
            </Form>

            <HaveAccount onPress={() => navigation.navigate('Login')}>
              <HaveAccountText>
                Already have an account?{' '}
                <UnderlineText colorText={'dark'}>Log in Here</UnderlineText>
              </HaveAccountText>
            </HaveAccount>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
}
