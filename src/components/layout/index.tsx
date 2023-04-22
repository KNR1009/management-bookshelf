import React from 'react';
import styled from 'styled-components';
// import { Footer } from './footer';
import { Header } from './header';

type Props = {
  children: React.ReactNode;
};

export const Layout: React.FC<Props> = (props) => {
  return (
    <>
      <Header />
      <Main>{props.children}</Main>
      {/* <Footer /> */}
    </>
  );
};

const Main = styled.main`
  max-width: 1200px;
  margin: 0 auto;
  padding: 32px;
`;
