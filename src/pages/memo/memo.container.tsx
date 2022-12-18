import { useQuery } from '@tanstack/react-query';
import { firebaseDb } from 'App';
import { loadMemo } from 'common/util';
import { useParams } from 'react-router-dom';
import MemoUI from './memo.presenter';

export default function Memo() {
  const { id: pageId } = useParams();
  console.log('pageId', pageId);

  const { data: memoData, isLoading: isFetching } = useQuery({
    queryKey: ['fetchdata', pageId],
    queryFn: async () => loadMemo(firebaseDb, 'no-sign-in', pageId as string),
  });

  return <MemoUI memoData={memoData} isFetching={isFetching} />;
}
