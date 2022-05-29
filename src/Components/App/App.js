import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import Login from '../Login/login';
import Habitos from '../Habitos/habitos';
import Hoje from '../Habitos/hoje';
import Header from '../Habitos/Fixeds/Header';
import Footer from '../Habitos/Fixeds/Footer';
import FormProvider from '../../Context/FormContext';
import './index.css';

function App() {
  return (

    <FormProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/habitos" element={<React.Fragment> <Header/><Habitos/><Footer /></React.Fragment>} />
          <Route path="/hoje" element={<React.Fragment> <Header/><Hoje/><Footer /></React.Fragment>} />
          <Route path="/historico" element={<React.Fragment> <Header/><Footer /></React.Fragment>} />
        </Routes>
      </BrowserRouter>
    </FormProvider>

  );
}

export default App;

