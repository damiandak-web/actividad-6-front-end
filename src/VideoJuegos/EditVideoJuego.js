import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function EditVideoJuego() {
  let navigate = useNavigate();

  const {id}=useParams();

  const [videojuego, setVideoJuego] = useState({
    fecha_de_compra: "",
    genero: "",
    nombre: "",
    plataforma: "",
    precio: "",
  });

  const { fecha_de_compra, genero, nombre, plataforma, precio } = videojuego;

  const onInputChange = (e) => {
    setVideoJuego({ ...videojuego, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadVideoJuego();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8080/api/update/${id}`, videojuego);
    navigate("/");
  };

  const loadVideoJuego = async () => {
    const result= await axios.get(`http://localhost:8080/api/ver/${id}`)
    setVideoJuego(result.data)
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Editar Video Juego</h2>

          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="fecha_de_compra" className="form-label">
                Fecha de compra:
              </label>
              <input
                type={"date"}
                className="form-control"
                placeholder="Ingrese fecha de compra"
                name="fecha_de_compra"
                value={fecha_de_compra}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="genero" className="form-label">
                Genero
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Ingrese genero del juego"
                name="genero"
                value={genero}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="nombre" className="form-label">
                Nombre del juego
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Ingrese nombre del juego"
                name="nombre"
                value={nombre}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="plataforma" className="form-label">
                Plataforma
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Ingrese plataforma del juego"
                name="plataforma"
                value={plataforma}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="precio" className="form-label">
                Precio
              </label>
              <input
                type={"number"}
                className="form-control"
                placeholder="Ingrese precio del juego"
                name="precio"
                value={precio}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <button type="submit" className="btn btn-outline-primary">
              Enviar
            </button>
            <Link className="btn btn-outline-danger mx-2" to="/">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
