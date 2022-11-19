import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import { SideBar } from './components/NavBar/navBar';
import { Home } from './pages/Home/home';
import { Login } from './pages/Login';

const App = () => {
  const logged = sessionStorage.getItem('user');

  return (
    <BrowserRouter>
      {logged ? (
        <SideBar>
          <Routes>
            <Route path="/home" element={<Home />} />
          </Routes>
        </SideBar>
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
