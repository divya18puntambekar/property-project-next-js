// page.tsx

import React from 'react';
import DashboardPage from './dashboard/page'; // Importing the exported component
import { Footer, Hero, HomepageProperties, Infoboxes } from './api/route/route';

const Home = () => {
  return (
    <>
      {/* <DashboardPage /> 
       */}
       <Hero />
     <Infoboxes />
     <HomepageProperties />
    </>
  );
}

export default Home;
