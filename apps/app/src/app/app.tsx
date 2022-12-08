// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';

import { PageHeader } from '@nx-saas/component-library';

import { Link } from 'react-router-dom';
import Router from './router';

export function App() {
  return (
    <>
      <div />
      <PageHeader siteTitle='NX SAAS'>
        <div role="navigation">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/page-2">Page 2</Link>
            </li>
          </ul>
        </div>
      </PageHeader>
      <Router />
    </>
  );
}

export default App;
