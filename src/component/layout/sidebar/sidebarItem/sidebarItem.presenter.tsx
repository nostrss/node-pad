// import { Route, Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import { IPropsSidebarItemUI } from './sidebarItem.type';

export default function SidebarItemUI({ list }: IPropsSidebarItemUI) {
  return (
    <li>
      <a href={`/node-pad/${list.itemId}`}>{list.text}</a>
      {/* <Link to={`${list.itemId}`}>{list.text}</Link> */}
    </li>
  );
}
