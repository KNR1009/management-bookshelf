import React from 'react';
// style
import styled from 'styled-components';
import Image from 'next/image';

export const BlogDetail: React.FC = () => {
  return (
    <Wrapper>
      <div className='title-container'>
        <div className='category'>
          <p>デザイン</p>
        </div>
        <div className='title-container'>
          <h1>Sketch 67リリース。ドキュメントへの埋め込みフォント対応。</h1>
        </div>
      </div>
      <div className='image-container'>
        <img src='/mako.jpg' alt='' />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .category {
    p {
      color: #20528f;
      font-size: 16px;
      font-weight: bold;
    }
  }
  .title-container {
    h1 {
      font-size: 36px;
      font-weight: bold;
      color: #062a4a;
    }
  }
  .image-container {
    width: 100%;
    height: 500px;
    overflow: hidden;
    margin-top: 24px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;
