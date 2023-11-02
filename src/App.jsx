import './App.css';
import Navbar from './components/Navbar';
import { Outlet, Route, Routes } from 'react-router-dom';
import SelectBoard from './pages/SelectBoard';
import DetailPage from './pages/DetailPage';
import ReviewBoard from './pages/ReviewBoard';
import PagingBoard from './pages/PagingBoard';
import KakaoTalkPage from './pages/KakaoTalkPage';
import CalculatorPage from './pages/CalculatorPage';

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/selectgrid' element={<SelectBoard />} />
          <Route path='/paging' element={<PagingBoard />} />
          <Route path='/detail' element={<DetailPage />} />
          <Route path='/review' element={<ReviewBoard />} />
          <Route path='/kakaoTalk' element={<KakaoTalkPage />} />
          <Route path='/calculator' element={<CalculatorPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
