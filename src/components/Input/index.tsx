import React, {
  FC,
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import {useField} from '@unform/core';

import {
  Container,
  Label,
  TextInput as CustomTextInput,
  TextInputContainer,
} from './styles';

interface InputValueReference {
  value: string;
}

interface InputRef {
  focus(): void;
}

interface CustomInputProps {
  name: string;
  label: string;
  icon?: string;
  [rest: string]: any;
}

const CustomInput: FC<CustomInputProps> = forwardRef<
  InputRef,
  CustomInputProps
>(({label, name, ...rest}, ref) => {
  const inputElementRef = useRef<any>(null);

  const {registerField, defaultValue = '', fieldName, error} = useField(name);
  const inputValueRef = useRef<InputValueReference>({value: defaultValue});

  const [isFocused, setIsFocused] = useState(false);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
  }, []);

  useImperativeHandle(ref, () => ({
    focus() {
      inputElementRef.current.focus();
    },
  }));

  useEffect(() => {
    registerField<string>({
      name: fieldName,
      ref: inputValueRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <Container>
      <Label>{label}</Label>
      <TextInputContainer isFocused={isFocused} isErrored={!!error}>
        <CustomTextInput
          ref={inputElementRef}
          defaultValue={defaultValue}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          onChangeText={value => {
            inputValueRef.current.value = value;
          }}
          {...rest}
        />
      </TextInputContainer>
    </Container>
  );
});

export default CustomInput;
