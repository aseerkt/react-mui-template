import { Route, BrowserRouter, Routes } from 'react-router-dom';
import routerConfig from './utils/routerConfig';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {routerConfig.map(({ path, component: Component }) => (
            <Route key={path} path={path} element={<Component />} />
          ))}
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
