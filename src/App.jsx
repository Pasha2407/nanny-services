import { Route, Routes } from 'react-router-dom/dist';

import { Layout } from 'components/Layout/Layout';
import { Home } from 'pages/Home/Home';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
};
