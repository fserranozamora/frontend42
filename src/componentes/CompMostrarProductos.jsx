import axios from 'axios';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

//const URL = 'http://localhost:5000/api/productos/';
const URL = 'https://backend42-28ph.onrender.com/api/productos/';

const CompMostrarProductos = () => {

    const [productos, setProductos] = useState([])

    useEffect(() => {
        getproductos()
    }, []);

    const getproductos = async () => {
        const resul = await axios.get(URL)
        setProductos(resul.data);
    }

    const eliminarProductos = async (id) => {
        await axios.delete(`${URL}${id}`)
        getproductos();
    }

    return (
        <div className='container'>
            <h3>Lista de productos</h3>
            <div className='row'>
                <div className='col'>
                    <Link to='/productos/agregar' className='btn btn-success mt-2 mb-2' >  Agregar  <i className="fa-solid fa-user-plus"></i></Link>
                    <table className='table'>
                        <thead className="table-success">
                            <tr>
                                <th>Nombre del producto</th>
                                <th>Unidades</th>
                                <th>Precio unitario</th>
                                <th>Precio total</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {productos.map((Producto, index) => (
                                <tr key={index}>
                                    <td>{Producto.nombre_producto}</td>
                                    <td>{Producto.unidades}</td>
                                    <td>{Producto.precio_unitario}</td>
                                    <td>{Producto.precio_total}</td>
                                    <td>
                                        <Link to={`/productos/editar/${Producto._id}`} className='btn btn-primary mt-2 mb-2'>  Editar  <i className="fa-solid fa-pen-to-square"></i></Link>
                                        <b>&nbsp;</b>&nbsp;
                                        <button onClick={() => eliminarProductos(Producto._id)} className='btn btn-danger mt-2 mb-2'>  Eliminar  <i className="fa-solid fa-trash"></i></button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                </div>
            </div>
        </div>
    )
}

export default CompMostrarProductos;
