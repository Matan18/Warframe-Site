import React, { useContext } from 'react';
import { PlatformContext } from '../../../context/Platform';
import { useFetch } from '../../../hooks/useFetch';
import { ISyndicate } from './Syndicate';

import { Container, Title, List, ItemList } from '../../../styles/components/NotifyMenu/Syndicate/styles';
import Flag from './Flag';

const Syndicate: React.FC = () => {
  const { platform } = useContext(PlatformContext);
  const param = 'syndicateMissions';
  const { data: syndicateList } = useFetch<ISyndicate[]>(param, platform);

  return (
    <Container>
      <div>
        <Title>Sindicatos</Title>
      </div>
      <List>
        {(syndicateList) && syndicateList.map(syndicate => (
          <li key={syndicate.id}>
            <ul>
              {syndicate.jobs.map(mission => (
                <ItemList key={mission.id}>
                  <Flag src={syndicate.syndicate} />
                  <div>
                    <strong>{mission.type}</strong>
                    <div>
                      <p>{syndicate.syndicate}</p>
                      <time dateTime={syndicate.eta}>{syndicate.eta}</time>
                    </div>
                  </div>
                </ItemList>
              ))}
              {syndicate.nodes.map(mission => (
                <ItemList key={mission}>
                  <Flag src={syndicate.syndicate} />
                  <div>
                    <strong>{mission}</strong>
                    <div>
                      <p>{syndicate.syndicate}</p>
                      <time dateTime={syndicate.eta}>{syndicate.eta}</time>
                    </div>
                  </div>
                </ItemList>
              ))}
            </ul>
          </li>
        ))}
      </List>
    </Container>

  );
}

export default Syndicate;
