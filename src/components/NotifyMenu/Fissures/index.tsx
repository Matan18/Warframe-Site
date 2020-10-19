import React, { useContext } from 'react';
import { PlatformContext } from '../../../context/Platform';
import { useFetch } from '../../../hooks/useFetch';
import { IFissure } from './Fissure';

import { Container, Title, List, ListItem, Content } from '../../../styles/components/NotifyMenu/Fissures/styles';

const Fissures: React.FC = () => {
  const { platform } = useContext(PlatformContext)
  const param = 'fissures';
  const { data: fissures } = useFetch<IFissure[]>(param, platform);
  return (
    <Container>
      <Title>FENDAS DO VOID</Title>
      <List>
        {(!!fissures) &&fissures.map(fissure => (
          <ListItem key={fissure.id}>
            <Content>
              <img
                src="https://scontent.fbfh16-1.fna.fbcdn.net/v/t1.0-9/66721515_2538978052808176_1118044059470921728_o.jpg?_nc_cat=101&_nc_sid=9267fe&_nc_ohc=_tbNIHm6zTAAX80J66f&_nc_ht=scontent.fbfh16-1.fna&oh=08fce6d2003c7326cdf304b9a6912cb0&oe=5F905828"
                alt="" />
              <div>
                <strong>{fissure.node}</strong>
                <strong>{fissure.missionType} - {fissure.enemy}</strong>
                <p>Fenda {fissure.tier}</p>
              </div>
              <img
                src="https://scontent.fbfh16-1.fna.fbcdn.net/v/t1.0-9/66721515_2538978052808176_1118044059470921728_o.jpg?_nc_cat=101&_nc_sid=9267fe&_nc_ohc=_tbNIHm6zTAAX80J66f&_nc_ht=scontent.fbfh16-1.fna&oh=08fce6d2003c7326cdf304b9a6912cb0&oe=5F905828"
                alt="" />
            </Content>
            <p>{fissure.expiry}</p>
          </ListItem>
        ))}
      </List>
    </Container>
  );
}

export default Fissures;
