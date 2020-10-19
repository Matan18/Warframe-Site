import React, { useContext } from 'react';
import { PlatformContext } from '../../../../context/Platform';
import { useFetch } from '../../../../hooks/useFetch';
import { IArbitrationData } from './Arbitration';

import { Container, Title, Content, Description } from '../../../../styles/components/NotifyMenu/Arbitration/styles';

const Arbitration: React.FC = () => {
  const { platform } = useContext(PlatformContext);
  const param = 'arbitration';
  const { data: arbitration } = useFetch<IArbitrationData>(param, platform);

  return (
    <Container>
      <Title>ARBITRAGEM</Title>
      {(arbitration) ? (

        <Content >
          <img
            src="https://scontent.fbfh16-1.fna.fbcdn.net/v/t1.0-9/66721515_2538978052808176_1118044059470921728_o.jpg?_nc_cat=101&_nc_sid=9267fe&_nc_ohc=_tbNIHm6zTAAX80J66f&_nc_ht=scontent.fbfh16-1.fna&oh=08fce6d2003c7326cdf304b9a6912cb0&oe=5F905828"
            alt="" />
          <Description>
            <strong>{arbitration.node}</strong>
            <p>
              <strong>{arbitration.type} - {arbitration.enemy}</strong>
            </p>
            <p>
              (Essas missões geralmente requerem que você tenha completado todo o Mapa Estelar)
          </p>
            <p>{arbitration.expiry}</p>
          </Description>
        </Content>
      ) : (
          <Title>No momento não há Arbitrations</Title>
        )}
    </Container>
  );
}

export default Arbitration;
