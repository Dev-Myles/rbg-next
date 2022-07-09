import HeadTags from '../components/app/Head';
import Layout from '../components/app/Layout';
import '../styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <>
      <HeadTags />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
