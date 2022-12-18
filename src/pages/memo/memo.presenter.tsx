export default function MemoUI({ memoData, isFetching }: any) {
  console.log(memoData);
  return <div>{isFetching ? 'loading' : memoData?.text}</div>;
}
