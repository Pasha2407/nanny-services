import { Suspense } from 'react';
import { Outlet, useLocation } from 'react-router-dom/dist';
import { Header } from 'components/Header/Header';
import css from './Layout.module.css';

export const Layout = () => {
  const location = useLocation();
  return (
    <div className={css.Wrapper}>
      <header
        className={`${
          location.pathname === '/' ? css.HeaderHome : css.HeaderNannies
        }`}
      >
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
