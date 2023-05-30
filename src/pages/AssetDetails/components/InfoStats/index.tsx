import React from 'react';
import {
  InfoStatsContainer,
  InfoStatsContent,
  InfoStatsContentSection,
  InfoStatsItem,
  InfoStatsItemText,
  InfoStatsTitle,
} from './styles';

export function InfoStats(): JSX.Element {
  return (
    <InfoStatsContainer>
      <InfoStatsTitle>Info & Stats</InfoStatsTitle>

      <InfoStatsContent>
        <InfoStatsContentSection>
          <InfoStatsItem>
            <InfoStatsItemText type="title">AUM ⓘ</InfoStatsItemText>
            <InfoStatsItemText>$430.88m</InfoStatsItemText>
          </InfoStatsItem>
          <InfoStatsItem>
            <InfoStatsItemText type="title">Vintage Range ⓘ</InfoStatsItemText>
            <InfoStatsItemText>2019 – 2023</InfoStatsItemText>
          </InfoStatsItem>
          <InfoStatsItem>
            <InfoStatsItemText type="title">Price at Close ⓘ</InfoStatsItemText>
            <InfoStatsItemText>$17.68</InfoStatsItemText>
          </InfoStatsItem>
        </InfoStatsContentSection>
        <InfoStatsContentSection>
          <InfoStatsItem>
            <InfoStatsItemText type="title">Issue Date ⓘ</InfoStatsItemText>
            <InfoStatsItemText>18/04/2022</InfoStatsItemText>
          </InfoStatsItem>
          <InfoStatsItem>
            <InfoStatsItemText type="title">TER ⓘ</InfoStatsItemText>
            <InfoStatsItemText>0.15%</InfoStatsItemText>
          </InfoStatsItem>
          <InfoStatsItem>
            <InfoStatsItemText type="title">Price at Open ⓘ</InfoStatsItemText>
            <InfoStatsItemText>$17.74</InfoStatsItemText>
          </InfoStatsItem>
        </InfoStatsContentSection>
      </InfoStatsContent>
    </InfoStatsContainer>
  );
}
