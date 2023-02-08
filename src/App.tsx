import './App.css';
import Board from './components/Board/Board';
import Layout from './components/Layout/Layout';
import { Route, Routes } from 'react-router-dom';
import About from './components/About/About';
import Help from './components/Help/Help';
import Home from './components/Home/Home';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />}></Route>
        <Route path="/play" element={<Board />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/help" element={<Help />}></Route>
      </Route>

    </Routes>
  );
}

export default App;
