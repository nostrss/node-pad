import React from 'react';
import { TitleWrapper } from './create.style';
import { v4 as uuidv4 } from 'uuid';

interface IProps {
  onSubmitMemo: any;
  onChangeText: any;
  memoText: string;
  memoList: any;
}

export default function CreateUI({
  onSubmitMemo,
  onChangeText,
  memoText,
  memoList,
}: IProps) {
  return (
    <TitleWrapper>
      <form onSubmit={onSubmitMemo}>
        <input
          type='text'
          placeholder='Memo Title'
          maxLength={120}
          onChange={onChangeText}
          value={memoText}
        />
        <input type='submit' value='add' />
      </form>
      <h2>My memo list</h2>
      {memoList?.map((doc: any) => (
        <ul key={uuidv4()}>
          <li>{doc.text}</li>
        </ul>
      ))}
    </TitleWrapper>
  );
}
