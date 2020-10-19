import React from 'react';
import ArbitersofHexis from "../../../../assets/SyndicateFlags/Arbiters of Hexis.png";
import CephalonSuda from "../../../../assets/SyndicateFlags/Cephalon Suda.png";
import CephalonSimaris from "../../../../assets/SyndicateFlags/Cephalon_Simaris_flag.png";
import Conclave from "../../../../assets/SyndicateFlags/Conclave_flag.png";
import Entrati from "../../../../assets/SyndicateFlags/EntratiSyndicate.png";
import Necraloid from "../../../../assets/SyndicateFlags/NecraloidSyndicate.png";
import NewLoka from "../../../../assets/SyndicateFlags/New Loka.png";
import Nightwave from "../../../../assets/SyndicateFlags/NightwaveSyndicateFlag.png";
import Operation from "../../../../assets/SyndicateFlags/OperationsSyndicate.png";
import Ostrons from "../../../../assets/SyndicateFlags/Ostrons.png";
import PerrinSequence from "../../../../assets/SyndicateFlags/Perrin Sequence.png";
import Quills from "../../../../assets/SyndicateFlags/Quills.png";
import RedVeil from "../../../../assets/SyndicateFlags/Red Veil.png";
import SolarisUnited from "../../../../assets/SyndicateFlags/Solaris United.png";
import SteelMeridian from "../../../../assets/SyndicateFlags/Steel Meridian.png";
import VentKids from "../../../../assets/SyndicateFlags/Vent Kids.png";
import VoxSolaris from "../../../../assets/SyndicateFlags/Vox Solaris.png";
import Placeholder from "../../../../assets/SyndicateFlags/teste.png";
import { Image } from '../../../../styles/components/NotifyMenu/Syndicate/styles';




// import { Container } from './styles';
interface FlagProps {
  src: string;
}

const Flag: React.FC<FlagProps> = ({ src }) => {
  const dicionario = {
    ['Ostrons']: Ostrons,
    ['EntratiSyndicate']: Entrati,
    ['Solaris United']: SolarisUnited,
    ['Arbiters of Hexis']: ArbitersofHexis,
    ['Assassins']: Placeholder,
    ['Cephalon Suda']: CephalonSuda,
    ["Operations Syndicate"]: Operation,
    ['NecraloidSyndicate']: Necraloid,
    ['New Loka']: NewLoka,
    ['Perrin Sequence']: PerrinSequence,
    ["Quills"]: Quills,
    ["RadioLegion2Syndicate"]: Placeholder,
    ["RadioLegion3Syndicate"]: Placeholder,
    ["RadioLegionIntermission2Syndicate"]: Placeholder,
    ["RadioLegionIntermissionSyndicate"]: Placeholder,
    ["RadioLegionSyndicate"]: Placeholder,
    ["Red Veil"]: RedVeil,
    ["Steel Meridian"]: SteelMeridian,
    ["Vent Kids"]: VentKids,
    ["Vox Solaris"]: VoxSolaris
  }

  return <Image src={dicionario[src]} />;
}

export default Flag;
