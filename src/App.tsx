import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import NavBar from './components/NavBar/navBar';
import Home from './pages/Home/home';
import { Login } from './pages/Login';

const App = () => {
  const logged = sessionStorage.getItem('user');

  return (
    <BrowserRouter>
      {logged ? (
        <NavBar>
          <Routes>
            <Route path="/home" element={<Home />} />
          </Routes>
        </NavBar>
      ) : (
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Navigate to="login" />} />
        </Routes>
      )}
    </BrowserRouter>
  );
};

export default App;
