import SidebarItemUI from './sidebarItem.presenter';
import { IPropsSidebarItem } from './sidebarItem.type';

export default function SidebarItem({ list }: IPropsSidebarItem) {
  return <SidebarItemUI list={list} />;
}
