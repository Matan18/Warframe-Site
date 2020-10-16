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
        <h1>Hello World</h1>
        <button onClick={onClick}>Search</button>
      </main>
    </div>
  );
}

export default Home
