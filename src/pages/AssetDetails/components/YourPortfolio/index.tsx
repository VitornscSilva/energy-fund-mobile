import React, {useMemo} from 'react';
import {Image} from 'react-native';
import {Button} from '../../../../components/Button';
import colors from '../../../../styles/colors';
import {compareLastPurchase} from '../../../../utils/compareLastPurchase';
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
const DownIcon = require('../../../../assets/down.png');
interface YourPortoflioProps {
  portfolio: {
    credits: number;
    amount: string;
    lastPurchase: string;
    increasement: number;
    retiredCredits?: number;
    isPositive?: boolean;
  };
}

export function YourPortfolio({portfolio}: YourPortoflioProps): JSX.Element {
  const color = useMemo(() => {
    if (!portfolio?.isPositive) {
      return colors.red;
    }
    return colors.green;
  }, [portfolio]);

  const ArrowIcon = useMemo(() => {
    if (!portfolio?.isPositive) {
      return DownIcon;
    }
    return UpIcon;
  }, [portfolio]);

  return (
    <InfoStatsContainer>
      <YourPortfolioTitleContainer>
        <Image source={PortfolioIcon} />
        <YourPortfolioTitle>Your Portfolio</YourPortfolioTitle>
      </YourPortfolioTitleContainer>

      <YourPortfolioContent>
        <YourPortfolioContentItem>
          <YourPortfolioContentTopText>
            {portfolio?.credits} credits
          </YourPortfolioContentTopText>
          <YourPortfolioContentBottomText color={color}>
            <Image source={ArrowIcon} /> {portfolio?.increasement}%
          </YourPortfolioContentBottomText>
        </YourPortfolioContentItem>
        <YourPortfolioContentItem>
          <YourPortfolioContentTopText>
            {portfolio?.amount}
          </YourPortfolioContentTopText>
          <YourPortfolioContentBottomText>
            Last purchase {compareLastPurchase(portfolio?.lastPurchase)}d ago
          </YourPortfolioContentBottomText>
        </YourPortfolioContentItem>
      </YourPortfolioContent>

      <ActionsContainer>
        <ActionButton type="white">Sell</ActionButton>
        <ActionButton type="green">Retire credits</ActionButton>
      </ActionsContainer>

      <InfoContainer>
        <InfoText>
          You’ve previously retired {portfolio?.retiredCredits ?? 0} credits of
          this asset
        </InfoText>

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
