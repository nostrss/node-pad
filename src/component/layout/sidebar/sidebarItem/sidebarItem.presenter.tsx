import { Link } from 'react-router-dom';
import { IPropsSidebarItemUI } from './sidebarItem.type';

export default function SidebarItemUI({ list }: IPropsSidebarItemUI) {
  return (
    <li>
      <Link to={`${list.itemId}`}>{list.text[0]}</Link>
    </li>
  );
}
