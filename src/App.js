import React from 'react';
import './App.css';
import { BrowserRouter as Routes, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import DataSiswa from './components/pages/DataSiswa';
import DataSpp from './components/pages/DataSpp';
import DataAdmin from './components/pages/DataAdmin';
import DataKelas from './components/pages/DataKelas';

function App() {
  return (
    <>
      <Routes>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/data_siswa' exact component = {DataSiswa}/>
          <Route path='/data_spp' exact component={DataSpp}/>
          <Route path='/data_admin' exact component={DataAdmin}/>
          <Route path='/data_kelas' exact component = {DataKelas}/>
        </Switch>
      </Routes>
    </>
    
  );
}

export default App;
