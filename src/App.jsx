import { Route, Routes } from 'react-router-dom/dist';

import { Layout } from 'components/Layout/Layout';
import { Home } from 'pages/Home/Home';
import { Nannies } from 'pages/Nannies/Nannies';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/nannies" element={<Nannies />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
};
