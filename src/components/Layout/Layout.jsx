import { Suspense } from 'react';
import { Outlet } from 'react-router-dom/dist';
import { Header } from 'components/Header/Header';
import css from './Layout.module.css';

export const Layout = () => {
  return (
    <div className={css.Wrapper}>
      <header>
        <Header></Header>
      </header>
      <main>
        <Suspense>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};
