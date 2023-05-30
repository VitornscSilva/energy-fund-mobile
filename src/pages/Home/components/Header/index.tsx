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

interface HeaderProps {
  amount: string;
  increasement: number;
}

const ProfileIcon = require('../../../../assets/profile-icon.png');
const ArrowDown = require('../../../../assets/arrow-down.png');
const BellIcon = require('../../../../assets/bell-icon.png');
const CoinIcon = require('../../../../assets/coin-icon.png');
const UpIcon = require('../../../../assets/up.png');

export function Header({amount, increasement}: HeaderProps) {
  return (
    <HeaderContainer>
      <HeaderTopContainer>
        <Image source={ProfileIcon} />
        <HeaderAccountButton>
          <HeaderText>
            Account: ${amount}
            <Image source={ArrowDown} />
          </HeaderText>
        </HeaderAccountButton>

        <Image source={BellIcon} />
      </HeaderTopContainer>
      <HeaderBottomContainer>
        <HeaderText type="portfolio">Portfolio</HeaderText>
        <PortfolioContainer>
          <PortfolioContent>
            <HeaderText type="portfolioAmount">${amount}</HeaderText>
            <HeaderText isColored>
              <Image source={UpIcon} /> ${increasement}%
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
