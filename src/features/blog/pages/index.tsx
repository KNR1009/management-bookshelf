import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import logo from '../../../../public/banner.png';

export const Blog: React.FC = () => {
  return (
    <Wrapper>
      <div className='banner'>
        <Image src={logo} alt='ロゴ' className='logo-image' />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div``;
