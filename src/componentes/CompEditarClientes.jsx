import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const URL = 'http://localhost:5000/api/clientes/';

const CompEditarClientes = () => {
    const [nombres, setNombres] = useState('');
    const [apellidos, setApellidos] = useState('');
    const [cedula, setCedula] = useState('');
    const [correo, setCorreo] = useState('');
    const [telefono, setTelefono] = useState('');
    const [direccion, setDireccion] = useState('');
    const navigate = useNavigate();
    const { id } = useParams();

    const editarClientes = async (e) => {
        e.preventDefault();
        await axios.patch(`${URL}${id}`, {
            nombres: nombres,
            apellidos: apellidos,
            cedula: cedula,
            correo: correo,
            telefono: telefono,
            direccion: direccion
        })
        navigate('/clientes');
    }

    useEffect(() => {
        getclientesID()
    }, []);

    const getclientesID = async () => {
        const resul = await axios.get(`${URL}${id}`)
        setNombres(resul.data.nombres)
        setApellidos(resul.data.apellidos)
        setCedula(resul.data.cedula)
        setCorreo(resul.data.correo)
        setTelefono(resul.data.telefono)
        setDireccion(resul.data.direccion)
    }

    return (
        <div>
            <h3>Formulario para editar clientes</h3>
            <form onSubmit={editarClientes}>
                <div className="mb-3">
                    <label className="form-label">Nombres cliente</label>
                    <input value={nombres} onChange={(e) => setNombres(e.target.value)} type="text" className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Apellidos cliente</label>
                    <input value={apellidos} onChange={(e) => setApellidos(e.target.value)} type="text" className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Cédula</label>
                    <input value={cedula} onChange={(e) => setCedula(e.target.value)} type="number" className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Correo</label>
                    <input value={correo} onChange={(e) => setCorreo(e.target.value)} type="text" className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Teléfono</label>
                    <input value={telefono} onChange={(e) => setTelefono(e.target.value)} type="number" className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Direccíon</label>
                    <input value={direccion} onChange={(e) => setDireccion(e.target.value)} type="text" className="form-control" />
                </div>
                <button type="submit" className="btn btn-success">  Actualizar <i className="fa-solid fa-floppy-disk"></i></button>
            </form>
        </div>
    )
}

export default CompEditarClientes;