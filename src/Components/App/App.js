import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import Login from '../Login/login';
import Cadastrar from '../Login/cadastra';
import Habitos from '../Habitos/screenHabito/habitos';
import Hoje from '../Habitos/screenHoje/hoje';
import Historico from '../Habitos/screenHistorico/historico';
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
          <Route path="/cadastro" element={<Cadastrar />} />
          <Route path="/habitos" element={<React.Fragment> <Header/><Habitos/><Footer /></React.Fragment>} />
          <Route path="/hoje" element={<React.Fragment> <Header/><Hoje/><Footer /></React.Fragment>} />
          <Route path="/historico" element={<React.Fragment><Historico/><Header/><Footer /></React.Fragment>} />
        </Routes>
      </BrowserRouter>
    </FormProvider>

  );
}

export default App;

