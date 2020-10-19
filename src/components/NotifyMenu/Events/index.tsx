import React, { useContext } from 'react';
import { PlatformContext } from '../../../context/Platform';
import { useFetch } from '../../../hooks/useFetch';
import { IEvent } from "./Events";
import { Container, Title, List, ItemList, Jobs } from '../../../styles/components/NotifyMenu/Events/styles';

const Events: React.FC = () => {
  const { platform } = useContext(PlatformContext);
  const param = "events"
  const { data: events } = useFetch<IEvent[]>(param, platform);

  return (
    <Container className="container">
      <Title>Eventos</Title>
      <List>
        {(events) && events.map(event => (
          <ItemList key={event.id}>
            <strong>{event.description}</strong>
            {event.node ? (
              <p>Local: { event.node}</p>
            ) : (
                <p>Local: { event.victimNode}</p>
              )}
            <p>{event.tooltip}</p>
            {!!event.maximumScore ?
              (
                <>
                  {event.maximumScore && (
                    <p >Progress: {(event.currentScore / event.maximumScore).toFixed(2)}%</p>
                  )}
                </>
              ) :
              (
                <>
                  {event.health && (
                    <p>{(event.health / 100).toFixed(2)}%</p>
                  )}
                </>
              )}
            {!!event.interimSteps.length && (
              <div className="interimSteps" >
                <strong>Recompensas</strong>
                {event.interimSteps.map(item => (
                  <div key={item.reward.asString}>
                    <strong>{item.reward.asString}</strong>
                    <p>Goal: {item.goal}</p>
                  </div>
                ))}
              </div >
            )}
            {event.jobs && (
              <Jobs className="jobs" >
                {event.jobs.map(item => (
                  <div >
                    <strong>{item.type}</strong>
                    <strong>Possíveis recompensas:</strong>
                    {item.rewardPool.map(reward => (
                      <p>{reward}</p>
                    ))}
                  </div >
                ))}
              </Jobs >
            )}
          </ItemList >
        )
        )}
      </List >
    </Container >
  );
}

export default Events;
