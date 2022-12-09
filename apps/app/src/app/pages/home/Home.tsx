/**
 ==============================================================================
 * @file   pages/home
 * @brief  the home page / the root of the router
 ==============================================================================
 * @attention
 *
 * Copyright (c) Victor Carpenter D.B.A., [Some Company], LLC 
 * All rights reserved.
 *
 ==============================================================================
 */

import styles from './Home.module.scss';
import { trpc } from '../../../utils/trpc';

/* eslint-disable-next-line */
export interface HomeProps {}

function AppContent() {
  const hello = trpc.sayHello.useQuery();
  return (
    <h1 className={styles['home']}>
      {JSON.stringify(hello.data?.message, null, 2)}
    </h1>
  );
}

export function Home(props: HomeProps) {
  return (
    <div className={styles['container']}>
      <AppContent />
    </div>
  );
}

export default Home;
