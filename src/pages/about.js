import React from 'react';
import Layout from '../components/Layout/Layout';
import PageHeader from '../components/Headers/PageHeader';

const AboutPage = () => {
  return (
    <Layout>
      <PageHeader
        pageName="About"
        title="Express your style"
        continuedTitle="in the rays of the sun"
      />
    </Layout>
  );
};

export default AboutPage;
