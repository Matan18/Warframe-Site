import { useRouter } from 'next/dist/client/router';
import Link from "next/link";
import React, { useEffect, useMemo, useState } from 'react';
import { IWarframe } from '../../components/Arsenal/Warframes/Warframe';
import Polarity from '../../components/Warframes/Polarity';
import { useFetch } from '../../hooks/useFetch';

import {
  Container,
  Introduction,
  Status,
  AbilitiesContainer,
  Ability,
  BuiltInfos,
  Component,
  Mods,
  MoreInfo,
  Line,
  Loading,
  Thumb,
} from '../../styles/pages/warframes/styles';

const Warframe: React.FC = () => {
  const router = useRouter();
  const param = 'warframes/search/';
  const { data } = useFetch<IWarframe[]>(param + router.query.name);
  const [warframe, setWarframe] = useState<IWarframe>();

  useEffect(() => {
    if (data) {
      setWarframe(data[0]);
    }
  }, [data])

  const name = useMemo(() => {
    if (warframe?.name.indexOf('Prime') != -1) {
      return warframe?.name.replace('Prime', 'P.') + ' ';
    }
    else {
      return warframe?.name + ' ';
    }
  }, [warframe])

  return (
    <Container>
      {warframe ? (
        <div>

          <Introduction className="introdution">
            <h1>{warframe.name}</h1>
            <strong>{warframe.description}</strong>
          </Introduction>
          <Line>
            <Status className="status">
              <h2>Status</h2>
              <div>
                <strong>Armor:  </strong>
                <strong>{warframe.armor}</strong>
              </div>
              <div>
                <strong>Power:  </strong>
                <strong>{warframe.power}</strong>
              </div>
              <div>
                <strong>Shield: </strong>
                <strong>{warframe.shield}</strong>
              </div>
              <div>
                <strong>Health: </strong>
                <strong>{warframe.health}</strong>
              </div>
              <div>
                <strong>SprintSpeed: </strong>
                <strong>{warframe.sprintSpeed}</strong>
              </div>
              <div>
                <strong>Stamina:  </strong>
                <strong>{warframe.stamina}</strong>
              </div>
              <div>
                <strong>MasteryReq: </strong>
                <strong>{warframe.masteryReq}</strong>
              </div>
              <Mods>
                <strong>Aura: </strong>
                <Polarity src={warframe.aura} />
              </Mods>
              <Mods>
                <strong>Polaridades iniciais:</strong>
                {warframe.polarities.map((polarity, index) => <Polarity key={index} src={polarity} />)}
              </Mods>
            </Status>
            <Thumb src={warframe.wikiaThumbnail} alt="" />
            <BuiltInfos className="builtInfos">
              <h2>Fabricação</h2>
              <table>
                <thead>
                  <tr>
                    <th>Custo: {warframe.buildPrice} "Créditos"</th>
                    <th>Tempo: {warframe.buildTime / 3600} Hrs</th>
                    <th>Pular fabricação:</th>
                    <td>{warframe.skipBuildTimePrice} "Platinas"</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>Name</th>
                    <th>Quantidade necessária</th>
                    <th>Trocável</th>
                    <th></th>
                  </tr>
                  {warframe.components.map(component => (
                    <Component className="component" key={component.name}>
                      <th>{component.name}</th>
                      <td>{component.itemCount}</td>
                      <td>{`${component.tradable}`}</td>
                      {(component.drops) && (
                        <td className="link">
                          <Link href={`/itens/search/${name + component.name}`}>
                            <p>Onde conseguir o {component.name}</p>
                          </Link>
                        </td>
                      )}
                    </Component>
                  ))}
                </tbody>
              </table>
            </BuiltInfos>
          </Line>

          <AbilitiesContainer >
            <h2>Habilidades</h2>
            <div className="abilities">

              <Ability className="passive">
                <h3>Passive: </h3>
                <strong>{warframe.passiveDescription}</strong>
              </Ability>
              {warframe.abilities.map(ability => (
                <Ability key={ability.name} className="abilitiy">
                  <h3>{ability.name}: </h3>
                  <strong>{ability.description}</strong>
                </Ability>
              ))}
            </div>
          </AbilitiesContainer>
          <MoreInfo className="moreInfo">
            <h3>
              Para mais informações, acesse a <a href={warframe.wikiaUrl}>Warframe Wiki aqui</a>
            </h3>
          </MoreInfo>
        </div>
      ) : (
          <Loading className="carregando">
            <h1>Carregando...</h1>
          </Loading>
        )}
    </Container>
  );
}

export default Warframe;
