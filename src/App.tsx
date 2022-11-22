import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import { PrivateRoute } from './components/PrivateRoute';
import { Caixa } from './pages/Caixa';
import { Clientes } from './pages/Clientes';
import { Fornecedores } from './pages/Fornecedores';
import { Home } from './pages/Home/home';
import { Login } from './pages/Login';
import { Produtos } from './pages/Produtos';
import { Vendas } from './pages/Vendas';

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
        <Route
          path="/vendas"
          element={
            <PrivateRoute>
              <Vendas />
            </PrivateRoute>
          }
        />
        <Route
          path="/clientes"
          element={
            <PrivateRoute>
              <Clientes />
            </PrivateRoute>
          }
        />
        <Route
          path="/fornecedores"
          element={
            <PrivateRoute>
              <Fornecedores />
            </PrivateRoute>
          }
        />
        <Route
          path="/caixa"
          element={
            <PrivateRoute>
              <Caixa />
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
