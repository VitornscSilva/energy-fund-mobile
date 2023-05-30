import styled, {css} from 'styled-components/native';
import colors from '../../styles/colors';
import fontSizes from '../../styles/fontSizes';

interface TextInputContainerProps {
  isFocused: boolean;
  isErrored: boolean;
}

export const Container = styled.View`
  width: 100%;
  margin-bottom: 20px;
`;

export const Label = styled.Text`
  font-size: ${fontSizes.xxs};
  font-weight: 400;
  margin-bottom: 5px;
  color: ${colors.text_light};
`;

export const TextInputContainer = styled.View<TextInputContainerProps>`
  flex-direction: row;
  align-items: center;
  background-color: ${colors.gray};
  border-radius: 4px;
  padding: 0 10px;
  height: 48px;
  border-width: 2px;
  border-color: ${colors.gray};

  ${(props: TextInputContainerProps) =>
    props.isErrored &&
    css`
      border-color: ${colors.red};
    `}

  ${(props: TextInputContainerProps) =>
    props.isFocused &&
    css`
      border-color: ${colors.purple};
    `}
`;

export const TextInput = styled.TextInput`
  flex: 1;
  color: ${colors.text_dark};
  font-size: ${fontSizes.md};
`;
