const ProductCardInfo = () => {
    return (
        <div className="container p-5">
            <div className="card mb-3 p-4">
                <div className="row g-4">
                    <div className="col-md-5">
                        <img src="https://pasconevolucion.com/wp-content/uploads/2021/07/Bosch-Taladros.jpg" className="img-fluid rounded-start rounded-0" alt="..." />
                    </div>
                    <div className="col-md-7 border-start">
                        <div className="card-body">
                            <h5 className="card-title">Taladro mecanico Bosch</h5>
                            <h6 className="card-subtitle mb-2 text-muted">Precio: $120,000 COP</h6>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                            <button className="btn btn-outline-success">Agregar a mi carrito</button>
                        </div>
                    </div>
                    <div className="card-footer text-muted text-center">
                        Product by Ferre Central SAS
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductCardInfo;
