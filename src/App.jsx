import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './css/App/App.css';


// Routes
import MainPage from './pages/main-page/MainPage';
import AdminPanel from './pages/admin-panel/AdminPanel';

function App() {
  return (
    <div className='App'>
      <BrowserRouter >
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/admin-panel/dashboard' element={<AdminPanel />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
