import React from 'react';
import SideBar from './sidebar/sidebar.container';
import styled from 'styled-components';

interface IProps {
  children: React.ReactElement;
}

export const WrapperRow = styled.div`
  display: flex;
  flex-direction: row;
`;

export default function Layout({ children }: IProps) {
  return (
    <>
      {/* <header>header</header> */}
      <WrapperRow>
        <SideBar />
        <main>{children}</main>
      </WrapperRow>
      {/* <footer>footer</footer> */}
    </>
  );
}
