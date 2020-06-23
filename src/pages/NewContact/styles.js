import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import {getStatusBarHeight} from 'react-native-status-bar-height';

export const Container = styled(LinearGradient).attrs({
  colors: ['#7F7FD5', '#86A8E7', '#91EAE4'],
  start: {x: 0, y: 0},
  end: {x: 1, y: 1},
})`
  flex: 1;
  padding-top: ${30 + getStatusBarHeight(true)}px;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#000',
})`
  flex: 1;
  margin: 2px;
  padding: 11px 15px;
  border-radius: 10px;
  font-size: 16px;
  color: #333;
  background: #fff;
  border: 2px solid ${(props) => (props.error ? '#FF7272' : '#FFf')};
`;

export const Title = styled.Text`
  font-size: 32px;
  color: #FFF
  font-weight: bold;
  padding: 0 20px;
  `;

export const Form = styled.View`
  flex-direction: row;
  margin-top: 10px;
  padding: 0 20px;
`;
export const List = styled.FlatList.attrs({
  contentContainerStyle: {paddingHorizontal: 20},
  showsVerticalScrollIndicator: false,
})`
  margin-top: 20px;
`;
export const Button = styled.View`
  margin-top:10px
  justify-content: center;
  alignItems:center;

`;

export const ButtonText = styled.Text`
background: #47c17e;
  border-radius: 100px;
  font-size: 32px;
  color: #FFF
  font-weight: bold;
  padding: 0 20px;
  `;
export const TouchableOpacity = styled.TouchableOpacity``;
