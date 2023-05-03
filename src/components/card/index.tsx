import { BlogType } from '@/model/blog';
import { formatSlashYMD } from '@/utils/formatter';
import { useRouter } from 'next/router';
import React from 'react';
import styled from 'styled-components';

type Props = {
  blog: BlogType;
};
export const Card: React.FC<Props> = ({ blog }) => {
  const router = useRouter();
  return (
    <CardContainer
      onClick={() => {
        router.push(`/${blog.id}`);
      }}
    >
      <div className='card'>
        <div className='card-image'>
          <img src={blog.acf.image01} alt='プロフィール画像' />
        </div>
        <div className='card-data'>
          <p>{formatSlashYMD(new Date(blog.date))}</p>
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
    </CardContainer>
  );
};

const CardContainer = styled.button`
  background-color: #ffffff;
  border-radius: 16px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.15);
  .category-name {
    padding: 5px 12px;
    border-radius: 30px;
    font-size: 12px;
    color: #ffffff;
    background-color: #032025;
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
  .card-infos {
    margin-top: 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .card-data {
    margin-top: 16px;
    font-size: 14px;
    color: #747475;
  }
  .card-title {
    margin-top: 8px;
    height: 60px;
    font-size: 20px;
    color: #27262e;
    font-weight: bold;
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
  .card:hover {
    .card-image {
      transform: scale(1.05);
    }
  }
`;
