import React, { ChangeEvent } from 'react';

export interface INewTite {
  text: string;
  createdAt: any;
}

export interface IPropsSidebarUI {
  memoLists: any;
  onSubmitMemoTitle: (event: React.SyntheticEvent) => void;
  onChangeText: (event: ChangeEvent<HTMLInputElement>) => void;
  memoTitle: string;
  isFetching: boolean;
  isMutating: boolean;
}
