// page.tsx

import React from 'react';
import DashboardPage from './dashboard/page'; // Importing the exported component
import { Footer } from './api/route/route';

const Home = () => {
  return (
    <>
      <DashboardPage /> 
      {/* <Footer /> */}
    </>
  );
}

export default Home;
