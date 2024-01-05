import logo from './logo.svg';
import './App.css';
import Sign from './Signin/Sign';
import Navbar from './Navbar/Navbar';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Routes, Route, } from 'react-router-dom'; 
import Dashboard from './Dashboard/Dashboard';
import Assign from './Assign/Assign';

function App() {
  return (
    <div className="App">
     
      <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path ='/sign' element={<Sign />} />
          <Route path ='/assign' element={<Assign />} />
        </Routes>
        {/* <Navbar />
      <Sign /> */}
      </div>
     
   
  );
}

export default App;
