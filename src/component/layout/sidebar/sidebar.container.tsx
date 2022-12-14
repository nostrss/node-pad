import SideBarUI from './sidebar.presenter';
import { firebaseDb } from 'App';
import React, { useState } from 'react';
import { loadMemoList } from 'common/util';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { useMutation, useQuery } from '@tanstack/react-query';

interface INewTite {
  text: string;
  createdAt: any;
}

export default function SideBar() {
  const [memoTitle, setMemoTitle] = useState('');
  const { mutate: createTitle, isLoading: isMutating } = useMutation(
    (newTitle: INewTite) => {
      return addDoc(collection(firebaseDb, 'no-sign-in'), newTitle);
    }
  );

  const {
    data: memoLists,
    isLoading: isFetching,
    refetch,
  } = useQuery({
    queryKey: ['fetchdata'],
    queryFn: async () => loadMemoList(firebaseDb, 'no-sign-in'),
  });

  const onSubmitMemoTitle = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    const memoObj = {
      text: memoTitle,
      createdAt: serverTimestamp(),
    };

    createTitle(memoObj);
    refetch();
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
      isFetching={isFetching}
      isMutating={isMutating}
    />
  );
}
