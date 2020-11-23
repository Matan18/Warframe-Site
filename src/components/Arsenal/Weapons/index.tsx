import React from 'react';
import { useFetch } from '../../../hooks/useFetch';
import WarframesPlaceholder from "../../../assets/warframesPlaceholder.png";
import { IWeapon } from './Weapon';

import { Container, List, ListItem, Weapon } from '../../../styles/components/Arsenal/Weapons/styles';
import { Button } from '../../../styles/components/BackButton/styles';
import Link from 'next/link';

interface WeaponsProps {
  onClickBack: () => void;
}

const Weapons: React.FC<WeaponsProps> = ({ onClickBack }) => {
  const param = 'weapons';
  const { data: weapons } = useFetch<IWeapon[]>(param);

  return (
    <Container>
      <List>
        {(!!weapons) && weapons.map(weapon => (
          <ListItem key={weapon.name}>
            <Link href={`/weapons/${weapon.name.toLowerCase()}`}>
              <Weapon >
                {(weapon.wikiaThumbnail) ? (

                  <img src={`${weapon.wikiaThumbnail.split('.png')[0]}.png`} alt={`${weapon.name} Thumbnail`} />
                ) : (

                    <img src={WarframesPlaceholder} alt="PlaceholderImage" />
                  )}
                <div>
                  <p>{weapon.name}</p>
                </div>
              </Weapon>
            </Link>
          </ListItem>
        ))}
      </List>
      <Button onClick={onClickBack} >VOLTAR</Button>
    </Container>
  );
}

export default Weapons;
