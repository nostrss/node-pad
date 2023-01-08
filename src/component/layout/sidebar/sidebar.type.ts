import React, { ChangeEvent } from 'react';

export interface INewTitle {
  text: string[];
  createdAt: any;
  itemId: string;
}

export interface IPropsSidebarUI {
  memoLists: any;
  onSubmitMemoTitle: (event: React.SyntheticEvent) => void;
  onChangeText: (event: ChangeEvent<HTMLInputElement>) => void;
  memoTitle: string;
  isFetching: boolean;
  isMutating: boolean;
}
