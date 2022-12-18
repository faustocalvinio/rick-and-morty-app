
import './mainStyles.css'
import { Homepage } from './Pages/Homepage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MainGifsApp } from './Pages/MainGifsApp';

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path='/all-gifs' element={ <MainGifsApp /> } />
      </Routes>
    </BrowserRouter>
  )
}

export default App
