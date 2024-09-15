import { useState } from "react";
import { useContext } from "react";
import './Navbar.css';
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCartShopping, faHeadset, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { contextProvider } from '../Context/index';
import useUserStatus from "../../utils/useUserStatus";

const Navbar = () => {
    const context = useContext(contextProvider)
    const [active, setActive] = useState(false); {/*para mostrar el carrito*/ }
    const userStatus = useUserStatus();
    return (
        <header>
            <div className="container-hero">
                <div className="container hero">
                    <div className="customer-support">
                        <i className="fa-solid fa-headset">
                            <FontAwesomeIcon icon={faHeadset} className="text-white" />
                        </i>
                        <div className="content-customer-support">
                            <span className="text">Soporte al cliente</span>
                            <span className="number">123-456-7890</span>
                        </div>
                    </div>
                    <div className="container-logo">
                        <h1 className="logo">
                            <NavLink to='/' className="navbar-brand">
                                FERRECENTRAL
                            </NavLink>
                        </h1>
                    </div>
                    <div className="container-user">
                        <div className="btn-group userperson">
                            <button type="button" className="btn text-white dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                <NavLink to='/login'>
                                    <FontAwesomeIcon icon={faUser} className='text-white' />
                                </NavLink>
                            </button>
                            <ul className="dropdown-menu            ">
                                <li>
                                    <NavLink to='/login' className="dropdown-item bg-white text-dark">
                                        Iniciar sesion
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to='/registro' className="dropdown-item bg-white text-dark">
                                        Registrate
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to='/logout' className="dropdown-item bg-white text-dark">
                                        Cerrar sesion
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                        <div className="content-shopping-cart">
                            <i className="fa-solid fa-basket-shopping">
                                <NavLink to='/tucarrito'>
                                    <FontAwesomeIcon icon={faCartShopping} className='text-white' onClick={() => setActive(!active)} />
                                </NavLink>
                            </i>
                            {/*<span className="text">Carrito</span>*/}
                            <span className="number">{context.count}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-navbar">
                <nav className="container navbar">
                    <i className="fa-solid fa-bars"></i>
                    <ul className="menu">
                        <li>
                            <NavLink to='/' className="items-menu navbar-brand">
                                Inicio
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/productos' className="items-menu navbar-brand">
                                Productos
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/' className="items-menu navbar-brand">
                                Marcas
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/' className="items-menu navbar-brand">
                                Categorias
                            </NavLink>
                        </li>
                    </ul>
                    <form className="search-form">
                        <input type="search" placeholder="Buscar producto" />
                        <button className="btn-search">
                            <i className="fa-solid fa-magnifying-glass">
                                <FontAwesomeIcon icon={faMagnifyingGlass} className='text-secondary' />
                            </i>
                        </button>
                    </form>
                </nav>
            </div>
        </header>
    )
}

export default Navbar;