import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import { PrivateRoute } from './components/PrivateRoute';
import { Home } from './pages/Home/home';
import { Login } from './pages/Login';
import { Produtos } from './pages/Produtos';

const App = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/home"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
        <Route
          path="/produtos"
          element={
            <PrivateRoute>
              <Produtos />
            </PrivateRoute>
          }
        />

        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Navigate to="login" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
