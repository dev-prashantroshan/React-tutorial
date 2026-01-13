import './App.css';
import User from './components/pages/Shop';
import Navbar from './components/utility/Navbar';
import Homepage from './components/pages/Homepage';
import { Route, Routes } from 'react-router';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Homepage />}></Route>
        <Route path="/shop" element={<User data={{ name: 'Prashant', age: '27' }} />}></Route>
      </Routes>
    </>
  );
}

export default App;
