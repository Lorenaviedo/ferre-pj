import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';

const LocationInfo = () => {
    return (
        <div className="card p-4 me-5 rounded-3">
            <div className="card-body">
                <p className="text-start fs-5 fw-bold card-title">Direcciones</p>
                <hr />
                <p>Direccion 1.</p>
                <div className="input-group input-group-sm mb-3">
                    <span className="input-group-text w-25" id="inputGroup-sizing-sm">Departamento</span>
                    <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" placeholder="Cundinamarca, Tolima, Meta, etc"/>
                </div>
                <div className="input-group input-group-sm mb-3">
                    <span className="input-group-text w-25" id="inputGroup-sizing-sm">Municipio</span>
                    <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" placeholder="Bogota DC, espinal, Ibague, Fusa, etc"/>
                </div>
                <div className="input-group input-group-sm mb-3">
                    <span className="input-group-text w-25" id="inputGroup-sizing-sm">Barrio</span>
                    <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" placeholder="Villa Gladys, Patio Bonito, Quintanars, Ciudad verde, etc"/>
                </div>
                <div className="input-group input-group-sm mb-3">
                    <span className="input-group-text w-25" id="inputGroup-sizing-sm">Direccion Completa</span>
                    <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" placeholder="Cll 76C # 45A - 56 Engativa"/>
                </div>
                <div className="input-group input-group-sm mb-3">
                    <span className="input-group-text w-25" id="inputGroup-sizing-sm">Observaciones</span>
                    <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" placeholder="Apto 403 Torre 09" />
                </div>
                <hr />
                <div className="d-flex justify-content-end">
                    <button className="btn btn-outline-success text-center">
                        <FontAwesomeIcon className="me-2" icon={faCirclePlus} />
                        Agregar una Direccion
                    </button>
                </div>
            </div>
        </div>
    )
}

export default LocationInfo;
