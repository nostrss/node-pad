import { IPropsSidebarItemUI } from './sidebarItem.type';

export default function SidebarItemUI({ list }: IPropsSidebarItemUI) {
  return <li>{list.text}</li>;
}
