import css from './Header.module.css';

export const Header = () => {
  return (
    <div className={css.Container}>
      <article>
        <section className={css.Logo}>
          <h3>Nanny.Services</h3>
        </section>
      </article>
      <article>
        <section className={css.Routes}>
          <nav>Home</nav>
          <nav>Nannies</nav>
        </section>
        <section className={css.Auth}>
          <nav>Log In</nav>
          <nav>Registration</nav>
        </section>
      </article>
    </div>
  );
};
