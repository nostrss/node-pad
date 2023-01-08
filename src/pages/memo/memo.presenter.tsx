export default function MemoUI({
  memoData,
  isFetching,
  onChangeInputText,
  onClickButton,
}: any) {
  return (
    <div>
      <div>
        {isFetching ? (
          'loading'
        ) : (
          <>
            {memoData?.text.map((text: string, i: number) => {
              return <div key={i}>{text}</div>;
            })}
          </>
        )}
      </div>
      <input type='text' onChange={onChangeInputText} />
      <button onClick={onClickButton}>입력</button>
    </div>
  );
}
