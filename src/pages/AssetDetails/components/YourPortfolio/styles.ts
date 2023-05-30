import styled from 'styled-components/native';
import {Button} from '../../../../components/Button';
import colors from '../../../../styles/colors';
import fontSizes from '../../../../styles/fontSizes';

interface InfoStatsItemTextProps {
  type?: 'title' | 'description';
}

interface YourPortfolioContentBottomTextProps {
  color?: string;
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

export const YourPortfolioTitleContainer = styled.View`
  flex-direction: row;
  gap: 7px;
  margin-bottom: 20px;
`;

export const YourPortfolioTitle = styled.Text`
  font-size: ${fontSizes.lg};
  font-weight: 600;
`;

export const YourPortfolioContentTopText = styled.Text`
  font-weight: 600;
  font-size: ${fontSizes['2xl']};
  line-height: 30px;
  text-align: right;
`;

export const YourPortfolioContent = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const YourPortfolioContentItem = styled.View`
  gap: 4px;
`;

export const YourPortfolioContentBottomText = styled.Text<YourPortfolioContentBottomTextProps>`
  font-weight: 400;
  font-size: ${fontSizes.sm};
  line-height: 18px;
  color: ${(props: YourPortfolioContentBottomTextProps) =>
    props.color ?? colors.text_light};
`;

export const ActionsContainer = styled.View`
  flex-direction: row;
  gap: 5px;
`;

export const ActionButton = styled(Button)`
  flex: 0.5;
  border: 1px solid ${colors.border_color};
`;

export const InfoContainer = styled.View`
  margin-top: 15px;
`;

export const InfoText = styled.Text`
  font-weight: 400;
  font-size: ${fontSizes.xxs};
  color: ${colors.text_light};
`;

export const InfoContent = styled.View`
  background: ${colors.gray};
  border-radius: 4px;
  padding: 10px;
  margin: 30px 0;

  gap: 10px;
`;
