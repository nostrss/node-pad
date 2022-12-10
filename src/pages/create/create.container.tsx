import { firebaseDb } from 'App';
import {
  addDoc,
  collection,
  getDocs,
  serverTimestamp,
} from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import CreateUI from './create.presenter';

export default function CreatePage() {
  const [memoText, setMemoText] = useState('');
  const [memoList, setMemoList] = useState<object[]>([]);

  useEffect(() => {
    loadMemoList();
  }, []);

  const onSubmitMemo = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    const memoObj = {
      text: memoText,
      createdAt: serverTimestamp(),
    };
    // 이미 문서가 있는 경우 업데이트
    // await setDoc(doc(firebaseDb, 'cities', 'LA'), memoObj);
    await addDoc(collection(firebaseDb, 'no-sign-in'), memoObj);
    setMemoText('');
  };

  const loadMemoList = async () => {
    const memoList = await getDocs(collection(firebaseDb, 'no-sign-in'));
    const memoItem: object[] = [];
    memoList.forEach((doc) => {
      memoItem.push(doc.data());
    });
    setMemoList(memoItem);
  };

  const onChangeText: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setMemoText(event.target.value);
  };

  return (
    <CreateUI
      onSubmitMemo={onSubmitMemo}
      onChangeText={onChangeText}
      memoText={memoText}
      memoList={memoList}
    />
  );
}
