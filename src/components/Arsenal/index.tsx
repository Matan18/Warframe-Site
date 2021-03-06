import React, { useCallback, useEffect, useState } from 'react';

import { Container, List, ListItem } from '../../styles/components/Arsenal/styles';
import Arcanes from './Arcanes';
import Warframes from './Warframes';
import Weapons from './Weapons';

interface ArsenalProps {
  hide: (func: (id: number) => void) => void;
}

const Arsenal: React.FC<ArsenalProps> = ({ hide }) => {
  const [menuItens, setMenuItens] = useState(MenuItens)
  const [selectedItem, setSelectedItem] = useState<number | undefined>(undefined);

  const onItemClick = useCallback((id: number) => {
    setMenuItens(menuItens.map((item, index) => {
      if (id === -1) {
        setSelectedItem(undefined);
      }
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
    }))
  }, [menuItens])

  useEffect(() => {
    hide(onItemClick)
  }, [onItemClick])

  return (
    <Container>
      <nav>
        <List>
          {menuItens.map(item => (
            <ListItem key={item.id}>
              <div
                onClick={(ev) => { onItemClick(item.id); ev.stopPropagation(); }}
                className={item.selected ? 'selected' : ""}>
                <p>{item.name}</p>
              </div>
            </ListItem>
          ))}
        </List>
      </nav>
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

const MenuItens: IMenuItem[] = [
  {
    id: 0,
    name: 'Warframes',
    type: 'warframes',
    selected: false,
    render: (<Warframes />)
  },
  {
    id: 1,
    name: 'Weapons',
    type: 'weapons',
    selected: false,
    render: (<Weapons />)
  },
  {
    id: 2,
    name: 'Arcanes',
    type: 'arcanes',
    selected: false,
    render: (<Arcanes />)
  }
];

