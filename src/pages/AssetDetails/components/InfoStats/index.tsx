import React from 'react';
import {
  InfoStatsContainer,
  InfoStatsContent,
  InfoStatsContentSection,
  InfoStatsItem,
  InfoStatsItemText,
  InfoStatsTitle,
} from './styles';

interface InfoStatsProps {
  infoStats?: {
    aum?: string;
    issueData?: string;
    vintageRange?: string;
    ter?: string;
    priceAtClose?: string;
    priceAtOpen?: string;
  };
}

export function InfoStats({infoStats}: InfoStatsProps): JSX.Element {
  return (
    <InfoStatsContainer>
      <InfoStatsTitle>Info & Stats</InfoStatsTitle>

      <InfoStatsContent>
        <InfoStatsContentSection>
          <InfoStatsItem>
            <InfoStatsItemText type="title">AUM ⓘ</InfoStatsItemText>
            <InfoStatsItemText>{infoStats?.aum}</InfoStatsItemText>
          </InfoStatsItem>
          <InfoStatsItem>
            <InfoStatsItemText type="title">Vintage Range ⓘ</InfoStatsItemText>
            <InfoStatsItemText>{infoStats?.vintageRange}</InfoStatsItemText>
          </InfoStatsItem>
          <InfoStatsItem>
            <InfoStatsItemText type="title">Price at Close ⓘ</InfoStatsItemText>
            <InfoStatsItemText>{infoStats?.priceAtClose}</InfoStatsItemText>
          </InfoStatsItem>
        </InfoStatsContentSection>
        <InfoStatsContentSection>
          <InfoStatsItem>
            <InfoStatsItemText type="title">Issue Date ⓘ</InfoStatsItemText>
            <InfoStatsItemText>{infoStats?.issueData}</InfoStatsItemText>
          </InfoStatsItem>
          <InfoStatsItem>
            <InfoStatsItemText type="title">TER ⓘ</InfoStatsItemText>
            <InfoStatsItemText>{infoStats?.ter}%</InfoStatsItemText>
          </InfoStatsItem>
          <InfoStatsItem>
            <InfoStatsItemText type="title">Price at Open ⓘ</InfoStatsItemText>
            <InfoStatsItemText>{infoStats?.priceAtOpen}</InfoStatsItemText>
          </InfoStatsItem>
        </InfoStatsContentSection>
      </InfoStatsContent>
    </InfoStatsContainer>
  );
}
