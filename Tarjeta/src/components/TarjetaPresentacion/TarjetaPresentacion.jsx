import React from 'react';
import PropTypes from 'prop-types';
import styles from './TarjetaPresentacion.module.css';

function TarjetaPresentacion({ datos }) {
  return (
    <div className={styles.tarjetaContainer}>
      <div className={styles.logoContainer}>
        <img src={datos.logo} alt="Logo" className={styles.logo} />
      </div>
      <div className={styles.datosContainer}>
        <h2 className={styles.nombre}>{datos.nombre}</h2>
        <p className={styles.cargo}>{datos.cargo}</p>
        <p className={styles.telefono}>{datos.telefono}</p>
        <p className={styles.correo}>{datos.correo}</p>
      </div>
    </div>
  );
}

TarjetaPresentacion.propTypes = {
  datos: PropTypes.shape({
    logo: PropTypes.string.isRequired,
    nombre: PropTypes.string.isRequired,
    cargo: PropTypes.string.isRequired,
    telefono: PropTypes.string.isRequired,
    correo: PropTypes.string.isRequired,
  }).isRequired,
};

export default TarjetaPresentacion;
