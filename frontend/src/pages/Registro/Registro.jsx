import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-hot-toast'
import axios from 'axios';
import './Registro.css'


const Registro = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();

    const onSubmit = async (data) => {
        try {
            // Enviar los datos al servidor en el formato requerido
            const response = await axios.post('http://127.0.0.1:8000/users/register/', data);
            console.log(response.data);
            toast.success('Registro exitoso', {
                position: "bottom-right", 
            });
            navigate('/login')
        } catch (error) {
            // Manejar errores
            console.error(error);
            toast.error("Error al registrar, Verifique los campos", {
                position: 'bottom-right',
            });
        }
    };

    return (
        <>
            <div className='container-fluid contenedor-registro d-flex justify-content-center align-items-center vh-100 bg-light'>
                <div className='bg-white px-5 py-3 text-secondary shadow registro-box mt-3'>
                    <p className='text-center fs-3 fw-bold'>Registrate</p>
                    <div className='row d-flex'>
                        <div className='col'>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <label htmlFor="email">Correo Electrónico</label>
                                <input
                                    type="text"
                                    id="email"
                                    placeholder="Ingrese su correo Electronico" 
                                    className='inputs'
                                    {...register("email", { required: true })} // Registrar el campo "email"
                                />

                                <label htmlFor="password">Contraseña</label>
                                <input
                                    type="password"
                                    id="password"
                                    placeholder="Ingrese su contraseña" 
                                    className='inputs'
                                    {...register("password", { required: true })} // Registrar el campo "password"
                                />

                                <label htmlFor="username">Nombre de usuario</label>
                                <input
                                    type="text"
                                    id="username"
                                    placeholder='Ingrese su nombre de usuario'
                                    className='inputs'
                                    {...register("username", { required: true })} // Registrar el campo "username"
                                />

                                <button 
                                    type="submit"
                                    className='btn btn-warning text-white w-100 mt-4 fw-semibold shadow-sm boton'
                                    >Registrar</button>
                                
                                <div className='d-flex gap-1 justify-content-center mt-1'>
                                    <p>Ya tienes una cuenta?</p>
                                    <NavLink to='/login' className='text-decoration-none text-info fw-semibold'>
                                        Iniciar Sesion
                                    </NavLink>
                                </div>
                                <hr />
                                <input type="checkbox" id="checkbox2" value="Basket" /> Enviar notificaciones al correo o por SMS <br />
                                <input type="checkbox" id="checkbox1" value="Futbol" /> He leido y acepto los <a href="#">terminos y
                                    condiciones</a> y autorizo la <a>proteccion de datos</a> <br />
                                <hr />
                                <p className='text-center'>Volver  a la 
                                    <NavLink to='/'> Pagina Principal</NavLink></p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Registro;