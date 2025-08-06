import styles from "./lista.module.css";

export function Lista({ tabla, nombre }) {
  const columnas = Object.keys(tabla[0]);

  return (
    <div className={styles.lista}>
      <div className={styles.titulo}>
        <h3>{nombre}</h3>
      </div>
      <div className={styles.tabla}>
        <table>
          <thead>
            <tr>
              {columnas.map((col) => (
                <th key={col}>{col}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tabla.map((item, index) => (
              <tr key={index}>
                {columnas.map((col) => (
                  <td key={col}>{item[col]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
