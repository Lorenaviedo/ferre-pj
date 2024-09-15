import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrashCan, faCirclePlus, faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import './GestionInventario.css';
import { NavLink } from 'react-router-dom';
import { useEffect, useState } from "react";
import { deleteProduct, getAllProducts } from '../../../api/store.api'
import { useNavigate } from 'react-router-dom'
import toast from "react-hot-toast";


const GestionInventario = () => {

    const [products, setProducts] = useState([]);
    // const params = useParams();

    useEffect(() => {
        async function loadProducts() {
            const res = await getAllProducts();
            setProducts(res.data);
        }
        loadProducts();
    }, []);

    const navigate = useNavigate();


    return (
        <>
            <div className="container p-4 mt-4 content-products">
                <div className="col">
                    <div className="card p-5 rounded-3">
                        <div className="d-flex justify-content-start">
                            <NavLink to="/admi-account" className="text-dark">
                                <FontAwesomeIcon className="back fs-5 mx-2 op-delete" icon={faArrowLeft} />
                            </NavLink>
                        </div>
                        <p className="text-center fs-4 fw-bold card-title">Gestion de Productos</p>
                        <div className="card-body">
                            <table id="example" className="table table-striped table-hover border">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Nombre</th>
                                        <th>Cantidad</th>
                                        <th>Precio Unidad</th>
                                        <th>categoria</th>
                                        <th>Estado</th>
                                        <th>Marca</th>
                                        <th>Opciones</th>
                                    </tr>
                                </thead>
                                <tbody id="table_products">
                                    {products.map(product => (
                                        <tr key={product.id}>
                                            <td>{product.id}</td>
                                            <td>{product.nombre_producto}</td>
                                            <td>{product.cantidad}</td>
                                            <td>{product.descripcion}</td>
                                            <td>{product.categoria}</td>
                                            <td>{product.estado}</td>
                                            <td>{product.marca}</td>
                                            <td>
                                                <FontAwesomeIcon className="text-success fs-5 mx-2 op-edit" icon={faPenToSquare}
                                                    onClick={() => {
                                                        navigate(`/producto/${product.id}`)
                                                    }}
                                                />
                                                <FontAwesomeIcon className="text-danger fs-5 mx-2 op-delete" icon={faTrashCan} onClick={async () => {
                                                    const accepted = window.confirm('Estas seguro de eliminar este producto?')
                                                    if (accepted) {
                                                        await deleteProduct(`${product.id}`);
                                                        toast.success('Producto eliminado')
                                                        window.location.reload(); // Recarga la página actual
                                                    }
                                                }} />
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                                <tfoot>
                                    <tr>
                                        <th>#</th>
                                        <th>Nombre</th>
                                        <th>Cantidad</th>
                                        <th>Precio Unidad</th>
                                        <th>categoria</th>
                                        <th>Estado</th>
                                        <th>Marca</th>
                                        <th>Opciones</th>
                                    </tr>
                                </tfoot>
                            </table>
                            <hr className="mt-5" />
                            <div className="d-flex justify-content-end">
                                <NavLink to="/registrar-producto" className="mt-4 shadow-sm">
                                    <button className="btn-add text-center text-white rounded-3">
                                        <FontAwesomeIcon className="me-2" icon={faCirclePlus} />
                                        Agregar nuevo producto</button>
                                </NavLink>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default GestionInventario;