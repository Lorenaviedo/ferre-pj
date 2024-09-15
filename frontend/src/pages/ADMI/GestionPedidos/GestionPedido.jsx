const GestionPedido = () => {
    return (
        <>
            <div className="container p-4 mt-4">
                <div className="col">
                    <div className="card p-5 rounded-3">
                        <p className="text-center fs-4 fw-bold card-title">Control de pedidos</p>
                        <div className="card-body">
                            <table className="table table-bordered table-hover">
                                <thead className="table-dark">
                                    <tr>
                                        <th scope="col">Id</th>
                                        <th scope="col">Usuario</th>
                                        <th scope="col">Fecha</th>
                                        <th scope="col">Productos</th>
                                        <th scope="col">Precio</th>
                                        <th scope="col">+ Info</th>
                                        <th scope="col">Confirmar</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">01</th>
                                        <td>Tomas</td>
                                        <td>09/09/2022</td>
                                        <td>tornillo, alicate, destornillador</td>
                                        <td>$ 50 </td>
                                        <td>Dato 6</td>
                                        <td>X</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">02</th>
                                        <td>Andres</td>
                                        <td>04/04/2023</td>
                                        <td>Alicate, tuercas</td>
                                        <td>$ 148</td>
                                        <td>Dato 6</td>
                                        <td>X</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">03</th>
                                        <td>Juan</td>
                                        <td>01/12/2023</td>
                                        <td>Taladro mecanico inalambrico</td>
                                        <td>$ 1034</td>
                                        <td>Dato 6</td>
                                        <td>X</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default GestionPedido;