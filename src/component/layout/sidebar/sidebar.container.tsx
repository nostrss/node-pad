import SideBarUI from './sidebar.presenter';
import { firebaseDb } from 'App';
import React, { useEffect, useState } from 'react';
import { loadMemoList } from 'common/util';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';

export default function SideBar() {
  const [memoLists, setMemoLists] = useState<object[]>([]);
  const [memoTitle, setMemoTitle] = useState('');

  useEffect(() => {
    const getMemoLists = async () => {
      const memoListData = await loadMemoList(firebaseDb, 'no-sign-in');
      setMemoLists(memoListData);
    };
    getMemoLists();
  }, []);

  const onSubmitMemoTitle = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    const memoObj = {
      text: memoTitle,
      createdAt: serverTimestamp(),
    };
    await addDoc(collection(firebaseDb, 'no-sign-in'), memoObj);
    const UpdateData = await loadMemoList(firebaseDb, 'no-sign-in');
    setMemoLists(UpdateData);
    setMemoTitle('');
  };

  const onChangeText: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setMemoTitle(event.target.value);
  };

  return (
    <SideBarUI
      memoLists={memoLists}
      onSubmitMemoTitle={onSubmitMemoTitle}
      onChangeText={onChangeText}
      memoTitle={memoTitle}
    />
  );
}
