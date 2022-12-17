import { LayoutSidebar } from './sidebar.style';
import { v4 as uuidv4 } from 'uuid';
import { Button } from 'component/button/button';
import SidebarItem from './sidebarItem/sidebarItem.container';
import { INewTite, IPropsSidebarUI } from './sidebar.type';

export default function SideBarUI({
  memoLists,
  onSubmitMemoTitle,
  onChangeText,
  memoTitle,
  isFetching,
  isMutating,
}: IPropsSidebarUI) {
  return (
    <LayoutSidebar>
      <h2>My memo list</h2>
      {isFetching
        ? 'loading'
        : memoLists?.map((list: INewTite) => (
            <ul key={uuidv4()}>
              <SidebarItem list={list} />
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
