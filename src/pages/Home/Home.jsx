import css from './Home.module.css';
import { GoArrowUpRight } from 'react-icons/go';
import { FaSquareCheck } from 'react-icons/fa6';
import { IconContext } from 'react-icons';
import { NavLink } from 'react-router-dom';

export const Home = () => {
  return (
    <div className={css.Container}>
      <article className={css.Left}>
        <section>
          <h1>Make Life Easier for the Family:</h1>
          <p>Find Babysitters Online for All Occasions</p>
          <NavLink to="/nannies">
            Get started
            <IconContext.Provider value={{ size: 30 }}>
              <GoArrowUpRight />
            </IconContext.Provider>
          </NavLink>
        </section>
      </article>
      <article className={css.Right}>
        <div>
          <section className={css.Nannies}>
            <aside>
              <IconContext.Provider value={{ size: 55, color: '#F03F3B' }}>
                <FaSquareCheck />
              </IconContext.Provider>
            </aside>
            <div>
              <div>
                <span>Experienced nannies</span>
                <b>15,000</b>
              </div>
            </div>
          </section>
        </div>
      </article>
    </div>
  );
};
