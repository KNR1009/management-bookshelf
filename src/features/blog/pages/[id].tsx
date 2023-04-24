import React from 'react';
// style
import styled from 'styled-components';
import Image from 'next/image';

export const BlogDetail: React.FC = () => {
  return (
    <Wrapper>
      <div className='image-container'>
        <img src='/mako.jpg' alt='' />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .image-container {
    width: 100%;
    height: 500px;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;
