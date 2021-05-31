import { NextSeo } from 'next-seo';

const Index = () => {
  return (
    <>
      {/* It's a good idea to include a title as such on each page. */}
      <NextSeo title='Royal Flush' />
      {/* Your main content goes here. */}
      <div className='flex flex-col items-center justify-center min-h-screen'>
        <p className='text-3xl'>Poker</p>
        <p className='text-2xl'>
          The only NextJS starter kit you will ever need.
        </p>
      </div>
    </>
  );
};

export default Index;
