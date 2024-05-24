import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const URL = 'http://localhost:5000/api/productos/';

const CompEditarProductos = () => {
    const [nombre_producto, setNomProd] = useState('');
    const [unidades, setUnidades] = useState('');
    const [precio_unitario, setPrecioUni] = useState('');
    const [precio_total, setPrecioTotal] = useState('');
    const navigate = useNavigate();
    const { id } = useParams();

    const editarProductos = async (e) => {
        e.preventDefault();
        await axios.patch(`${URL}${id}`, {
            nombre_producto: nombre_producto,
            unidades: unidades,
            precio_unitario: precio_unitario,
            precio_total: precio_total
        })
        navigate('/productos');
    }

    useEffect(() => {
        getproductosID()
    }, []);

    const getproductosID = async () => {
        const resul = await axios.get(`${URL}${id}`)
        setNomProd(resul.data.nombre_producto)
        setUnidades(resul.data.unidades)
        setPrecioUni(resul.data.precio_unitario)
        setPrecioTotal(resul.data.precio_total)
    }

    return (
        <div>
            <h3>Formulario para editar productos</h3>
            <form onSubmit={editarProductos}>
                <div className="mb-3">
                    <label className="form-label">Nombres producto</label>
                    <input value={nombre_producto} onChange={(e) => setNomProd(e.target.value)} type="text" className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Unidades</label>
                    <input value={unidades} onChange={(e) => setUnidades(e.target.value)} type="number" className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Precio unitario</label>
                    <input value={precio_unitario} onChange={(e) => setPrecioUni(e.target.value)} type="text" className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Precio total</label>
                    <input value={precio_total} onChange={(e) => setPrecioTotal(e.target.value)} type="text" className="form-control" />
                </div>
                <button type="submit" className="btn btn-success">  Actualizar <i className="fa-solid fa-floppy-disk"></i></button>
            </form>
        </div>
    )
}

export default CompEditarProductos;