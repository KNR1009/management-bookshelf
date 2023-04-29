import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import logo from '../../../../public/banner.png';
// icon
import { FaPlus } from 'react-icons/fa';

// model
import { BlogType } from '@/model/blog';

type Props = {
  blogs: BlogType[];
};

export const Blog: React.FC<Props> = (props) => {
  console.log(props.blogs);
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
            <button className='card-container' key={blog.id}>
              <div className='card'>
                <div className='card-image'>
                  <img src={blog.acf.image01} alt='プロフィール画像' />
                </div>
                <div className='card-title'>
                  <p>{blog.title}</p>
                </div>
                <div className='card-infos'>
                  <div className='company-info'>
                    <p className='personal-name'>
                      {blog.acf.name} （{blog.acf.post}）
                    </p>
                    <p className='company-name'>{blog.acf.company_name}</p>
                  </div>
                  <div className='category-name'>
                    <p>{blog.acf.category_name}</p>
                  </div>
                </div>
              </div>
            </button>
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
  .category-name {
    padding: 5px 12px;
    border-radius: 30px;
    font-size: 14px;
    color: #747475;
    background-color: rgba(84, 41, 255, 0.1);
  }
  .card-title {
    margin-top: 24px;
    font-size: 20px;
    color: #27262e;
    font-weight: bold;
  }
  .card-infos {
    margin-top: 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .personal-name {
    font-size: 14px;
    font-weight: bold;
    color: #747475;
  }
  .company-name {
    font-size: 14px;
    color: #747475;
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
  .card-container {
    background-color: #ffffff;
    border-radius: 16px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.15);
  }
  .card {
    padding: 24px;
    overflow: hidden;
  }
  .card-image {
    display: flex;
    justify-content: center;
    text-align: center;
    overflow: hidden;
    transition: transform 0.2s ease-out;
    @media (min-width: 765px) {
      max-width: 100%;
      height: 220px; /* 任意の高さを指定 */
    }
  }
  .card-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .card-image:hover {
    transform: scale(1.05);
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
