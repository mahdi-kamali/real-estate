import { BrowserRouter, Route, Routes } from 'react-router-dom';

// All Css
import './css/App/App.css';
import './css/alerts/Alerts.css'
import './css/Loading/Loading.css'
import './css/AdminPanel/AdminPanel.css'
import './css/PopUps/PopUps.css'
import './css/Selectors/Selectors.css'
import './css/main-page/main-page.css'

// Routes
import MainPage from './pages/main-page/MainPage';
import AdminPanel from './pages/admin-panel/AdminPanel';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { login } from './features/user/user';
import Loading from './pages/loadings/Loading';



// Image Picker
import 'react-image-picker-editor/dist/index.css'
import PostDetailPage from './pages/post-detail/PostDetailPage';


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
      <Loading />
      <BrowserRouter >
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/post/:id' element={<PostDetailPage />} />
          <Route path='/admin-panel/dashboard' element={<AdminPanel />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
