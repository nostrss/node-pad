// import React from 'react';
import SideBar from './sidebar/sidebar.container';
import styled from 'styled-components';
import { Outlet } from 'react-router-dom';

export const WrapperRow = styled.div`
  display: flex;
  flex-direction: row;
`;

export default function Layout() {
  return (
    <>
      {/* <header>header</header> */}
      <WrapperRow>
        <SideBar />
        <Outlet />
      </WrapperRow>
      {/* <footer>footer</footer> */}
    </>
  );
}
