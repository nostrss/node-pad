import React from 'react';
import HomeUI from './home.presenter';
import { collection } from 'firebase/firestore';
import { firebaseDb } from 'App';

export default function HomePage() {
  const memoItems = collection(firebaseDb, 'node-pad-collection');

  console.log(memoItems);
  return <HomeUI />;
}
