import { useQuery } from '@tanstack/react-query';
import { firebaseDb } from 'App';
import { loadMemo } from 'common/util';
import { useParams } from 'react-router-dom';
import MemoUI from './memo.presenter';
import * as DOMPurify from 'dompurify';

export default function Memo() {
  const { id: pageId } = useParams();
  const sampleData = '<li>hi</li>';

  const cleanData = DOMPurify.sanitize(sampleData);

  const { data: memoData, isLoading: isFetching } = useQuery({
    queryKey: ['fetchdata', pageId],
    queryFn: async () => loadMemo(firebaseDb, 'no-sign-in', pageId as string),
  });

  return (
    <MemoUI memoData={memoData} isFetching={isFetching} cleanData={cleanData} />
  );
}
