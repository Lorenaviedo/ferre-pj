import cimg1 from '../../assets/cimg1.jpg'
import cimg2 from '../../assets/cimg2.jpg'
import cimg3 from '../../assets/cimg3.png'

function Carousel() {
    return (
        <section className="container-fluid bg-light caruselsection px-0 pe-o ps-0">
            <div id="carouselExampleIndicators" className="carousel slide px-0 pe-o ps-0" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={cimg1} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={cimg2} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={cimg3} className="d-block w-100" alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </section>
    );
}
export default Carousel