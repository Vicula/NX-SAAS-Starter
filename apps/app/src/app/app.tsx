import styles from './app.module.scss';

import { PageHeader } from '@nx-saas/component-library';
import { Provider } from '../providers/GlobalProvider';
import { Link } from 'react-router-dom';
import Router from './router';
import { trpc } from '../utils/trpc';

function AppContent() {
  const hello = trpc.sayHello.useQuery();
  return <main className="p-2">{JSON.stringify(hello.data?.message, null, 2)}</main>;
}

export function App() {
  return (
    <Provider>
      <PageHeader siteTitle="NX SAAS">
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
      <AppContent />
      <Router />
    </Provider>
  );
}

export default App;
