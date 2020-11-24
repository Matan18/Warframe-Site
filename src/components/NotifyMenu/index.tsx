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
import Syndicate from './Syndicate';
import Fissures from './Fissures';

interface NotifyMenuProps {
  hide: (func: (id: number) => void) => void;
}

const NotifyMenu: React.FC<NotifyMenuProps> = ({ hide }) => {
  const [itemList, setItemList] = useState(ItemList);
  const [selectedItem, setSelectedItem] = useState<number | undefined>(undefined);

  const onItemClick = useCallback((id: number) => {
    setItemList(itemList.map((item, index) => {
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
  }, [itemList])

  useEffect(() => {
    hide(onItemClick)
  }, [onItemClick])

  return (
    <Container>
      <nav>
        <List>
          {itemList.map(item => (
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
      {(itemList[selectedItem]?.render)}
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

const ItemList: IItemList[] = [
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
    render: (<Syndicate />)

  },
  {
    id: 5,
    name: 'Fissures',
    selected: false,
    render: (<Fissures />)

  }
]
