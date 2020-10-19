import React from 'react';
import Alerts from './Alerts';
import Arbitration from './Arbitration';
import Kuva from './Kuva';

// import { Container } from './styles';

const AlertsArbitration: React.FC = () => {
  return (
    <div>
      <Alerts />
      <Arbitration />
      <Kuva />
    </div>
  )
}

export default AlertsArbitration;
