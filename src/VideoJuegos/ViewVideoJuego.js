import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function ViewVideoJuego() {

    const [videojuego, setVideoJuego] = useState({
        fecha_de_compra: "",
        genero: "",
        nombre: "",
        plataforma: "",
        precio: "",
    });

    const { id } = useParams();

    useEffect(() => {
        loadVideoJuego();
    }, []);

    const loadVideoJuego = async () => {
        const result = await axios.get(`http://localhost:8080/api/ver/${id}`);
        setVideoJuego(result.data);
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                    <h2 className="text-center m-4">Detalles videoJuego</h2>

                    <div className="card">
                        <div className="card-header">
                            Detalles del videjuego id : {videojuego.id}
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">
                                    <b>Fecha de compra:</b>
                                    {videojuego.fecha_de_compra}
                                </li>
                                <li className="list-group-item">
                                    <b>Genero:</b>
                                    {videojuego.genero}
                                </li>
                                <li className="list-group-item">
                                    <b>Nombre:</b>
                                    {videojuego.nombre}
                                </li>
                                <li className="list-group-item">
                                    <b>Plataforma:</b>
                                    {videojuego.plataforma}
                                </li>
                                <li className="list-group-item">
                                    <b>Precio:</b>
                                    {videojuego.precio}
                                </li>
                            </ul>
                        </div>
                    </div>
                    <Link className="btn btn-primary my-2" to={"/"}>
                        Back to Home
                    </Link>
                </div>
            </div>
        </div>
    );
}
