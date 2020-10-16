import React, { useContext } from 'react'
import Head from 'next/head';
import { useFetch } from '../hooks/useFetch';
import { PlatformContext } from '../context/Platform';
import NotifyMenu from '../components/NotifyMenu';

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
        <NotifyMenu />
      </main>
    </div>
  );
}

export default Home
