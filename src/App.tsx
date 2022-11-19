import { BrowserRouter, Route, Routes } from 'react-router-dom';

import NavBar from './components/NavBar/navBar';
import Home from './pages/Home/home';

const App = () => {
  return (
    <BrowserRouter>
      <NavBar>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </NavBar>
    </BrowserRouter>
  );
};

export default App;
