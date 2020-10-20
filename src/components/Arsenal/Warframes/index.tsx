import React from 'react';
import { useFetch } from '../../../hooks/useFetch';
import WarframesPlaceholder from "../../../assets/warframesPlaceholder.png";
import { IWarframe } from './Warframe';

import { Button } from "../../../styles/components/BackButton/styles";
import { Container, List, ListItem, Warframe } from '../../../styles/components/Arsenal/Warframes/styles';

interface WarframeProps{
  onClickBack: ()=>void;
}
const Warframes: React.FC<WarframeProps> = ({onClickBack}) => {
  const param = 'warframes';
  const { data: warframes } = useFetch<IWarframe[]>(param);

  return (
    <Container>
      <List>
        {(!!warframes) && warframes.map(warframe => (

          <ListItem >
            <Warframe >
              {warframe.wikiaThumbnail ? (
                <img src={warframe.wikiaThumbnail} alt={`${warframe.name} Thumbnail`} />
              ) : (
                  <img src={WarframesPlaceholder} alt="PlaceholderImage" />
                )}
              <div>
                <p>{warframe.name}</p>
              </div>
            </Warframe>
          </ListItem>

        ))}
      </List>
      <Button onClick={onClickBack} >VOLTAR</Button>
    </Container>
  )
}

export default Warframes;
