import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Festa2014Page from './pages/festa2014/Festa2014';
import Festa2015Page from './pages/festa2015/Festa2015';
import Festa2016Page from './pages/festa2016/Festa2016';
import Festa2017Page from './pages/festa2017/Festa2017';
import Festa2018Page from './pages/festa2018/Festa2018';
import Festa2019Page from './pages/festa2019/Festa2019';
import Festa2020Page from './pages/festa2020/Festa2020';
import Festa2021Page from './pages/festa2021/Festa2021';
import Festa2022Page from './pages/festa2022/Festa2022';
import Festa2023Page from './pages/festa2023/Festa2023';
import Festa2024Page from './pages/festa2024/Festa2024';
import Festa2025Page from './pages/festa2025/Festa2025';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Festa2025" element={<Festa2025Page/>} /> 
        <Route path="/festa/2013" element={<Festa2014Page />} />
        <Route path="/festa/2014" element={<Festa2015Page />} />
        <Route path="/festa/2015" element={<Festa2016Page />} />
        <Route path="/festa/2016" element={<Festa2017Page />} />
        <Route path="/festa/2017" element={<Festa2018Page />} />
        <Route path="/festa/2018" element={<Festa2019Page />} />
        <Route path="/festa/2019" element={<Festa2020Page />} />
        <Route path="/festa/2020" element={<Festa2021Page />} />
        <Route path="/festa/2021" element={<Festa2022Page />} />
        <Route path="/festa/2022" element={<Festa2023Page />} />
        <Route path="/festa/2023" element={<Festa2024Page />} />
      </Routes>
    </Router>
  );
}

export default App;
