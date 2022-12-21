import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MainGifsApp } from './Pages/MainGifsApp';

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainGifsApp />} />
        <Route path='/**' element={ <MainGifsApp />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
