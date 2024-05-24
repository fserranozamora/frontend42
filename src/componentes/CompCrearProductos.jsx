import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

//const URL = 'http://localhost:5000/api/productos/';
const URL = 'https://backend42-28ph.onrender.com/api/clientes/';

const CompCrearProductos = () => {
    const [nombre_producto, setNomProd]= useState('');
    const [unidades, setUnidades]= useState('');
    const [precio_unitario, setPrecioUni]= useState('');
    const [precio_total, setPrecioTotal]= useState('');
    const navigate = useNavigate ();

    const guardarProductos = async (e) => {
        await axios.post(URL, {
            nombre_producto:nombre_producto, 
            unidades:unidades,
            precio_unitario:precio_unitario,
            precio_total:precio_total

        })
        navigate('/productos')
    }

    return(
        <div>
            <h3>Formulario para guardar productos</h3>
            <form onSubmit={guardarProductos}>
                <div className="mb-3">
                <label className="form-label">Nombres Productos</label>
                <input value={nombre_producto} onChange={(e) => setNomProd(e.target.value)} type="text" className="form-control"/>
                </div>
                <div className="mb-3">
                <label className="form-label">Unidades</label>
                <input value={unidades} onChange={(e) => setUnidades(e.target.value)} type="number" className="form-control"/>
                </div>
                <div className="mb-3">
                <label className="form-label">Precio unitario</label>
                <input value={precio_unitario} onChange={(e) => setPrecioUni(e.target.value)} type="text" className="form-control"/>
                </div>
                <div className="mb-3">
                <label className="form-label">Precio total</label>
                <input value={precio_total} onChange={(e) => setPrecioTotal(e.target.value)} type="text" className="form-control"/>
                </div>
                <button type="submit" className="btn btn-success">  Guardar  <i className="fa-solid fa-floppy-disk"></i></button>
            </form>
        </div>

        
    )
}

export default CompCrearProductos;
