import React from 'react';
import Aura from "../../../assets/Polarities/aura.png";
import Fusion from "../../../assets/Polarities/fusion.png";
import Madurai from "../../../assets/Polarities/madurai.png";
import Naramon from "../../../assets/Polarities/naramon.png";
import Penjaga from "../../../assets/Polarities/penjaga.png";
import Umbra from "../../../assets/Polarities/umbra.png";
import Unairu from "../../../assets/Polarities/unairu.png";
import Vazarin from "../../../assets/Polarities/vazarin.png";
import Zenurik from "../../../assets/Polarities/zenurik.png";

import { Image } from '../../../styles/components/Warframes/Polarity/styles';

interface PolarityProps {
  src: string;
}

const Polarity: React.FC<PolarityProps> = ({ src }) => {
  const dicionario = {
    ['madurai']: Madurai,
    ['naramon']: Naramon,
    ['vazarin']: Vazarin,
    ['umbra']: Umbra,
    ['zenurik']: Zenurik,
    ['penjaga']: Penjaga,
    ['unairu']: Unairu,
    ['aura']: Aura,
    ['fusion']: Fusion
  }
  return <Image src={dicionario[src]} />;
}

export default Polarity;
