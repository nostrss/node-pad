import SidebarItemUI from './sidebarItem.presenter';
import { IPropsSidebarItemUI } from './sidebarItem.type';

export default function SidebarItem({ list }: IPropsSidebarItemUI) {
  return <SidebarItemUI list={list} />;
}
