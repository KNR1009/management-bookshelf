import React from 'react';
// style
import styled from 'styled-components';
// model
import { BlogType } from '@/model/blog';
import { formatSlashYMD } from '@/utils/formatter';
import { useRouter } from 'next/router';

type Props = {
  blog: BlogType;
  recommendations: BlogType[];
};

export const BlogDetail: React.FC<Props> = (props) => {
  const router = useRouter();
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
        <div className='border' />
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
          {props.recommendations.map((blog) => (
            <button
              className='card-container'
              key={blog.id}
              onClick={() => {
                router.push(`/${blog.id}`);
              }}
            >
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
  /* blog内のブロックstyle */
  .blog-container {
    h2 {
      margin: 48px 0 24px 0;
      padding-left: 12px;
      font-size: 24px;
      font-weight: bold;
      color: #062a4a;
      border-left: 4px solid #062a4a;
    }
    h3 {
      margin: 24px 0;
      font-size: 16px;
      font-weight: bold;
      color: #062a4a;
    }
    p {
      font-size: 16px;
      color: #333333;
      line-height: 2;
    }
    ul {
      margin-bottom: 14px;
      list-style-type: disc;
      padding-left: 10px;
    }
    li {
      line-height: 2;
    }
    img {
      /* width: 100%; */
      height: 100%;
      object-fit: cover;
    }
  }
  /* blog内のブロックstyle */

  .border {
    width: 100%;
    border: 2px solid #062a4a;
    margin: 24px 0;
  }
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
    @media (max-width: 1024px) {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
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
    font-size: 12px;
    color: #ffffff;
    background-color: #032025;
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
    @media (max-width: 1024px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 765px) {
      grid-template-columns: repeat(1, 1fr);
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
`;
