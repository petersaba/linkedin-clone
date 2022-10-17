import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import LoginNav from './components/login-nav';
import LoginSection from './components/login-main-section';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <>
            <LoginNav/>
            <LoginSection/>
          </>
        }/>
      
      </Routes> 
    </BrowserRouter>
  );
}

export default App;
