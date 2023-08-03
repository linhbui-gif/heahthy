import React from 'react';
import BannerMain from '@/containers/Banner/BannerMain';
import TabHome from '@/containers/TabHome/TabHome';

const Home = () => {
  return (
    <>
      <div className="Home">
        <BannerMain />
        <TabHome />
      </div>
    </>
  );
};

export default Home;
