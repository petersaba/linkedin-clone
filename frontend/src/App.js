import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import LoginNav from './components/login-nav';
import LoginSection from './components/login-main-section';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

export const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient} >
      <ReactQueryDevtools initialIsOpen />
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
    </QueryClientProvider>
  );
}

export default App;
