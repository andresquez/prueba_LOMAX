import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Formulario.module.css';

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
    onDatosSubmit(datos);
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
            maxLength={30}
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
            maxLength={30}
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
            maxLength={10}
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
            maxLength={30}
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
  onDatosSubmit: PropTypes.func.isRequired,
};

export default Formulario;
