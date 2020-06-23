import React from 'react';

import {Container, Name, Stats, Stat, StatCount, Names} from './styles';

export default function Contact({data}) {
  return (
    <Container>
      <Names>
        <Name>{data.name}</Name>
        <Name>{data.lastname}</Name>
      </Names>
      <Stats>
        <Stat>
          <StatCount> {data.position}</StatCount>
          <StatCount> {'@'}</StatCount>
          <StatCount> {data.company}</StatCount>
        </Stat>
      </Stats>
    </Container>
  );
}
