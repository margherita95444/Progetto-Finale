import './App.css';
import { Routes, Route, Outlet } from 'react-router-dom';
import Navbar from './componens/navbar/Navbar';
import Footer from './componens/footer/Footer';
import NotFound from './componens/not-found/NotFound'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Outlet />}>
  
        </Route>

        <Route path="*" element={<NotFound />} /> 
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
