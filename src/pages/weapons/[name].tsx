import { useRouter } from 'next/dist/client/router';
import Link from "next/link";
import React, { useEffect, useMemo, useState } from 'react';
import { IWeapon } from '../../components/Arsenal/Weapons/Weapon';
import { useFetch } from '../../hooks/useFetch';

import {
  BuiltInfos,
  Component,
  Container,
  Loading,
  AbilitiesContainer,
  Ability,
  Introduction,
  Line,
  Mods,
  MoreInfo,
  Thumb
} from '../../styles/pages/warframes/styles';
import { Status } from "../../styles/pages/weapons/styles";

const Weapons: React.FC = () => {
  const router = useRouter();
  const param = 'weapons/search/';
  const { data } = useFetch<IWeapon[]>(param + router.query.name);
  const [weapon, setWeapon] = useState<IWeapon>();

  useEffect(() => {
    console.log(router.query.name)
    if (data) {
      const compareName = (router.query.name as string)?.toLowerCase();
      data.map(weaponItem => {
        if (compareName === weaponItem.name.toLowerCase()) {
          setWeapon(weaponItem);
        }
      })
    }
  }, [data])

  const name = useMemo(() => {
    if (weapon?.name.indexOf('Prime') != -1) {
      return weapon?.name.replace('Prime', 'P.') + ' ';
    }
    else {
      return weapon?.name + ' ';
    }
  }, [weapon])

  return (
    <Container>
      {weapon ?
        (
          <div>
            <Introduction>
              <h1>{weapon.name}</h1>
              <strong>{weapon.description}</strong>
            </Introduction>
            <Line>
              <Status>
                <h2>Primaria</h2>
                <div>
                  <strong>Tipo</strong>
                  <strong>{weapon.type}</strong>
                </div>
                <div>
                  <strong>Cadência de Tiro</strong>
                  <strong>{weapon.fireRate?.toFixed(2)}</strong>
                </div>
                <div>
                  <strong>Carregador</strong>
                  <strong>{weapon.magazineSize}</strong>
                </div>
                <div>
                  <strong>Chance Crítica</strong>
                  <strong>{(weapon.criticalChance * 100)?.toFixed(1)}%</strong>
                </div>
                <div>
                  <strong>Gatilho:</strong>
                  <strong>{weapon.trigger}</strong>
                </div>
                <div>
                  <strong>Multiplicador Crítico</strong>
                  <strong>{weapon.criticalMultiplier?.toFixed(1)}x</strong>
                </div>
                <div>
                  <strong>Precisão</strong>
                  <strong>{weapon.accuracy?.toFixed(1)}</strong>
                </div>
                <div>
                  <strong>Recarga</strong>
                  <strong>{weapon.reloadTime?.toFixed(1)}</strong>
                </div>
                <div>
                  <strong>Ruído</strong>
                  <strong>{weapon.noise}</strong>
                </div>
                <div>
                  <strong>Status</strong>
                  <strong>{(weapon.procChance * 100)?.toFixed(1)}%</strong>
                </div>
                <div>
                  <strong>Tiro Múltiplo</strong>
                  <strong>{weapon.multishot?.toFixed(1)}</strong>
                </div>
                <h2>Dano</h2>
                <div>
                  <strong>Impact</strong>
                  <strong>{weapon.damageTypes.impact?.toFixed(1)}</strong>
                </div>
                <h2>Ataque Radial</h2>
                <div>
                  <strong>Alcance</strong>
                  <strong>{weapon.areaAttack?.falloff.end?.toFixed(2)}</strong>
                </div>
                <div>
                  <strong>Decaimento</strong>
                  <strong>{(weapon.areaAttack?.falloff.reduction * 100)?.toFixed(1)}%</strong>
                </div>
                <div>
                  <strong>Explosivo</strong>
                  <strong>{weapon.areaAttack?.blast?.toFixed(1)}</strong>
                </div>
                <div className="total">
                  <strong>Total</strong>
                </div>

              </Status>
              <Thumb src={weapon.wikiaThumbnail} />
              <BuiltInfos className="builtInfos">
                <h2>Fabricação</h2>
                <table>
                  <thead>
                    <tr>
                      <th>Custo: {weapon.buildPrice} "Créditos"</th>
                      <th>Tempo: {weapon.buildTime / 3600} Hrs</th>
                      <th>Pular fabricação:</th>
                      <td>{weapon.skipBuildTimePrice} "Platinas"</td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th>Name</th>
                      <th>Quantidade necessária</th>
                      <th>Trocável</th>
                      <th></th>
                    </tr>
                    {weapon.components.map((component, index) => (
                      <Component className="component" key={index}>
                        <th>{component.name}</th>
                        <td>{component.itemCount}</td>
                        <td>{`${component.tradable}`}</td>
                        {(component.drops) && (
                          <td className="link">
                            <Link href={`/drops/search/${component.drops[0].type}`}>
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
          </div>
        ) : (
          <Loading className="carregando">
            <h1>Carregando...</h1>
          </Loading>
        )}
    </Container>
  );
}

export default Weapons;
