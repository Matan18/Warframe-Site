import React, { useCallback, useState } from 'react';

import { Container, List, ListItem } from '../../styles/components/Arsenal/styles';
import Arcanes from './Arcanes';
import Warframes from './Warframes';
import Weapons from './Weapons';

const Arsenal: React.FC = () => {
  const menuItens: IMenuItem[] = [
    {
      id: 0,
      name: 'Warframes',
      type: 'warframes',
      selected: false,
      render: (<Warframes onClickBack={() => { onItemClick(0) }} />)
    },
    {
      id: 1,
      name: 'Weapons',
      type: 'weapons',
      selected: false,
      render: (<Weapons onClickBack={() => { onItemClick(1) }} />)
    },
    {
      id: 2,
      name: 'Arcanes',
      type: 'arcanes',
      selected: false,
      render: (<Arcanes />)
    }
  ]
  const [selectedItem, setSelectedItem] = useState<number | undefined>(undefined);

  const onItemClick = useCallback((id: number) => {
    menuItens.map((item, index) => {
      if (index === id) {
        if (item.selected) {
          item.selected = false
          setSelectedItem(undefined)
          return item
        }
        item.selected = true
        setSelectedItem(item.id)
      } else {
        item.selected = false
      }
      return item
    })
  }, [menuItens])

  return (
    <Container>
      <List>
        {menuItens.map(item => (
          <ListItem key={item.id}>
            <div onClick={() => onItemClick(item.id)} className={item.selected ? 'selected' : ""}>
              <p>{item.name}</p>
            </div>
          </ListItem>
        ))}
      </List>
      {(menuItens[selectedItem]?.render)}
    </Container>
  )
}

export default Arsenal;

interface IMenuItem {
  id: number;
  name: string;
  type: string;
  selected: boolean;
  render?: JSX.Element
}


