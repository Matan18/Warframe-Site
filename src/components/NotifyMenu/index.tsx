import React, { useCallback, useEffect, useState } from 'react';
import WorldsStatus from './WorldsStatus';
import Events from './Events';

import {
  Container,
  List,
  ListItem
} from '../../styles/components/NotifyMenu/styles';
import AlertsArbitration from './AlertsArbitration';
import Invasions from './Invasions';

const NotifyMenu: React.FC = () => {
  const ItemList = itemList;
  const [selectedItem, setSelectedItem] = useState<number | undefined>(undefined);
  useEffect(() => {
    console.log("selected: ", selectedItem)
  }, [selectedItem])

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
      {(ItemList[selectedItem]?.render)}
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
    render: (<Events />)
  },
  {
    id: 2,
    name: 'Alertas/Arbritragens',
    selected: false,
    render: (<AlertsArbitration />)
  },
  {
    id: 3,
    name: 'Invasions',
    selected: false,
    render: (<Invasions />)

  },
  {
    id: 4,
    name: 'Syndicato',
    selected: false,
    render: (<h1>Syndicatos</h1>)

  },
  {
    id: 5,
    name: 'Fissures',
    selected: false,
    render: (<h1>Fissures</h1>)

  }
]
