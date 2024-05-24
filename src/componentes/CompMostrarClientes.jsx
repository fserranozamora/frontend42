import axios from 'axios';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

//const URL = 'http://localhost:5000/api/clientes/';
const URL = 'https://backend42-28ph.onrender.com/api/clientes/';

const CompMostrarClientes = () => {

    const[clientes, setClientes] = useState([])

    useEffect(() => {
        getclientes()
    }, []);

    const getclientes = async () => {
        const resul = await axios.get(URL)
        setClientes(resul.data);
    }

    const eliminarClientes = async (id) => {
        await axios.delete(`${URL}${id}`)
        getclientes();
    }
    
    return (
        <div className='container'>
            <h3>Lista de clientes</h3>
            <div className='row'>
                <div className='col'>
                    <Link to= '/clientes/agregar' className='btn btn-success mt-2 mb-2' >  Agregar  <i className="fa-solid fa-user-plus"></i></Link>
                    <table className='table'>
                        <thead className="table-success">
                            <tr>
                            <th>Nombres cliente</th>
                            <th>Apellidos cliente</th>
                            <th>Cédula</th>
                            <th>Correo</th>
                            <th>Teléfono</th>
                            <th>Dirección</th>
                            <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {clientes.map((Cliente, index) => (
                                <tr key = {index}>
                                    <td>{Cliente.nombres}</td>
                                    <td>{Cliente.apellidos}</td>
                                    <td>{Cliente.cedula}</td>
                                    <td>{Cliente.correo}</td>
                                    <td>{Cliente.telefono}</td>
                                    <td>{Cliente.direccion}</td>
                                    <td>
                                        <Link to={`/clientes/editar/${Cliente._id}`} className='btn btn-primary mt-2 mb-2'>  Editar  <i className="fa-solid fa-pen-to-square"></i></Link>
                                        <button onClick={ () => eliminarClientes(Cliente._id)} className='btn btn-danger mt-2 mb-2'>  Eliminar  <i className="fa-solid fa-trash"></i></button>
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

export default CompMostrarClientes;
