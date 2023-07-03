import './App.css';
import AddVideoJuego from './VideoJuegos/AddVideoJuego';
import EditVideoJuego from './VideoJuegos/EditVideoJuego';
import ViewVideoJuego from './VideoJuegos/ViewVideoJuego';
import Navbar from './layout/Navbar';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className='App'>
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/addvideojuego" element={<AddVideoJuego />} />
        <Route exact path="/editvideojuego/:id" element={<EditVideoJuego />} />
        <Route exact path="/viewvideojuego/:id" element={<ViewVideoJuego />} />
      </Routes>
    </Router>
    </div >
  );
}

export default App;
