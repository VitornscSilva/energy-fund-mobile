import React, {useEffect} from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import {useDispatch, useSelector} from 'react-redux';
import {Card} from '../../components/Card';
import {Divider} from '../../components/Divider';
import {fetchData} from '../../store/modules/userInfo/actions';
import {Funds} from './components/Funds';
import {Header} from './components/Header';
import {Container, BodyContainer} from './styles';

const BusinessStatitics = require('../../assets/business-statistics.png');

export function Home(): JSX.Element {
  const dispatch = useDispatch();
  const userInfo = useSelector(state => state.userInfo);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <ScrollView
      keyboardShouldPersistTaps="handled"
      contentContainerStyle={{flex: 1}}>
      <Container>
        <Header
          amount={userInfo?.portfolio?.amount}
          increasement={userInfo?.portfolio?.increasement}
        />
        <Divider />
        <BodyContainer>
          <Funds funds={userInfo?.funds} />
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
