import React, { useContext, useMemo } from 'react';
import { PlatformContext } from '../../../../context/Platform';
import { useFetch } from '../../../../hooks/useFetch';
import { IVallisStatus } from './VallisStatus';

import {
  Container
} from '../../../../styles/components/NotifyMenu/WorldCycle/styles';

const VallisCycle: React.FC = () => {
  const worldCycle = {
    warm: {
      name: 'Quente',
      opposite: 'frio'
    },
    cold: {
      name: 'Frio',
      opposite: 'quente'
    }
  }
  const param = "vallisCycle"
  const { platform } = useContext(PlatformContext);
  const { data: vallisStatus } = useFetch<IVallisStatus>(param, platform)

  const expiry = useMemo(() => {
    if (vallisStatus) {
      const data = new Date(vallisStatus.expiry)
      return `${data.getHours()}:${data.getMinutes()} hrs`
    }
    return ""
  }, [vallisStatus])

  return (
    <Container>
      <h2>Vallis</h2>
      {vallisStatus &&
        (
          <div >
            <h1>{worldCycle[vallisStatus.state].name}</h1>
            <p>Vira {worldCycle[vallisStatus.state].opposite} às {expiry}</p>
          </div>
        )}
    </Container >
  )
}

export default VallisCycle;
