import React from 'react';
import { useFetch } from '../../../hooks/useFetch';
import WarframesPlaceholder from "../../../assets/warframesPlaceholder.png";
import { IWarframe } from './Warframe';
import Link from "next/link";

import { Container, List, ListItem, Warframe } from '../../../styles/components/Arsenal/Warframes/styles';

const Warframes: React.FC = () => {
  const param = 'warframes';
  const { data: warframes } = useFetch<IWarframe[]>(param);

  return (
    <Container>
      <List>
        {(!!warframes) && warframes.map(warframe => (
          <ListItem key={warframe.name}  >
            <Link href={`/warframes/${warframe.name.toLowerCase()}`}>
              <Warframe >
                {warframe.wikiaThumbnail ? (
                  <img src={`${warframe.wikiaThumbnail.split('.png')[0]}.png`} alt={`${warframe.name} Thumbnail`} />
                ) : (
                    <img src={WarframesPlaceholder} alt="PlaceholderImage" />
                  )}
                <div>
                  <p>{warframe.name}</p>
                </div>
              </Warframe>
            </Link>
          </ListItem>
        ))}
      </List>
    </Container>
  )
}

export default Warframes;
