import css from './Home.module.css';
export const Home = () => {
  return (
    <div className={css.Container}>
      <article className={css.Left}>
        <section>
          <h1>Make Life Easier for the Family:</h1>
        </section>
      </article>
      <article className={css.Right}>
        <div></div>
      </article>
    </div>
  );
};
