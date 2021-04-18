import React from 'react';
import { Formulario } from './components/Formulario';
import { Header } from './components/Header';
import { ListRecetas } from './components/ListRecetas';
import CategoriasProvider from './context/CategoriasContext';
import ModalProvider from './context/ModalContext';
import RecetasProvider from './context/RecetasContext';

  function App() {
    return (
      <CategoriasProvider>
        <RecetasProvider>
          <ModalProvider>

            <Header/>
            <div className="container mt-5">
              <div className="row">
                  <Formulario/>
              </div>
              <ListRecetas/>
            </div>

          </ModalProvider>
        </RecetasProvider>
    </CategoriasProvider>
  );
}

export default App;
