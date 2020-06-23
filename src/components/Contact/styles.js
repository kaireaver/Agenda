import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 20px;
  border-radius: 4px;
  background: #fff;
  margin-bottom: 15px;
`;

export const Name = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #333;
  margin-right: 5px;
`;

export const Position = styled.Text.attrs({
  numberOfLines: 1,
})``;
export const Company = styled.Text.attrs({
  numberOfLines: 1,
})``;
export const WorkNumber = styled.Text``;
export const PersonalNumber = styled.Text``;
export const PersonalEmail = styled.Text``;
export const WorkEmail = styled.Text``;
export const WorkAddress = styled.Text``;
export const HomeAddress = styled.Text``;
export const Observations = styled.Text``;
export const Stats = styled.View``;
export const StatCount = styled.Text``;

export const Stat = styled.View`
  flex-direction: row;
`;

export const Names = styled.View`
  flex-direction: row;
`;
