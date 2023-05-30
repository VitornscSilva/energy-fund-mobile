import styled from 'styled-components/native';
import colors from '../../../../styles/colors';
import fontSizes from '../../../../styles/fontSizes';

interface InfoStatsItemTextProps {
  type?: 'title' | 'description';
}

export const InfoStatsItem = styled.View`
  gap: 5px;
`;

export const InfoStatsContainer = styled.View`
  padding: 40px 20px;
`;

export const InfoStatsItemText = styled.Text<InfoStatsItemTextProps>`
  font-size: ${fontSizes.sm};
  font-weight: 400;
  color: ${(props: InfoStatsItemTextProps) =>
    props.type === 'title' ? colors.text_light : colors.text_dark};
`;

export const InfoStatsContentSection = styled.View`
  margin-top: 20px;
  gap: 18px;
`;

export const InfoStatsContent = styled.View`
  flex-direction: row;
  gap: 50px;
`;

export const InfoStatsTitle = styled.Text`
  font-size: ${fontSizes.lg};
  font-weight: 600;
`;
