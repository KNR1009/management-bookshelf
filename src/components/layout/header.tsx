import React from 'react';
// style
import styled from 'styled-components';
import Image from 'next/image';
import logo from '../../../public/logo.png';
// icon
import { FaSearch } from 'react-icons/fa';

export const Header: React.FC = () => {
  return (
    <Wrapper>
      <div className='logo'>
        <Image src={logo} alt='ロゴ' width={80} height={60} className='logo-image' />
      </div>
      <div className='search-form'>
        <input type='text' placeholder='検索' />
        <SearchIcon />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  max-width: 1200px;
  padding: 12px 32px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 765px) {
    justify-content: center;
  }
  .log {
    img {
      height: 30px;
      width: 100px;
    }
  }
  .logo-image {
    border-radius: 8px;
  }
  .search-form {
    @media (max-width: 765px) {
      display: none;
    }
    position: relative;
    input {
      width: 400px;
      padding: 10px;
      padding-left: 40px;
      background-color: #ffffff;
      border-radius: 35px;
      font-size: 14px;
      outline: none;
      &::placeholder {
        color: #ccc;
      }
    }
  }
`;
const SearchIcon = styled(FaSearch)`
  position: absolute;
  left: 0.9rem;
  top: 50%;
  transform: translateY(-50%);
  color: #b9b8bc;
`;
