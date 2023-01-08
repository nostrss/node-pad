import { useMutation, useQuery } from '@tanstack/react-query';
import { firebaseDb } from 'App';
import { loadMemo } from 'common/util';
import { INewTitle } from 'component/layout/sidebar/sidebar.type';
import { doc, setDoc } from 'firebase/firestore';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import MemoUI from './memo.presenter';
// import * as DOMPurify from 'dompurify';

export default function Memo() {
  const { id: pageId } = useParams();
  const [inputText, setInputText] = useState('');

  const { mutate: updateDoc, isLoading: isMutating } = useMutation(
    (updateData: INewTitle) => {
      return setDoc(
        doc(firebaseDb, 'no-sign-in', updateData.itemId),
        updateData
      );
    }
  );

  // const cleanData = DOMPurify.sanitize(sampleData);

  const { data: memoData, isFetching } = useQuery({
    queryKey: ['fetchdata', pageId],
    queryFn: async () => loadMemo(firebaseDb, 'no-sign-in', pageId as string),
  });

  const onChangeInputText = (event: React.SyntheticEvent<HTMLInputElement>) => {
    setInputText((event.target as HTMLInputElement).value);
  };

  const onClickButton = () => {
    if (memoData === undefined) return;
    const newText = [...memoData.text, inputText];
    const newMemo = {
      ...(memoData as INewTitle),
      text: newText,
    };
    updateDoc(newMemo);
  };

  return (
    <MemoUI
      memoData={memoData}
      isFetching={isFetching}
      onChangeInputText={onChangeInputText}
      onClickButton={onClickButton}
    />
  );
}
