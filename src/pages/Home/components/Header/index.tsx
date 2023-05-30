import React from 'react';
import {Image} from 'react-native';
import {
  EarnRewardsButton,
  EarnRewardsButtonText,
  HeaderAccountButton,
  HeaderBottomContainer,
  HeaderContainer,
  HeaderText,
  HeaderTopContainer,
  PortfolioContainer,
  PortfolioContent,
} from './styles';

const ProfileIcon = require('../../../../assets/profile-icon.png');
const ArrowDown = require('../../../../assets/arrow-down.png');
const BellIcon = require('../../../../assets/bell-icon.png');
const CoinIcon = require('../../../../assets/coin-icon.png');
const UpIcon = require('../../../../assets/up.png');

export function Header() {
  return (
    <HeaderContainer>
      <HeaderTopContainer>
        <Image source={ProfileIcon} />
        <HeaderAccountButton>
          <HeaderText>
            Account: $1,457.23
            <Image source={ArrowDown} />
          </HeaderText>
        </HeaderAccountButton>

        <Image source={BellIcon} />
      </HeaderTopContainer>
      <HeaderBottomContainer>
        <HeaderText type="portfolio">Portfolio</HeaderText>
        <PortfolioContainer>
          <PortfolioContent>
            <HeaderText type="portfolioAmount">$1,245.23</HeaderText>
            <HeaderText isColored>
              <Image source={UpIcon} /> 31.82%
            </HeaderText>
          </PortfolioContent>
          <EarnRewardsButton>
            <Image source={CoinIcon} />
            <EarnRewardsButtonText>Earn Rewards</EarnRewardsButtonText>
          </EarnRewardsButton>
        </PortfolioContainer>
      </HeaderBottomContainer>
    </HeaderContainer>
  );
}
