import React from 'react';
import Layout from '../layout';
import CustomLayout from '../components/CustomLayout';

const SearchResultsPage: React.FC = () => {
  return (
    <Layout>
        <CustomLayout>
      <main>
        {/* Add your search component here */}
        {/* Add your grid of filtered listings here */}
      </main>
      </CustomLayout>
    </Layout>
  );
};

export default SearchResultsPage;
