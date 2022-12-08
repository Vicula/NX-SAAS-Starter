import { render } from '@testing-library/react';

import PageHeader from './ComponentLibrary';

describe('PageHeader', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <PageHeader siteTitle="My App">
        <nav></nav>
      </PageHeader>
    );
    expect(baseElement).toBeTruthy();
  });
});
