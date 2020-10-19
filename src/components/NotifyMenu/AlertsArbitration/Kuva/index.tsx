import React, { useContext } from 'react';
import { PlatformContext } from '../../../../context/Platform';
import { useFetch } from '../../../../hooks/useFetch';
import { IKuva } from './Kuva';

import { Container, Title, List, ListItem, Description } from '../../../../styles/components/NotifyMenu/Kuva/styles';

const Kuva: React.FC = () => {
  const { platform } = useContext(PlatformContext)
  const param = 'kuva';
  const { data: kuvas } = useFetch<IKuva[]>(param, platform);

  return (
    <Container>
      <Title>Kuvas</Title>
      {!!kuvas? (
        <List >
          {kuvas.map(kuva => (
            <ListItem key={kuva.node} >
              <div>
                <div>
                  <img
                    src="https://scontent.fbfh16-1.fna.fbcdn.net/v/t1.0-9/66721515_2538978052808176_1118044059470921728_o.jpg?_nc_cat=101&_nc_sid=9267fe&_nc_ohc=_tbNIHm6zTAAX80J66f&_nc_ht=scontent.fbfh16-1.fna&oh=08fce6d2003c7326cdf304b9a6912cb0&oe=5F905828"
                    alt="" />
                  <Description>
                    <strong>{kuva.node}</strong>
                    <strong>{kuva.type} - {kuva.enemy}</strong>
                  </Description>
                  <img
                    src="https://scontent.fbfh16-1.fna.fbcdn.net/v/t1.0-9/66721515_2538978052808176_1118044059470921728_o.jpg?_nc_cat=101&_nc_sid=9267fe&_nc_ohc=_tbNIHm6zTAAX80J66f&_nc_ht=scontent.fbfh16-1.fna&oh=08fce6d2003c7326cdf304b9a6912cb0&oe=5F905828"
                    alt="" />
                </div>
                <p>{kuva.expiry}</p>
              </div>
            </ListItem>
          ))}
        </List>
      ) : (
            <Title>No momento não há Missões Kuva</Title>
        )}
    </Container>

  )
}

export default Kuva;
