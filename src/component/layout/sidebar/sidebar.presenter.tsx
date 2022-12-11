import { LayoutSidebar } from './sidebar.style';
import { v4 as uuidv4 } from 'uuid';
import { Button } from 'component/button/button';

export default function SideBarUI({
  memoLists,
  onSubmitMemoTitle,
  onChangeText,
  memoTitle,
  isFetching,
  isMutating,
}: any) {
  return (
    <LayoutSidebar>
      <h2>My memo list</h2>
      {isFetching
        ? 'loading'
        : memoLists?.map((doc: any) => (
            <ul key={uuidv4()}>
              <li>{doc.text}</li>
            </ul>
          ))}

      <Button
        onSubmit={onSubmitMemoTitle}
        onChange={onChangeText}
        value={memoTitle}
      ></Button>
      {isMutating ? 'waiting' : ''}
    </LayoutSidebar>
  );
}
