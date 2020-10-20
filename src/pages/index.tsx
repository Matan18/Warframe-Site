import React, { useContext } from 'react'
import Head from 'next/head';
import { useFetch } from '../hooks/useFetch';
import { PlatformContext } from '../context/Platform';

const Home: React.FC = () => {
  const { platform } = useContext(PlatformContext);

  function onClick() {
    useFetch('teste', platform);
  }
  return (
    <div>
      <Head>
        <title>Warframe</title>
      </Head>
      <main>
      </main>
    </div>
  );
}

export default Home
