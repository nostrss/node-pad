import SideBarUI from './sidebar.presenter';
import { firebaseDb } from 'App';
import React, { useEffect, useState } from 'react';
import { loadMemoList } from 'common/util';
import { setDoc, serverTimestamp, doc } from 'firebase/firestore';
import { useMutation, useQuery } from '@tanstack/react-query';
import { INewTitle } from './sidebar.type';
import { useDispatch } from 'react-redux';
import { getMemoList } from 'redux/createSlice/createSlice';
import { v4 as uuidv4 } from 'uuid';

export default function SideBar() {
  const [memoTitle, setMemoTitle] = useState('');

  const dispatch = useDispatch();

  const { mutate: createTitle, isLoading: isMutating } = useMutation(
    (newTitle: INewTitle) => {
      return setDoc(doc(firebaseDb, 'no-sign-in', newTitle.itemId), newTitle);
    }
  );

  const {
    data: memoLists,
    isLoading: isFetching,
    refetch,
  } = useQuery({
    queryKey: ['fetchdatalist'],
    queryFn: async () => loadMemoList(firebaseDb, 'no-sign-in'),
  });

  useEffect(() => {
    dispatch(getMemoList(JSON.stringify(memoLists)));
  }, [memoLists]);

  const onSubmitMemoTitle = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    const newId = uuidv4();
    const memoObj = {
      itemId: newId,
      text: [memoTitle],
      createdAt: serverTimestamp(),
    };

    createTitle(memoObj);
    refetch();
    setMemoTitle('');
  };

  const onChangeText = (event: React.SyntheticEvent<HTMLInputElement>) => {
    setMemoTitle((event.target as HTMLInputElement).value);
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
