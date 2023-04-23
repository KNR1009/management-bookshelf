import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import logo from '../../../../public/banner.png';
// icon
import { FaPlus } from 'react-icons/fa';

export const Blog: React.FC = () => {
  return (
    <Wrapper>
      <div className='banner'>
        <Image src={logo} alt='ロゴ' className='logo-image' />
      </div>
      <div className='blog-container'>
        <div className='title-category'>
          <h2>新着記事</h2>
          {/* MEMO: 最初のリリース時はカテゴリー検索は不要 */}
          <div className='categories'>
            <div className='category '>
              <button className='active'>全て</button>
            </div>
            <div className='category'>
              <button>エンジニア</button>
            </div>
            <div className='category'>
              <button>デザイナー</button>
            </div>
            <div className='category'>
              <button>マーケティング</button>
            </div>
            <div className='category'>
              <button className='add-button'>
                <PlusIcon />
                もっと見る
              </button>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .title-category {
    display: flex;
    justify-content: space-between;
    align-items: center;
    h2 {
      color: #27262e;
      font-weight: bold;
      font-size: 24px;
    }
  }
  .title-category {
    margin-top: 24px;
  }
  .categories {
    display: flex;
    gap: 24px;
  }
  .category {
    color: #7a797d;
    button {
      padding: 5px 12px;
      border-radius: 30px;
    }
    .active {
      background-color: rgba(84, 41, 255, 0.1);
    }
  }
  .add-button {
    position: relative;
  }
`;

const PlusIcon = styled(FaPlus)`
  position: absolute;
  left: -8px;
  top: 50%;
  transform: translateY(-50%);
  color: #b9b8bc;
`;
