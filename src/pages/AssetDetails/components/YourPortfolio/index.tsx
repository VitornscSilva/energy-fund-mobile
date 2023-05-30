import React from 'react';
import {Image, Text} from 'react-native';
import {Button} from '../../../../components/Button';
import colors from '../../../../styles/colors';
import {
  InfoStatsContainer,
  ActionButton,
  YourPortfolioContent,
  YourPortfolioContentBottomText,
  YourPortfolioContentItem,
  YourPortfolioContentTopText,
  YourPortfolioTitle,
  YourPortfolioTitleContainer,
  ActionsContainer,
  InfoText,
  InfoContainer,
  InfoContent,
} from './styles';

const PortfolioIcon = require('../../../../assets/portfolio-icon.png');
const UpIcon = require('../../../../assets/up.png');

export function YourPortfolio(): JSX.Element {
  return (
    <InfoStatsContainer>
      <YourPortfolioTitleContainer>
        <Image source={PortfolioIcon} />
        <YourPortfolioTitle>Your Portfolio</YourPortfolioTitle>
      </YourPortfolioTitleContainer>

      <YourPortfolioContent>
        <YourPortfolioContentItem>
          <YourPortfolioContentTopText>18 credits</YourPortfolioContentTopText>
          <YourPortfolioContentBottomText color={colors.green}>
            <Image source={UpIcon} /> 8.41%
          </YourPortfolioContentBottomText>
        </YourPortfolioContentItem>
        <YourPortfolioContentItem>
          <YourPortfolioContentTopText>$328.14</YourPortfolioContentTopText>
          <YourPortfolioContentBottomText>
            Last purchase 28d ago
          </YourPortfolioContentBottomText>
        </YourPortfolioContentItem>
      </YourPortfolioContent>

      <ActionsContainer>
        <ActionButton type="white">Sell</ActionButton>
        <ActionButton type="green">Retire credits</ActionButton>
      </ActionsContainer>

      <InfoContainer>
        <InfoText>You’ve previously retired 28 credits of this asset</InfoText>

        <InfoContent>
          <InfoText>
            Please note that prices are for reference only and may vary at the
            time of excecuting a buy or sell order.
          </InfoText>
          <InfoText>
            The information provided is not investment advice, and should not be
            used as a recommendation to buy or sell assets.
          </InfoText>
        </InfoContent>
      </InfoContainer>

      <Button>Buy</Button>
    </InfoStatsContainer>
  );
}
