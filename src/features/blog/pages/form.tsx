import React from 'react';
import styled from 'styled-components';
import { FaExternalLinkAlt } from 'react-icons/fa';

export const Form: React.FC = () => {
  return (
    <Wrapper>
      <h2>概要</h2>
      <div className='text-container'>
        <p>「Innovate AI Voices」はAI技術とその影響を深く掘り下げる専門メディアです。</p>
        <p>
          最新のAIトレンド、革新的な研究、およびAIを活用するビジネスリーダー、開発者、研究者の独占インタビューを提供します。
          テクノロジーの未来を形作る、先駆的な考え方や洞察を、幅広い視点からお届けします。
        </p>
      </div>
      <h2>インタビュー内容の具体例</h2>
      <div className='text-container'>
        <p>インタビューはオフラインorオンラインで30分から1時間程度行います</p> <br />
        <p>質問内容は下記のようになっています(一例)</p>
        <ul>
          <li>会社について</li>
          <li>AI関連の活動内容</li>
          <li>注目しているAI技術</li>
          <li>今後の活動</li>
          <li>おすすめのAIツール</li>
          <li>最後にひとこと</li>
        </ul>
        <p>その他、会社をPRする上で入れたい項目等ありましたらご相談ください</p>
      </div>
      <h2>インタビューを受けるメリット</h2>

      <div className='text-container'>
        <p>
          現在「Innovate AI Voices」は立ち上げフェーズなので<span>「無料」</span>
          でインタビュー・記事作成・PRまでを行います。
        </p>
        <p>インタビューを受けるメリット</p>
        <ul>
          <li>月間2.4億インプレッションのTwitter(X)でPR</li>
          <li>AI界隈での権威性を示せる</li>
          <li>SNSフォロワー数増加に繋がる</li>
          <li>提供サービスの認知拡大</li>
          <li>自分のポートフォリオになる</li>
        </ul>
      </div>
      <h2>インタビューアーについて(私について)</h2>
      <div className='text-container'>
        <ul>
          <li>渋谷のWeb開発会社で執行役員</li>
          <li>役職はPM・広報・採用・マーケティング</li>
          <li>
            SNSフォロワー数8.7万人で月間インプレッション数2.4億(最高)
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
          <li>経営者・生成AIコミュニティを主催</li>
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
