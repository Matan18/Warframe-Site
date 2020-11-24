import React, { useContext, useMemo } from 'react';
import { PlatformContext } from '../../../../context/Platform';
import { useFetch } from '../../../../hooks/useFetch';
import { ICetusStatus } from './CetusStatus';

import {
  Container
} from '../../../../styles/components/NotifyMenu/WorldCycle/styles';

const CetusCycle: React.FC = () => {
  const worldCycle = {
    day: {
      name: 'Dia',
      opposite: 'noite'
    },
    night: {
      name: 'Noite',
      opposite: 'dia'
    },
  }
  const { platform } = useContext(PlatformContext);
  const param = "cetusCycle"
  const { data: cetusStatus } = useFetch<ICetusStatus>(param, platform);

  const expiry = useMemo(() => {
    if (cetusStatus) {
      const data = new Date(cetusStatus.expiry)
      const minutes = data.getMinutes() < 10 ? (`0${data.getMinutes()}`) : (data.getMinutes())
      const returnded = {
        date: `${data.getHours()}:${minutes} hrs`,
        fullDate: `${cetusStatus.expiry}`
      }
      return returnded
    }
    return { date: '', fullDate: '' }
  }, [cetusStatus])

  return (
    <Container>
      <h2>Cetus</h2>
      {cetusStatus &&
        (
          <div >
            <h1>{worldCycle[cetusStatus.state].name}</h1>
            <p>Vira {worldCycle[cetusStatus.state].opposite} às <time dateTime={expiry.fullDate}>{expiry.date}</time></p>
          </div>
        )
      }
    </Container >
  )
}

export default CetusCycle;
