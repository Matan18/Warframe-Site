import React, { useContext } from 'react';
import { PlatformContext } from '../../../context/Platform';
import { useFetch } from '../../../hooks/useFetch';
import { IInvasions } from './Invasion';

import { Container, Title, List, ListItem, ProgressBar } from '../../../styles/components/NotifyMenu/Invasions/styles';
import ConstructionProgress from './ConstructionProgress';

const Invasions: React.FC = () => {
  const { platform } = useContext(PlatformContext);
  const param = 'invasions'
  const { data: invasions } = useFetch<IInvasions[]>(param, platform)
  const cores = {
    Grineer: "#bd2b32",
    Corpus: "#2b5168",
    Infestado: "#418257"
  }

  return (
    <Container>
      <Title>Invasões</Title>
      <div>

        <List>
          {(invasions) && invasions.map(invasion => (

            <ListItem key={invasion.id}>
              <strong>{invasion.node}: {invasion.desc}</strong>
              <ProgressBar
                max={100}
                value={invasion.completion}
                attackingFaction={cores[invasion.attackingFaction]}
                deffendingFaction={cores[invasion.defendingFaction]}
                completion={(invasion.completion > 100 ? 100 : (invasion.completion < 0 ? 0 : invasion.completion))}
              />
              <div>
                <p>{invasion.attackingFaction} {(invasion.completion).toFixed(2)}%</p>
                <p> {(100 - invasion.completion).toFixed(2)}% {invasion.defendingFaction}</p>
              </div>
              <div>
                <p>{invasion.attackerReward.itemString}</p>
                <p>{invasion.defenderReward.itemString}</p>
              </div>
            </ListItem>
          ))}
          <ConstructionProgress />
        </List>
      </div >
    </Container >
  );
}

export default Invasions;
