export default function MemoUI({ memoData, isFetching, cleanData }: any) {
  return (
    <>
      <div>{isFetching ? 'loading' : memoData?.text}</div>
      <div dangerouslySetInnerHTML={{ __html: cleanData }}></div>
    </>
  );
}
