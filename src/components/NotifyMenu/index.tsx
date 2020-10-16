import React, { useCallback, useState } from 'react';
import WorldsStatus from './WorldsStatus';

import {
  Container,
  List,
  ListItem
} from '../../styles/components/NotifyMenu/styles';

const NotifyMenu: React.FC = () => {
  const ItemList = itemList;
  const [selectedItem, setSelectedItem] = useState<number | undefined>(undefined);

  const onItemClick = useCallback((id: number) => {
    ItemList.map((item, index) => {
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
  }, [ItemList])

  return (
    <Container>
      <List>
        {ItemList.map(item => (
          <ListItem key={item.id}>
            <div onClick={() => onItemClick(item.id)} className={item.selected ? 'selected' : ""}>
              <p>{item.name}</p>
            </div>
          </ListItem>
        ))}
      </List>
      <div>
        {!selectedItem ? (ItemList[selectedItem]?.render) : (null)}
      </div>
    </Container>
  );
}

export default NotifyMenu;


interface IItemList {
  name: string,
  id: number,
  selected: boolean,
  render?: JSX.Element
}

const itemList: IItemList[] = [
  {
    id: 0,
    name: 'World-Cycles',
    selected: false,
    render: (<WorldsStatus />)
  },
  {
    id: 1,
    name: 'Events',
    selected: false,
    render: (<div />)
  },
  {
    id: 2,
    name: 'Alertas/Arbritragens',
    selected: false,
    render: (<div />)
  },
  {
    id: 3,
    name: 'Invasions',
    selected: false,
    render: (<div />)
  },
  {
    id: 4,
    name: 'Syndicato',
    selected: false,
    render: (<div />)
  },
  {
    id: 5,
    name: 'Fissures',
    selected: false,
    render: (<div />)
  }
]
