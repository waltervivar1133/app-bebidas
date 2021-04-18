import React from 'react';
import { Formulario } from './components/Formulario';
import { Header } from './components/Header';
import { ListRecetas } from './components/ListRecetas';
import CategoriasProvider from './context/CategoriasContext';
import RecetasProvider from './context/RecetasContext';

  function App() {
    return (
      <CategoriasProvider>
        <RecetasProvider>
          <Header/>
          <div className="container mt-5">
            <div className="row">
                <Formulario/>
            </div>
            <ListRecetas/>
          </div>
        </RecetasProvider>
    </CategoriasProvider>
  );
}

export default App;
