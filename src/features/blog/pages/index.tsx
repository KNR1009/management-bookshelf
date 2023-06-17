import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import logo from '../../../../public/banner.png';
// icon
import { FaPlus } from 'react-icons/fa';

// model
import { BlogType } from '@/model/blog';
import { CategoryType } from '@/model/category';

// components
import { Card } from '@/components/card';
import Link from 'next/link';

// fade-in
import AOS from 'aos';
import 'aos/dist/aos.css'; // AOS CSSをインポート

type Props = {
  blogs: BlogType[];
  recommendations: BlogType[];
  categories: CategoryType[];
};

export const Blog: React.FC<Props> = (props) => {
  // カード枚数
  const [numVisibleBlogs, setNumVisibleBlogs] = useState(9);

  const handleClick = () => {
    setNumVisibleBlogs((prevNum) => prevNum + 9);
  };
  // fade-inの初期化
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true
    });
  }, []);
  return (
    <Wrapper>
      <div className='category-search'>
        {props.categories.map((i) => (
          <div className='button' key={i.id}>
            <Link href={` categories/${i.id}`}>{i.name}</Link>
          </div>
        ))}
      </div>
      <Link href='/form'>
        <div className='banner' data-aos='fade-up'>
          <Image src={logo} alt='ロゴ' className='logo-image' />
        </div>
      </Link>
      <div className='blog-container'>
        <div className='title-category'>
          <h2>トレンド記事</h2>
        </div>
        <div className='cards-container' data-aos='fade-up'>
          {props.recommendations.map((blog) => (
            <Card blog={blog} key={blog.id} />
          ))}
        </div>
      </div>
      <div className='blog-container'>
        <div className='title-category'>
          <h2>新着記事</h2>
        </div>
        <div className='cards-container' data-aos='fade-up'>
          {props.blogs.slice(0, numVisibleBlogs).map((blog) => (
            <Card blog={blog} key={blog.id} />
          ))}
        </div>
        <div className='add-button-container'>
          <button className='add-button' onClick={handleClick}>
            <PlusIcon />
            記事をもっと見る
          </button>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .banner {
    cursor: pointer;
    img {
      border-radius: 8px;
    }
  }
  .blog-container {
    padding-top: 24px;
  }
  .category-search {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-bottom: 24px;
    .button {
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
  .add-button-container {
    margin-top: 20px;
    font-size: 20px;
    text-align: center;
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
  left: -12px;
  top: 50%;
  transform: translateY(-50%);
  color: #b9b8bc;
`;
