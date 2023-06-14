import React, { useState } from 'react';
import styles from './App.module.css';
import Formulario from './components/Formulario/Formulario';
import TarjetaPresentacion from './components/TarjetaPresentacion/TarjetaPresentacion';

function App() {
  const [tarjetaDatos, setTarjetaDatos] = useState(null);

  const handleDatosSubmit = (datos) => {
    setTarjetaDatos(datos);
  };

  return (
    <div className={styles.App}>
      <div className={styles.header}>
        <h1>Generador de Tarjetas</h1>
      </div>
      <Formulario onDatosSubmit={handleDatosSubmit} />
      {tarjetaDatos && <TarjetaPresentacion datos={tarjetaDatos} />}
    </div>
  );
}

export default App;
