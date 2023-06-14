import React, { useState } from 'react';
import PropTypes from 'prop-types'; // Importa PropTypes
import styles from './Formulario.module.css'; // Importa el archivo CSS

function Formulario({ onDatosSubmit }) {
  const [datos, setDatos] = useState({
    nombre: '',
    puesto: '',
    telefono: '',
    correo: '',
  });

  const handleInputChange = (event) => {
    setDatos({ ...datos, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onDatosSubmit(datos); // Llama a la función onDatosSubmit con los datos como argumento
  };

  return (
    <div className={styles.formularioContainer}>
      <form onSubmit={handleSubmit}>
        <div>
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label>Nombre:</label>
          <input
            type="text"
            name="nombre"
            value={datos.nombre}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label>Puesto:</label>
          <input
            type="text"
            name="puesto"
            value={datos.puesto}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label>Teléfono:</label>
          <input
            type="tel"
            name="telefono"
            value={datos.telefono}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label>Correo electrónico:</label>
          <input
            type="email"
            name="correo"
            value={datos.correo}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit" className={styles.submitButton}>
          Generar
        </button>
      </form>
    </div>
  );
}

Formulario.propTypes = {
  onDatosSubmit: PropTypes.func.isRequired, // Agrega la validación para onDatosSubmit
};

export default Formulario;
