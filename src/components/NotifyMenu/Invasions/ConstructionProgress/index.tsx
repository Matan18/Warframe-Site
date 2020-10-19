import React, { useContext } from 'react';
import { PlatformContext } from '../../../../context/Platform';
import { useFetch } from '../../../../hooks/useFetch';
import { IConstructionProgress } from './ConstructionProgress';

import { Container, Title, Content } from '../../../../styles/components/NotifyMenu/Invasions/ConstructionProgress/styles';

const ConstructionProgress: React.FC = () => {
  const { platform } = useContext(PlatformContext);
  const param = "constructionProgress";
  const { data: constructionProgress } = useFetch<IConstructionProgress>(param, platform)

  return (
    <>
      {constructionProgress && (
        <Container >
          <div>

            <Title>Situação da Construção</Title>
            <Content>
              <div>
                <p>Grineer</p>
                <div>
                  <h1>{constructionProgress.fomorianProgress}%</h1>
                  <p>Fomorian</p>
                </div>
              </div>
              <div>
                <div>
                  <h1>{constructionProgress.razorbackProgress}%</h1>
                  <p>Armada RazorBack</p>
                </div>
                <p>Corpus</p>
              </div>
            </Content>
          </div>
        </Container >
      )}
    </>
  );
}

export default ConstructionProgress;
