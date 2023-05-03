import React from 'react';
// style
import styled from 'styled-components';
// model
import { BlogType } from '@/model/blog';

// utils
import { formatSlashYMD } from '@/utils/formatter';

// icon
import { FaTwitter, FaFacebookF, FaLink, FaExternalLinkAlt, FaLinkedin } from 'react-icons/fa';

// components
import { Card } from '@/components/card';

type Props = {
  blog: BlogType;
  recommendations: BlogType[];
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
      <div className='company-info'>
        <h2>会社情報</h2>
        <Table>
          <tbody>
            <tr>
              <TableCellLabel>会社名</TableCellLabel>
              <TableCell>
                {props.blog.acf.company_hp === '' ? (
                  <> {props.blog.acf.company_name}</>
                ) : (
                  <a href={props.blog.acf.company_hp} target='_blank' rel='noopener noreferrer'>
                    {props.blog.acf.company_name}
                    <span>
                      <FaExternalLinkAlt />
                    </span>
                  </a>
                )}
              </TableCell>
            </tr>
            <tr>
              <TableCellLabel>事業内容</TableCellLabel>
              <TableCell>{props.blog.acf.business}</TableCell>
            </tr>
            <tr>
              <TableCellLabel>名前</TableCellLabel>
              <TableCell>{props.blog.acf.name}</TableCell>
            </tr>
            <tr>
              <TableCellLabel>役職</TableCellLabel>
              <TableCell>{props.blog.acf.post}</TableCell>
            </tr>
            <tr>
              <TableCellLabel>設立</TableCellLabel>
              <TableCell>{props.blog.acf.establishment}</TableCell>
            </tr>

            <tr>
              <TableCellLabel>各種リンク</TableCellLabel>
              <TableCell>
                {/* SNSリンク */}
                <SocialMediaWrapper>
                  {props.blog.acf.twitter !== '' && (
                    <SocialMediaButton
                      href={props.blog.acf.twitter}
                      target='_blank'
                      rel='noopener noreferrer'
                      bgColor='#1DA1F2'
                    >
                      <FaTwitter color='#ffffff' />
                    </SocialMediaButton>
                  )}
                  {props.blog.acf.facebook !== '' && (
                    <SocialMediaButton
                      href={props.blog.acf.facebook}
                      target='_blank'
                      rel='noopener noreferrer'
                      bgColor='#1877F2'
                    >
                      <FaFacebookF color='#ffffff' />
                    </SocialMediaButton>
                  )}
                  {props.blog.acf.company_hp !== '' && (
                    <SocialMediaButton
                      href='<YOUR_COMPANY_WEBSITE_URL>'
                      target='_blank'
                      rel='noopener noreferrer'
                      bgColor='#FF4B4B'
                    >
                      <FaLink color='#ffffff' />
                    </SocialMediaButton>
                  )}
                  {props.blog.acf.linkedin !== '' && (
                    <SocialMediaButton
                      href='https://www.facebook.com/sharer/sharer.php?u=<BLOG_POST_URL>'
                      target='_blank'
                      rel='noopener noreferrer'
                      bgColor='#1877F2'
                    >
                      <FaLinkedin color='#ffffff' />
                    </SocialMediaButton>
                  )}
                </SocialMediaWrapper>
                {/* SNSリンク */}
              </TableCell>
            </tr>
          </tbody>
        </Table>
      </div>
      <div className='recommended-articles'>
        <h2>おすすめ記事</h2>
        <div className='cards-container'>
          {props.recommendations.map((blog) => (
            <Card blog={blog} key={blog.id} />
          ))}
        </div>
      </div>
    </Wrapper>
  );
};

// SNSリンク
const SocialMediaWrapper = styled.div`
  display: flex;
`;

type SocialMediaButtonProps = {
  bgColor: string;
};

const SocialMediaButton = styled.a<SocialMediaButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: ${({ bgColor }) => bgColor};
  margin: 0 10px;
  text-decoration: none;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }

  & i {
    color: #fff;
    font-size: 20px;
  }
`;

// 会社情報
const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
`;

const TableCell = styled.td`
  padding: 16px;
  border: 1px solid #ccc;
  text-align: left;
  color: #333333;
  span {
    margin-left: 10px;
  }
`;

const TableCellLabel = styled(TableCell)`
  font-weight: bold;
  background-color: #f2f2f2;
`;
// 本文

const Wrapper = styled.div`
  .company-info {
    margin-top: 48px;
    h2 {
      margin: 48px 0 24px 0;
      font-size: 24px;
      font-weight: bold;
      color: #062a4a;
    }
  }
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
`;
