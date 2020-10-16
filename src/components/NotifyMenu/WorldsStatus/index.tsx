import React from 'react';
import CetusCycle from './CetusCycle';
import EarthCycle from './EarthCycle';
import VallisCycle from './VallisCycle';

// import { Container } from './styles';

const WorldsStatus: React.FC = () => {
  return (
    <div>
      <CetusCycle />
      <EarthCycle />
      <VallisCycle />
    </div>
  );
}

export default WorldsStatus;
