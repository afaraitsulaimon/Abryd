import HomePage from './pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<HomePage />} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
