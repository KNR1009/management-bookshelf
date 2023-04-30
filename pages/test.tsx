import type { GetServerSideProps, NextPage } from 'next';

import { useRouter } from 'next/router';

import axios from 'axios';

const Home: NextPage = (props) => {
  console.log(props);
  return <p>aaa</p>;
};

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts');
    return { props: { data } };
  } catch (error) {
    console.error(error);
    return { props: { blogs: [] } };
  }
};

export default Home;
