import styled from 'styled-components/native';
import colors from '../../styles/colors';

interface TextProps {
  colorText: 'dark' | 'light';
}

export const Text = styled.Text<TextProps>`
  text-decoration-line: underline;
  color: ${(props: TextProps) =>
    props.colorText === 'dark' ? colors.text_dark : colors.text_light};
`;
