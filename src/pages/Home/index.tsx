import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import {Card} from '../../components/Card';
import {Divider} from '../../components/Divider';
import {Funds} from './components/Funds';
import {Header} from './components/Header';
import {Container, BodyContainer} from './styles';

const BusinessStatitics = require('../../assets/business-statistics.png');

export function Home(): JSX.Element {
  return (
    <ScrollView
      keyboardShouldPersistTaps="handled"
      contentContainerStyle={{flex: 1}}>
      <Container>
        <Header />
        <Divider />
        <BodyContainer>
          <Funds />
          <Card
            title="Learn more about carbon credits"
            description="Check out our top tips!"
            image={BusinessStatitics}
          />
        </BodyContainer>
      </Container>
    </ScrollView>
  );
}
