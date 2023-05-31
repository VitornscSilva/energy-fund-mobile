import styled from 'styled-components/native';
import {Button} from '../../../../components/Button';
import colors from '../../../../styles/colors';
import fontSizes from '../../../../styles/fontSizes';

interface TopContentColoredTextProps {
  isPositive?: boolean;
}

export const Container = styled.View``;

export const TopContainer = styled.View`
  padding: 26px 20px;
`;

export const TopContent = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 4px;
`;

export const TopContentText = styled.Text`
  font-size: ${fontSizes['2xl']};
  font-weight: 600;
`;

export const TopContentColoredText = styled.Text<TopContentColoredTextProps>`
  color: ${(props: TopContentColoredTextProps) =>
    props.isPositive ? colors?.green : colors.red};
`;
