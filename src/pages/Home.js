import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

export default function Home() {
  const [videojuegos, setVideoJuego] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    loadVideoJuego();
  }, []);

  const loadVideoJuego = async () => {
    const result = await axios.get("http://localhost:8080/api/VideoJuegos");
    setVideoJuego(result.data);
  };

  const deleteVideoJuego = async (id) => {
    await axios.delete(`http://localhost:8080/api/delete/${id}`);
    loadVideoJuego();
  };

  return (
    <div className="container">
      <div className="py-4">
        <table className="table border shadow">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Fecha de compra</th>
              <th scope="col">Genero</th>
              <th scope="col">Nombre</th>
              <th scope="col">Plataforma</th>
              <th scope="col">Precio</th>
              <th scope="col">Botones</th>
            </tr>
          </thead>
          <tbody>
            {videojuegos.map((videojuego, index) => (
              <tr>
                <th scope="row" key={index}>
                  {index + 1}
                </th>
                <td>{videojuego.fecha_de_compra}</td>
                <td>{videojuego.genero}</td>
                <td>{videojuego.nombre}</td>
                <td>{videojuego.plataforma}</td>
                <td>{videojuego.precio}</td>
                <td>
                  <Link
                    className="btn btn-primary mx-2"
                    to={`/viewvideojuego/${videojuego.id}`}
                  >
                    View
                  </Link>
                  <Link
                    className="btn btn-outline-primary mx-2"
                    to={`/editvideojuego/${videojuego.id}`}
                  >
                    Edit
                  </Link>
                  <button
                    className="btn btn-danger mx-2"
                    onClick={() => deleteVideoJuego(videojuego.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}