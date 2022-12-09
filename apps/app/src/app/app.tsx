/**
 ==============================================================================
 * @file   app
 * @brief  the main app file for the react frontend
 ==============================================================================
 * @attention
 *
 * Copyright (c) Victor Carpenter D.B.A., [Some Company], LLC 
 * All rights reserved.
 *
 ==============================================================================
 */

import styles from './app.module.scss';
import { PageHeader } from '@nx-saas/component-library';
import { Provider } from '../providers/GlobalProvider';
import { Link } from 'react-router-dom';
import Router from './router';

export function App() {
  return (
    <Provider>
      <PageHeader siteTitle="NX SAAS">
        <nav role="navigation">
          <ul className={styles['navList']}>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </nav>
      </PageHeader>
      <Router />
    </Provider>
  );
}

export default App;
