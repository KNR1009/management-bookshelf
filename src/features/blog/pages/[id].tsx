import React from 'react';
// style
import styled from 'styled-components';
import Image from 'next/image';
// model
import { BlogType } from '@/model/blog';
import { formatSlashYMD } from '@/utils/formatter';

type Props = {
  blog: BlogType;
};

export const BlogDetail: React.FC<Props> = (props) => {
  const createMarkup = (htmlString: string) => {
    return { __html: htmlString };
  };
  return (
    <Wrapper>
      <div className='title-container'>
        <div className='category'>
          <p>{props.blog.acf.category_name}</p>
        </div>
        <div className='title-container'>
          <h1>{props.blog.title}</h1>
        </div>
        <div className='post-data'>
          <p>{formatSlashYMD(new Date(props.blog.date))}</p>
        </div>
      </div>
      <div className='image-container'>
        <img src={props.blog.acf.image01} alt='' />
      </div>
      {/* TODO: 実際の記事データを入れたタイミングで改修する */}
      <div className='blog-container'>
        <div dangerouslySetInnerHTML={createMarkup(props.blog.content)} />
      </div>
      <div className='recommended-articles'>
        <h2>おすすめ記事</h2>
        <div className='cards-container'>
          {/* カード */}
          <div className='card-container'>
            <div className='card'>
              <div className='card-image'>
                <Image src='/mori-kyo.jpg' width={324} height={196} alt='My avatar' />
              </div>
              <div className='card-title'>
                <p>急成長のITスターアップで成長を目指す</p>
              </div>
              <div className='card-infos'>
                <div className='company-info'>
                  <p className='personal-name'>高田信彦 （経営者）</p>
                  <p className='company-name'>株式会社 メディアリンク</p>
                </div>
                <div className='category-name'>
                  <p>エンジニア</p>
                </div>
              </div>
            </div>
          </div>
          <div className='card-container'>
            <div className='card'>
              <div className='card-image'>
                <Image src='/mori-kyo.jpg' width={324} height={196} alt='My avatar' />
              </div>
              <div className='card-title'>
                <p>急成長のITスターアップで成長を目指す</p>
              </div>
              <div className='card-infos'>
                <div className='company-info'>
                  <p className='personal-name'>高田信彦 （経営者）</p>
                  <p className='company-name'>株式会社 メディアリンク</p>
                </div>
                <div className='category-name'>
                  <p>エンジニア</p>
                </div>
              </div>
            </div>
          </div>
          <div className='card-container'>
            <div className='card'>
              <div className='card-image'>
                <Image src='/mori-kyo.jpg' width={324} height={196} alt='My avatar' />
              </div>
              <div className='card-title'>
                <p>急成長のITスターアップで成長を目指す</p>
              </div>
              <div className='card-infos'>
                <div className='company-info'>
                  <p className='personal-name'>高田信彦 （経営者）</p>
                  <p className='company-name'>株式会社 メディアリンク</p>
                </div>
                <div className='category-name'>
                  <p>エンジニア</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .recommended-articles {
    margin-top: 24px;
    h2 {
      font-size: 28px;
      font-weight: bold;
      color: #062a4a;
    }
  }
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
  .post-data {
    color: #20528f;
    font-size: 12px;
    font-weight: bold;
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
  /* カード系 */
  .category-name {
    padding: 5px 12px;
    border-radius: 30px;
    font-size: 14px;
    color: #747475;
    background-color: rgba(84, 41, 255, 0.1);
  }
  .card-title {
    margin-top: 24px;
    font-size: 24px;
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
    box-shadow: 0 8px 8px rgba(0, 0, 0, 0.1);
  }
  .card-image:hover {
    transform: scale(1.05);
  }
`;
