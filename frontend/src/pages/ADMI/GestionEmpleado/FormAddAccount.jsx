import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';


const AddUserAccount = () => {

    return (
        <>
            <div className='container-fluid contenedor-registro d-flex justify-content-center align-items-center vh-100 bg-light'>
                <div className='bg-white px-5 py-3 text-secondary shadow registro-box mt-3'>
                    <p className='text-center fs-3 fw-bold'>Registrar Cuenta</p>
                    <div className='row d-flex'>
                        <div className='col'>
                            <form>
                                <label htmlFor="email">Correo Electrónico</label>
                                <input
                                    type="text"
                                    id="email"
                                    placeholder="Ingrese su correo Electronico"
                                    className='inputs'
                                />

                                <label htmlFor="password">Contraseña</label>
                                <input
                                    type="password"
                                    id="password"
                                    placeholder="Ingrese su contraseña"
                                    className='inputs'
                                />

                                <label htmlFor="username">Nombre de usuario</label>
                                <input
                                    type="text"
                                    id="username"
                                    placeholder='Ingrese su nombre de usuario'
                                    className='inputs'
                                />

                                <button
                                    type="submit"
                                    className='btn btn-warning text-white w-100 mt-4 fw-semibold shadow-sm boton'
                                >Registrar</button>
                                <hr />
                                <div className="d-flex justify-content-end">
                                    <NavLink to="/gestionar-empleado">
                                        <button type="button" className="my-1 btn-cancel text-white rounded-2 btn btn-danger">
                                            <FontAwesomeIcon className="fs-5 mx-2 op-edit" icon={faCircleXmark} />
                                            Cancelar</button>
                                    </NavLink>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddUserAccount;