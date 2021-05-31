import 'tailwindcss/tailwind.css';
import '../styles/poker.css';

import { DefaultSeo } from 'next-seo';
import Head from 'next/head';
import PingTool from '../tools/PingTool';
import RedirectProvider from '../providers/RedirectProvider';

const App = ({ Component, pageProps }) => {
  return (
    <>
      {/* Setup your SEO information here. This includes information such as the name of your site. */}
      <DefaultSeo
        titleTemplate='%s - Poker'
        title='Loading'
        description='The only NextJS starter kit you will ever need.'
      />
      {/* NextSeo doesn't support icons. We need the regular Head component for this. */}
      <Head>
        <link rel='icon' type='image/svg+xml' href='/favicon.svg' />
      </Head>
      {/*
        Though this may seem like an anti pattern, it ensures providers and tools are loaded properly.
        For example, you'd place the FirebaseProvider under the RedirectProvider because the ladder relies on the previous provider.
        A rule of thumb, tools go last and the RedirectProvider should go first.
      */}
      <RedirectProvider>
        <PingTool>
          <Component {...pageProps} />
        </PingTool>
      </RedirectProvider>
    </>
  );
};

export default App;
