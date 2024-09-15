import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faCircleXmark, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import './AddProductForm.css';
import { createProduct, deleteProduct, updateProduct, getProduct, getAllCategoriesPt, getAllStatesPt, getAllBrandsPt } from '../../../api/store.api.js';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-hot-toast'


const AddProductForm = () => {

    // ADD foreingKeys Tables (categories, states, brands)
    const [categories, setCategories] = useState([]);
    const [states, setStates] = useState([]);
    const [brands, setBrands] = useState([]);

    useEffect(() => {
        async function loadCategories() {
            const res = await getAllCategoriesPt();
            setCategories(res.data);
        }
        loadCategories();
    }, []);

    useEffect(() => {
        async function loadStates() {
            const res = await getAllStatesPt();
            setStates(res.data);
        }
        loadStates();
    }, []);

    useEffect(() => {
        async function loadBrands() {
            const res = await getAllBrandsPt();
            setBrands(res.data);
        }
        loadBrands();
    }, []);

    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue
    } = useForm();
    const navigate = useNavigate();
    const params = useParams();


    const onSubmit = handleSubmit(async data => {
        if (params.id) {
            await updateProduct(params.id, data);
            toast.success('Producto actualizado', {
                position: "bottom-right",
            })
        } else {
            await createProduct(data);
            toast.success('Producto creado', {
                position: "bottom-right",
                /*style: {
                    background: "#10101"
                    color: "#fff"
                }*/
            })
        }
        navigate('/gestionar-inventario')
    });

    // PARA MOSTRAR LOS VALORES CUANDO LA DATA YA EXISTE 
    useEffect(() => {
        async function loadProduct() {
            if (params.id) {
                const { data: { nombre_producto, cantidad, descripcion, categoria, marca, estado } } = await getProduct(params.id);
                setValue('nombre_producto', nombre_producto)
                setValue('cantidad', cantidad)
                setValue('descripcion', descripcion)
                setValue('categoria', categoria)
                setValue('estado', estado)
                setValue('marca', marca)
            }
            // another way only put const {data} = await getAllProducts(params.id)
            // --> setvalue('tittle', data.tittle)
            // or const res = await getAllProducts --> setValue('tittle', res.data.tittle)
        }
        loadProduct();
    }, []);



    return (
        <>
            <div className="container-fluid contenedor-login bg-light d-flex justify-content-center align-items-center vh-100">
                <div className="bg-white p-5 rounded-3 text-secondary shadow productForm-box">
                    <p className="text-center fs-3 fw-bold">Gestión de Productos</p>
                    <div className="row d-flex">
                        <div className="col">
                            <div className="overflow-auto div-overflow">
                                <form onSubmit={onSubmit} className='productform'>
                                    <label htmlFor="nombreproducto" className="control-label">Nombre Producto</label>
                                    <input className='form-control inputs rounded-0' type="text" placeholder='Nombre del producto'
                                        //{...register("nombre_producto ", { required: true })}
                                        {...register("nombre_producto", { required: true })}
                                    />
                                    <label htmlFor="pcantidad">Cantidad</label>
                                    <input className='form-control inputs rounded-0' type="number" placeholder='Cantidad'
                                        {...register("cantidad", { required: true })}
                                    />
                                    <label htmlFor="descripcion">Descripcion del producto</label>
                                    <textarea className='form-control inputs rounded-0' rows="3" placeholder='Descripcion del producto'
                                        {...register("descripcion", { required: true })}
                                    ></textarea>
                                    <label>Categoria</label>
                                    <select className='form-control inputs rounded-0' id="categories-product"
                                        {...register("categoria", { required: true })}
                                    >
                                        <option value="">Seleccione una categoria</option>
                                        {categories.map(category => (
                                            <option key={category.id} value={category.id}>{category.nombre_categoria}</option>
                                        ))}
                                    </select>

                                    <label>Estado</label>
                                    <select className='form-control inputs rounded-0' id="states-product"
                                        {...register("estado", { required: true })}
                                    >
                                        <option value="">Seleccione un estado</option>
                                        {states.map(state => (
                                            <option key={state.id} value={state.id}>{state.nombre_estado}</option>
                                        ))}
                                    </select>

                                    <label>Marca</label>
                                    <select className='form-control inputs rounded-0' id="brands-product"
                                        {...register("marca", { required: true })}
                                    >
                                        <option value="">Seleccione una marca</option>
                                        {brands.map(brand => (
                                            <option key={brand.id} value={brand.id}>{brand.nombre_marca}</option>
                                        ))}
                                    </select>
                                    <button className="btn btn-outline-success rounded-2">
                                        <FontAwesomeIcon className="fs-5 mx-2 op-edit" icon={faCheckCircle} />
                                        Guardar</button>
                                    {
                                        params.id && (
                                            <button type="button" className="btn btn-outline-danger rounded-2 m-2" onClick={async () => {
                                                const accepted = window.confirm('Estas seguro de eliminar este producto?')
                                                if (accepted) {
                                                    await deleteProduct(params.id);
                                                    toast.success('Producto eliminado', {
                                                        position: "bottom-right",
                                                    })
                                                    navigate('/gestionar-inventario')
                                                }
                                            }}>
                                                <FontAwesomeIcon className='fs-5 mx-2 op-edit' icon={faTrashCan} />
                                                Eliminar</button>
                                        )
                                    }
                                    <NavLink to="/gestionar-inventario">
                                        <button type="button" className="mx-4 btn-cancel text-white rounded-2 btn btn-danger">
                                            <FontAwesomeIcon className="fs-5 mx-2 op-edit" icon={faCircleXmark} />
                                            Cancelar</button>
                                    </NavLink>

                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default AddProductForm;