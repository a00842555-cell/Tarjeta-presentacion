import { useState } from "react";
import "./App.css";
function App() {
  const [nombre, setNombre] = useState("");
  const [lenguaje, setLenguaje] = useState("");
  const [tarjeta, setTarjeta] = useState(null);

  const manejarSubmit = (e) => {
  e.preventDefault();

  setTarjeta({
    nombre: nombre,
    lenguaje: lenguaje,
  });


  
  // limpiar inputs
  setNombre("");
  setLenguaje("");
};
return (
  <div className="container">
    <div className="header">Generador de Tarjeta</div>

    <form className="form" onSubmit={manejarSubmit}>
      <input
        type="text"
        placeholder="Tu nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />

      <input
        type="text"
        placeholder="Tu lenguaje favorito"
        value={lenguaje}
        onChange={(e) => setLenguaje(e.target.value)}
      />

      <button className="btn-primary" type="submit">
        Generar tarjeta
      </button>
    </form>

    {tarjeta && (
      <div className="card">
        <div className="avatar">
          {tarjeta.nombre.charAt(0).toUpperCase()}
        </div>

        <h3>{tarjeta.nombre}</h3>

        <p>
          Lenguaje favorito: <b>{tarjeta.lenguaje}</b>
        </p>

        <div className="divider"></div>

        <span className="badge">Frontend Developer</span>
      </div>
    )}

    <button className="btn-reset" onClick={() => setTarjeta(null)}>
      Limpiar
    </button>
  </div>
);
}

export default App;