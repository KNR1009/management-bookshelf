import React, { useState } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import logo from '../../../../public/banner.png';
// icon
import { FaPlus } from 'react-icons/fa';
import { useFetchBlogs } from '../hooks';
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
  const { blogs } = useFetchBlogs();
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
          {/* カード */}
          {/* カード */}
          <div className='card-container'>
            <div className='card'>
              <div className='card-image'>
                <Image src='/haruka.jpg' width={324} height={196} alt='My avatar' />
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
          {/* カード */}
          {/* カード */}
          <div className='card-container'>
            <div className='card'>
              <div className='card-image'>
                <Image src='/iidaken.jpg' width={324} height={196} alt='My avatar' />
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
          {/* カード */}
          <div className='card-container'>
            <div className='card'>
              <div className='card-image'>
                <Image src='/ogawa.jpg' width={324} height={196} alt='My avatar' />
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
          {/* カード */}
          <div className='card-container'>
            <div className='card'>
              <div className='card-image'>
                <Image src='/satomi.jpg' width={324} height={196} alt='My avatar' />
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
          {/* カード */}
          <div className='card-container'>
            <div className='card'>
              <div className='card-image'>
                <Image src='/nakazima.jpg' width={324} height={196} alt='My avatar' />
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
          {/* カード */}
          <div className='card-container'>
            <div className='card'>
              <div className='card-image'>
                <Image src='/nobuo.jpg' width={324} height={196} alt='My avatar' />
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
          {/* カード */}
          <div className='card-container'>
            <div className='card'>
              <div className='card-image'>
                <Image src='/kondou.jpg' width={324} height={196} alt='My avatar' />
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
          {/* カード */}
          <div className='card-container'>
            <div className='card'>
              <div className='card-image'>
                <Image src='/mako.jpg' width={324} height={196} alt='My avatar' />
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
          {/* カード */}
          <div className='card-container'>
            <div className='card'>
              <div className='card-image'>
                <Image src='/takamura.jpg' width={324} height={196} alt='My avatar' />
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
          {/* カード */}
          <div className='card-container'>
            <div className='card'>
              <div className='card-image'>
                <Image src='/kura.jpg' width={324} height={196} alt='My avatar' />
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
          {/* カード */}
          <div className='card-container'>
            <div className='card'>
              <div className='card-image'>
                <Image src='/naoto.jpg' width={324} height={196} alt='My avatar' />
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
          {/* カード */}
          <div className='card-container'>
            <div className='card'>
              <div className='card-image'>
                <Image src='/yumi.jpg' width={324} height={196} alt='My avatar' />
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
          {/* カード */}
          {/* カード */}
          <div className='card-container'>
            <div className='card'>
              <div className='card-image'>
                <Image src='/meru.jpg' width={324} height={196} alt='My avatar' />
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
