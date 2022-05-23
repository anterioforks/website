import React from 'react';

import Achievments from 'components/pages/contributors/achievments';
import Hero from 'components/pages/contributors/hero';
import HowItWorks from 'components/pages/contributors/how-it-works/how-it-works';
import GetStarted from 'components/shared/get-started';
import Layout from 'components/shared/layout';
import Separator from 'components/shared/separator';

const SEO = {
  title: 'Novu - Contributors',
  description:
    'The ultimate library for managing multi-channel transactional notifications with a single API.',
  slug: 'contributors',
  // TODO: this value allows you not to index the page in search engines, once the page is ready remove this value
  preventIndexing: true,
};

const ContributorsPage = () => (
  <Layout seo={SEO}>
    <Hero />
    <Achievments />
    <HowItWorks />
    <GetStarted />
    <Separator backgroundColor="black" />
  </Layout>
);

export default ContributorsPage;