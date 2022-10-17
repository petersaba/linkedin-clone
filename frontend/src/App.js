import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import LoginNav from './components/login-nav';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <LoginNav/>
        }/>
      
      </Routes> 
    </BrowserRouter>
  );
}

export default App;
