import React, { useContext } from 'react';
import { PlatformContext } from '../../../../context/Platform';
import { useFetch } from '../../../../hooks/useFetch';
import { IAlerts } from './Alerts';

import { Container, Title, List, ListItem, Description } from '../../../../styles/components/NotifyMenu/Alerts/styles';
import { countDown } from '../../../../utils/countDown';

const Alerts: React.FC = () => {
  const param = 'alerts';
  const { platform } = useContext(PlatformContext);
  const { data: alerts } = useFetch<IAlerts[]>(param, platform)
  return (
    <Container>
      <Title>Alerts</Title>
      {(!!alerts) ? (
        <List >
          {alerts.map(alert => (
            <ListItem key={alert.id}>
              <div>
                <div>
                  <img
                    src="https://scontent.fbfh16-1.fna.fbcdn.net/v/t1.0-9/66721515_2538978052808176_1118044059470921728_o.jpg?_nc_cat=101&_nc_sid=9267fe&_nc_ohc=_tbNIHm6zTAAX80J66f&_nc_ht=scontent.fbfh16-1.fna&oh=08fce6d2003c7326cdf304b9a6912cb0&oe=5F905828"
                    alt="" />
                  <Description>
                    <strong>{alert.mission.node}</strong>
                    <strong>{alert.mission.type} - {alert.mission.faction}</strong>
                    <p>{alert.mission.reward.asString}</p>
                  </Description>
                  <img
                    src="https://scontent.fbfh16-1.fna.fbcdn.net/v/t1.0-9/66721515_2538978052808176_1118044059470921728_o.jpg?_nc_cat=101&_nc_sid=9267fe&_nc_ohc=_tbNIHm6zTAAX80J66f&_nc_ht=scontent.fbfh16-1.fna&oh=08fce6d2003c7326cdf304b9a6912cb0&oe=5F905828"
                    alt="" />
                </div>
                <p>{(countDown(alert.expiry))}</p>
              </div>
            </ListItem>
          ))}
        </List>
      ) : (
          <div>
            <Title>No momento não há Alertas</Title>
          </div>
        )}
    </Container>

  );
}

export default Alerts;
