import React from 'react';
import { AnimatePresence } from 'framer-motion';
import '../styles/globals.css';
import PropTypes from 'prop-types';
import Layout from '../components/layouts/main';

if (typeof window !== 'undefined') {
  window.history.scrollRestoration = 'manual';
}

function MyApp({ Component, pageProps, router }) {
  return (
    <Layout>
      <AnimatePresence
        exitBeforeEnter
        onExitComplete={() => {
          if (typeof window !== 'undefined') {
            window.scrollTo(0, 0);
          }
        }}
      >
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
    </Layout>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.shape({}).isRequired,
  router: PropTypes.shape({
    route: PropTypes.string.isRequired,
  }).isRequired,
};

export default MyApp;
