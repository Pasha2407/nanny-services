import { NavLink } from 'react-router-dom';
import css from './Header.module.css';

export const Header = () => {
  return (
    <div className={css.Container}>
      <article>
        <section className={css.Logo}>
          <NavLink to="/">Nanny.Services</NavLink>
        </section>
      </article>
      <article>
        <nav className={css.Routes}>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/nannies">Nannies</NavLink>
        </nav>
        <section className={css.Auth}>
          <button className={css.Login}>Log In</button>
          <button className={css.Register}>Registration</button>
        </section>
      </article>
    </div>
  );
};
