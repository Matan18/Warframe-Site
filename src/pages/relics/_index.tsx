import React, { useCallback, useEffect, useState } from 'react';
import axi_0 from "../../assets/Relics/axi_0.png";
import axi_1 from "../../assets/Relics/axi_1.png";
import axi_2 from "../../assets/Relics/axi_2.png";
import axi_3 from "../../assets/Relics/axi_3.png";
import normal from "../../assets/Relics/Icons/normal.png";
import exceptional from "../../assets/Relics/Icons/exceptional.png";
import flawless from "../../assets/Relics/Icons/flawless.png";
import radiant from "../../assets/Relics/Icons/radiant.png";
import { useFetch } from '../../hooks/useFetch';
import { Losango, RelicList, RewardList } from './_style';

// import { Container } from './styles';

interface IRelic {
  place: string;
  item: string;
  rarity: string;
  chance: number
}

const Relics: React.FC = () => {
  const param = 'drops/search/axi%20s3';
  const [relics, setRelic] = useState<IRelic[][]>([]);
  const relicIcons = [normal, exceptional, flawless, radiant];
  const [selectedValue, setSelectedValue] = useState(0);
  const comparator = useCallback(
    (a, b) => {
      return b.chance - a.chance;
    }, [])

  const { data } = useFetch<IRelic[]>(param)
  useEffect(() => {
    const except = data?.filter(relic => relic.place.includes('Exceptional')).sort(comparator)
    const flaw = data?.filter(relic => relic.place.includes('Flawless')).sort(comparator)
    const rad = data?.filter(relic => relic.place.includes('Radiant')).sort((a, b) => {
      if (a.chance < 11) {
        return +1
      }
      if (a.chance > 11 && 20 > a.chance) {
        return -1;
      }
      return b.chance - a.chance;
    })
    const norm = data?.filter(relic => {
      if (relic.place.includes('Radiant') || relic.place.includes('Flawless') || relic.place.includes('Exceptional')) {
        return false
      } else {
        return true
      }
    }).sort(comparator);
    console.log(norm)
    setRelic([norm, except, flaw, rad])
  }, [data])
  return (
    <div style={{ background: "#8256e7", flex: 1 }}>
      <h1>RELICS</h1>
      <RewardList>
        {relics[selectedValue]?.slice(0, 3).map((relic) => (
          <li key={relic.chance + relic.item + relic.rarity}>
            <div>
              <h3>{relic.item}</h3>
              <strong>{(relic.chance / 100).toFixed(2)}%</strong>
            </div>
          </li>
        ))}
        <progress max={100} value={relics[selectedValue][0].chance}></progress>
      </RewardList>
      <RewardList>
        <progress max={100} value={0}></progress>
        {relics[selectedValue]?.slice(3, 5).map((relic) => (
          <li key={relic.chance + relic.item + relic.rarity}>
            <div>
              <h3>{relic.item}</h3>
              <strong>{(relic.chance / 100).toFixed(2)}%</strong>
            </div>
          </li>
        ))}

        <progress max={100} value={relics[selectedValue][3].chance}></progress>
      </RewardList>

      <RewardList>
        {relics[selectedValue]?.slice(5, 6).map((relic) => (
          <li key={relic.chance + relic.item + relic.rarity}>
            <div>
              <h3>{relic.item}</h3>
              <strong>{(relic.chance / 100).toFixed(2)}%</strong>
            </div>
          </li>
        ))}
        <progress max={100} value={relics[selectedValue][5].chance}></progress>
      </RewardList>

      <RelicList>
        {relics?.map((_, index) => (
          <li key={index} >
            <Losango onClick={() => setSelectedValue(index)} className={(index === selectedValue) ? "selected" : ""}>
              {(index === selectedValue) ? (
                <>
                  <div>
                    <img src={relicIcons[index]} alt={"recicIcon" + index} />
                  </div>

                  <div>
                  </div>
                </>
              ) : (
                  <img src={relicIcons[index]} alt={"recicIcon" + index} />
                )}
            </Losango>
          </li>
        ))}
      </RelicList>
    </div >
  );
}

export default Relics;
