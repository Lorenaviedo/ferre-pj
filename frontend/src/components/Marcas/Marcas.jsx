import './Marcas.css'
import Mimg2 from '../../assets/Mlogo.png'

function Marcas() {
    return (
        <section className="container top-categories-branch ">
            <h1 className="heading-branch">Encuentra tus marcas favoritas</h1>
            <div className="container-categories">
                <div className="card-category category-dewalt">
                    <p>DeWALT</p>
                    <span>Ver mas</span>
                </div>
                <div className="card-category category-urrea">
                    <p>URREA</p>
                    <span>Ver mas</span>
                </div>
                <div className="card-category category-bosch">
                    <p>BOSCH</p>
                    <span>Ver mas</span>
                </div>
            </div>
            <section className="infoimg container-fluid">
                <div className="container  imagencont1 p-0 m-0">
                    <img src={Mimg2} className="imageen img-fluid w-100" alt="" />
                </div>
            </section>
        </section>
    )
}
export default Marcas;
