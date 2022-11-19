import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { SideBar } from './components/NavBar/navBar';
import { Home } from './pages/Home/home';

const App = () => {
  return (
    <BrowserRouter>
      <SideBar>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </SideBar>
    </BrowserRouter>
  );
};

export default App;
