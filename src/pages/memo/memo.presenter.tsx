export default function MemoUI({ memoData, isFetching }: any) {
  return <div>{isFetching ? 'loading' : memoData?.text}</div>;
}
