import React from 'react';
import { Footer } from './footer';
import { Header } from './header';

type Props = {
  children: React.ReactNode;
};

export const Layout: React.FC<Props> = (props) => {
  return (
    <>
      <Header />
      {props.children}
      <Footer />
    </>
  );
};
