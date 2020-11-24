import React, { useState } from 'react';
import ArcanePlaceholder from "../../../assets/arcanePlaceholder.png";
import { useFetch } from '../../../hooks/useFetch';
import { IArcane } from './Arcane';

import { Container, List, ListItem, ArcaneItem, TitleBox, Effect } from '../../../styles/components/Arsenal/Arcanes/styles';

const Arcanes: React.FC = () => {
  const param = 'arcanes';
  const { data } = useFetch<IArcane[]>(param);
  const [arcanes, setArcanes] = useState(data);

  function onSelect(regex: string) {
    setArcanes(arcanes.map(arcane => {
      if (arcane.selected === true) {
        arcane.selected = false
        return arcane
      }
      arcane.selected = false
      if (arcane.regex === regex) {
        arcane.selected = true
      }
      return arcane
    }))
  }

  return (
    <Container>
      <List>
        {(!!arcanes) && arcanes.map(arcane => (
          <ListItem key={arcane.name}>
            <ArcaneItem
              className={arcane.selected ? 'selected' : ''}
              onClick={(ev) => {
                onSelect(arcane.regex);
                ev.stopPropagation()
              }}>
              <div>
                <img
                  src={ArcanePlaceholder}
                  alt="PlaceholderImage" />
                <TitleBox>
                  <p>{arcane.name}</p>
                </TitleBox>
              </div>
              {(arcane.selected) && (
                <Effect>
                  <h3>Effect: <p>{arcane.effect}</p></h3>
                  <h4>Rariry: {arcane.rarity}</h4>
                </Effect>
              )}
            </ArcaneItem>
          </ListItem>
        ))}
      </List >
    </Container >
  );
}

export default Arcanes;
