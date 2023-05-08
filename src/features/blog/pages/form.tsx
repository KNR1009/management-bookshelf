import React from 'react';
import styled from 'styled-components';
import { FaExternalLinkAlt } from 'react-icons/fa';

export const Form: React.FC = () => {
  return (
    <Wrapper>
      <h2>概要</h2>
      <div className='text-container'>
        <p>「経営者の本棚」は経営者や役員のおすすめの書籍を紹介するメディアです。</p>
        <p>
          ビジネスやリーダーシップの成功の秘訣が詰まった書籍を紹介します。
          また経営者が選ぶ名著とその背景や会社を深掘ります。
        </p>
      </div>
      <h2>インタビュー内容の具体例</h2>
      <div className='text-container'>
        <p>インタビューはオフラインorオンラインで30分から1時間程度行います</p> <br />
        <p>質問内容は下記のようになっています(一例)</p>
        <ul>
          <li>会社について</li>
          <li>提供サービスについて</li>
          <li>会社を設立した背景 (経営者のみ)</li>
          <li>おすすめの書籍 (1から5冊ほど)</li>
          <li>PRしたいこと(サービスの紹介や人材募集について)</li>
          <li>最後にひとこと</li>
        </ul>
        <p>その他、会社をPRする上で入れたい項目等ありましたらご相談ください</p>
      </div>
      <h2>インタビューを受けるメリット</h2>

      <div className='text-container'>
        <p>
          現在「経営者の本棚」は立ち上げフェーズなので<span>「無料」</span>
          でインタビュー・記事作成・PRまでを行います。
        </p>
        <p>インタビュー後の効果やメリットは下記ようなものが挙げられます。</p>
        <ul>
          <li>月間1.8億インプレッションのSNSアカウントでPRをするので高いPV数を獲得できる</li>
          <li>経営者や役員及び会社のSNSフォロワー数増加に繋がる</li>
          <li>提供サービスの認知拡大</li>
          <li>会社や社長の紹介により人材採用の強化を見込める</li>
        </ul>
      </div>
      <h2>インタビューアーについて(私について)</h2>
      <div className='text-container'>
        <ul>
          <li>渋谷のWeb開発企業で最年少執行役員(新卒3年目)</li>
          <li>役職はエンジニア×マーケティング×広報</li>
          <li>
            SNSフォロワー数7.5万人で月間インプレッション数1.8億
            <a className='icon' href='https://twitter.com/MacopeninSUTABA' target='_blank' rel='noopener noreferrer'>
              <FaExternalLinkAlt size={12} />
            </a>
          </li>
          <li>
            日本最大級のエンジニアコミニティーQiitaにて「2022年 TOP Contributor」を獲得
            <a className='icon' href='https://qiita.com/KNR109' target='_blank' rel='noopener noreferrer'>
              <FaExternalLinkAlt size={12} />
            </a>
          </li>
          <li>月間平均PV数1万のエンジニア向けメディアを運営</li>
        </ul>
      </div>
      <h2>インタビューフォーム</h2>
      <a
        target='_blank'
        rel='noopener noreferrer'
        href='https://docs.google.com/forms/d/e/1FAIpQLSf2xkfM0SzFdrgJtnmjSCDM9OeI7IP2Gm0uF7t9_zm4XI5Ctg/viewform'
      >
        Googleフォームから入力お願いします <FaExternalLinkAlt size={12} />
      </a>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .icon {
    margin-left: 10px;
    cursor: pointer;
  }
  .text-container {
    margin-left: 16px;
  }
  span {
    font-weight: bold;
  }
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
    font-size: 20px;
    font-weight: bold;
    color: #062a4a;
  }
  p {
    font-size: 16px;
    color: #333333;
    line-height: 2.5;
  }
  ul {
    margin-bottom: 14px;
    list-style-type: disc;
    padding-left: 10px;
  }
  li {
    line-height: 2;
  }
  ol {
    list-style-type: decimal; /* 番号のスタイルを指定する */
    padding-left: 20px;
  }
  img {
    /* width: 100%; */
    height: 100%;
    object-fit: cover;
  }
`;
