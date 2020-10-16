import React, { useContext } from 'react'
import Head from 'next/head';

const Home: React.FC = () => {

  function onClick() {
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
