import React from 'react';
import { IPlatform, PlatformProps } from './PlatformInterfaces';

import { Container, Title, Select } from '../../../styles/components/Header/Platform/styles';

const Platform: React.FC<PlatformProps> = ({ changePlatform }) => {
  const platformOptions: IPlatform[] = [
    {
      name: "PC",
      initial: "pc"
    },
    {
      name: "PS4",
      initial: "ps4"
    },
    {
      name: "Xbox One",
      initial: "xb1"
    },
    {
      name: "Nintendo Switch",
      initial: "swi"
    }
  ]
  return (
    <Container>
      <Title>Selecione a Plataforma</Title>
      <Select onChange={(e) => changePlatform(e.target.value)} >
        {platformOptions.map(platform => (
          <option key={platform.initial} value={platform.initial}>{platform.name}</option>
        ))}
      </Select>
    </Container>
  )
}

export default Platform;
