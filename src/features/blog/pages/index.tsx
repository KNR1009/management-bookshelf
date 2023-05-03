import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import logo from '../../../../public/banner.png';
// icon
import { FaPlus } from 'react-icons/fa';

// model
import { BlogType } from '@/model/blog';
import { Card } from '@/components/card';

type Props = {
  blogs: BlogType[];
};

export const Blog: React.FC<Props> = (props) => {
  return (
    <Wrapper>
      <div className='category-search'>
        <button
          onClick={() => {
            alert('TODO: 気が向いたら実装する');
          }}
        >
          エンジニア
        </button>
        <button>コンサルティング</button>
        <button>マーケティング</button>
        <button>デザイナー</button>
        <button>広報</button>
        <button>人事</button>
        <button>スタートアップ</button>
        <button>営業</button>
        <button>EC</button>
        <button>医療</button>
        <button>建築</button>
        <button>デジタルブランディング</button>
      </div>

      <div className='banner'>
        <Image src={logo} alt='ロゴ' className='logo-image' />
      </div>
      <div className='blog-container'>
        <div className='title-category'>
          <h2>新着記事</h2>
          {/* 記事一覧の詳細画面へ遷移させる+ページネーション */}
          <div className='category'>
            <button className='add-button'>
              <PlusIcon />
              もっと見る
            </button>
          </div>
        </div>
        <div className='cards-container'>
          {props.blogs.map((blog) => (
            <Card blog={blog} key={blog.id} />
          ))}
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .category-search {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-bottom: 24px;
    button {
      background-color: #ffffff;
      border: 1px solid #dfdfdf;
      color: #27262e;
      font-size: 12px;
      padding: 4px 12px;
      border-radius: 8px;
    }
  }

  .cards-container {
    margin-top: 24px;
    display: grid;
    gap: 24px;
    grid-template-columns: repeat(3, 1fr);
    @media (max-width: 1024px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 765px) {
      grid-template-columns: repeat(1, 1fr);
    }
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
