import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './Home';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route element={<Home />} path='/home' />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
