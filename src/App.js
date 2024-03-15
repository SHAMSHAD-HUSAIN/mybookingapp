import logo from './logo.svg';
import './App.css';
import Form from './form';
import "bootstrap/dist/css/bootstrap.min.css" ;
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Booking from './booking';

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Form />} />
    <Route path="/book" element={<Booking />} />

    </Routes>
    </BrowserRouter>
  );
}

export default App;
