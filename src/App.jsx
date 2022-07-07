import './css/App/App.css';
import MainPage from './pages/main-page/MainPage';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AdminPanel from './pages/admin-panel/AdminPanel';

function App() {
  return (
    <div className='App'>
      <BrowserRouter >
        <Routes>
          <Route path='/main' element={<MainPage />} />
          <Route path='/admin-panel' element={<AdminPanel />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
