import React, { useState } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import logo from '../../../../public/banner.png';
// icon
import { FaPlus } from 'react-icons/fa';
// TODO: API側と合わせる
const ButtonLabel = [
  {
    id: 1,
    name: '全て'
  },
  { id: 2, name: 'エンジニア' },
  { id: 3, name: 'デザイナー' },
  { id: 4, name: 'マーケティング' }
];

export const Blog: React.FC = () => {
  const [isActiveIndex, setIsActiveIndex] = useState<number>(0);
  // TODO: APIでカテゴリーに応じたデータを取得する
  const handleClick = (index: number) => {
    setIsActiveIndex(index);
  };
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
            {ButtonLabel.map((i, index) => (
              <div className='category ' key={i.id}>
                <button
                  className={isActiveIndex === index ? 'active' : ''}
                  onClick={() => {
                    handleClick(index);
                  }}
                >
                  {i.name}
                </button>
              </div>
            ))}
            <div className='category'>
              <button className='add-button'>
                <PlusIcon />
                もっと見る
              </button>
            </div>
          </div>
        </div>
        <div className='cards-container'>
          <div className='card-container'>
            <div className='card'>
              <div className='card-image'>
                <img src='https://placehold.jp/324x196.png' alt='' />
              </div>
            </div>
          </div>
          <div className='card-container'>
            <div className='card'>
              <div className='card-image'>
                <img src='https://placehold.jp/324x196.png' alt='' />
              </div>
            </div>
          </div>
          <div className='card-container'>
            <div className='card'>
              <div className='card-image'>
                <img src='https://placehold.jp/324x196.png' alt='' />
              </div>
            </div>
          </div>
          <div className='card-container'>
            <div className='card'>
              <div className='card-image'>
                <img src='https://placehold.jp/324x196.png' alt='' />
              </div>
            </div>
          </div>
          <div className='card-container'>
            <div className='card'>
              <div className='card-image'>
                <img src='https://placehold.jp/324x196.png' alt='' />
              </div>
            </div>
          </div>
          <div className='card-container'>
            <div className='card'>
              <div className='card-image'>
                <img src='https://placehold.jp/324x196.png' alt='' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .cards-container {
    margin-top: 24px;
    display: grid;
    gap: 24px;
    grid-template-columns: repeat(3, 1fr);
  }
  .card-container {
    background-color: #ffffff;
    border-radius: 16px;
  }
  .card {
    padding: 12px 12px 16px 12px;
  }
  .card-image {
    text-align: center;
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  }

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
