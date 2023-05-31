import {useNavigation, useRoute} from '@react-navigation/native';
import {Image, TouchableOpacity} from 'react-native';
import {Divider} from '../Divider';
import {
  Container,
  Description,
  GoBackContainer,
  Title,
  TitleContainer,
} from './styles';

function GoBackIcon() {
  const navigation = useNavigation();
  return (
    <GoBackContainer>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Image source={require('../../assets/arrow-left.png')} />
      </TouchableOpacity>
    </GoBackContainer>
  );
}

export function CustomHeader() {
  const route = useRoute();

  const {fund} = route.params;

  return (
    <>
      <Container>
        <GoBackIcon />
        <TitleContainer>
          <Title>{fund?.name}</Title>
          <Description>{fund?.abbr}</Description>
        </TitleContainer>
      </Container>
      <Divider />
    </>
  );
}
