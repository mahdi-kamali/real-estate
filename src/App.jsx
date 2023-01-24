import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './css/App/App.css';


// Routes
import MainPage from './pages/main-page/MainPage';
import AdminPanel from './pages/admin-panel/AdminPanel';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { login } from './features/user/user';
import Loading from './pages/loadings/Loading';

function App() {

  const dispatcher = useDispatch()

  useEffect(() => {
      const user = JSON.parse(localStorage.getItem("data"))
      if (user) {
          console.log(user);
          dispatcher(login(user))
      }
  }, [])

  return (
    <div className='App'>
      <Loading/>
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
