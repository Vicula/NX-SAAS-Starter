import styles from './ComponentLibrary.module.scss';

export interface PageHeaderProps {
  siteTitle: string;
  children: React.ReactNode;
}

export function PageHeader(props: PageHeaderProps) {
  return (
    <header className={styles['container']} data-test-id="pageheader">
      <a rel="home" href="/">
        {props.siteTitle}
      </a>
      {props.children}
    </header>
  );
}

export default PageHeader;
