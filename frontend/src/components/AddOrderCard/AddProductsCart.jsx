const AddProductsCart = (props) => {
    return (
        <div className="contentCartTable p-4 m-3">
            <div className="row border-bottom">
                <div className="col-md-4">
                    <img className="img-fluid object-cover" src={props.image} alt="" />
                </div>
                <div className="col-md-7 text-start">
                    <ul className="listCartProduct">
                        <li>Nombre del producto{props.name_product}</li>
                        <li>Precio: $ {props.price}</li>
                        <li>Cantidad: {props.cantidad}</li>
                        <li>Estado del producto: {props.estado}</li>
                        <li>Descripcion: {props.description}</li>
                    </ul>
                </div>
                <div className="col-md-1">
                    <ul>
                        <li>Delete</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default AddProductsCart;