import React, { useContext, useMemo } from 'react';
import { PlatformContext } from '../../../../context/Platform';
import { useFetch } from '../../../../hooks/useFetch';
import { IEarthCycle } from './EarthCycle';

import {
  Container
} from '../../../../styles/components/NotifyMenu/WorldCycle/styles';

const EarthCycle: React.FC = () => {
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
  const param = "earthCycle"
  const { data: earthCycle } = useFetch<IEarthCycle>(param, platform);

  const expiry = useMemo(() => {
    if (earthCycle) {
      const data = new Date(earthCycle.expiry)
      return `${data.getHours()}:${data.getMinutes()} hrs`
    }
    return ""
  }, [earthCycle])

  return (
    <Container>
      <h2>Earth Cycle</h2>
      {earthCycle &&
        (
          <div >
            <h1>{worldCycle[earthCycle.state].name}</h1>
            <p>Vira {worldCycle[earthCycle.state].opposite} às {expiry}</p>
          </div>
        )}
    </Container >
  )
}

export default EarthCycle;
