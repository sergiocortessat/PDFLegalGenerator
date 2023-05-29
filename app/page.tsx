import React from 'react';
import RootLayout from './layout';
import CustomLayout from './components/CustomLayout';
import Card from './components/UI/Card';
import Link from 'next/link';

const HomePage: React.FC = () => {
  return (
    <RootLayout>
      <CustomLayout>
    <div className='container'>
      <Card />
    </div>
    </CustomLayout>
  </RootLayout>
  );
};

export default HomePage;
