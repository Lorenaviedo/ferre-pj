import './product1.css'

const Product1 = () =>{
    return(
        <div className="container container-products">
                    <div className="card-product">
                        <div className="container-img">
                            <img src="https://github.com/roberto-aq/Website-Cafeteria-HTML-y-CSS/blob/main/img/cafe-irish.jpg?raw=true" alt="Cafe Irish" />
                            <span className="categoryProduct">Herramienta</span>
                            <div className="button-group">
                                <span>
                                    <i className="fa-regular fa-eye"></i>
                                </span>
                                <span>
                                    <i className="fa-regular fa-heart"></i>
                                </span>
                                <span>
                                    <i className="fa-solid fa-code-compare"></i>
                                </span>
                            </div>
                        </div>
                        <div className="content-card-product">
                            <h3>Cafe Irish</h3>
                            <div className="stars">
                                <p>Herramienta flexible con el uso </p>
                            </div>
                            <span className="add-cart">
                                <i className="fa-solid fa-cart-shopping"></i>
                            </span>
                            <p className="price">$4.60 <span>$5.30</span></p>
                        </div>
                    </div>
                    <div className="card-product">
                        <div className="container-img">
                            <img src="https://github.com/roberto-aq/Website-Cafeteria-HTML-y-CSS/blob/main/img/cafe-ingles.jpg?raw=true" alt="Cafe Irish" />
                            <span className="categoryProduct">Accesorio</span>
                            <div className="button-group">
                                <span>
                                    <i className="fa-regular fa-eye"></i>
                                </span>
                                <span>
                                    <i className="fa-regular fa-heart"></i>
                                </span>
                            </div>
                        </div>
                        <div className="content-card-product">
                            <h3>Cafe Ingles</h3>
                            <div className="stars">
                                <p>Herramienta flexible con el uso </p>
                            </div>
                            <span className="add-cart">
                                <i className="fa-solid fa-cart-shopping"></i>
                            </span>
                            <p className="price">$5.70 <span>$7.30</span></p>
                        </div>
                    </div>
                    <div className="card-product">
                        <div className="container-img">
                            <img src="https://github.com/roberto-aq/Website-Cafeteria-HTML-y-CSS/blob/main/img/cafe-australiano.jpg?raw=true" alt="Cafe Irish" />
                            <span className="categoryProduct">Producto</span>
                            <div className="button-group">
                                <span>
                                    <i className="fa-regular fa-eye"></i>
                                </span>
                                <span>
                                    <i className="fa-regular fa-heart"></i>
                                </span>
                            </div>
                        </div>
                        <div className="content-card-product">
                            <h3>Cafe Australiano</h3>
                            <div className="stars">
                                <p>Herramienta flexible con el uso </p>
                            </div>
                            <span className="add-cart">
                                <i className="fa-solid fa-cart-shopping"></i>
                            </span>
                            <p className="price">$3.20</p>
                        </div>
                    </div>
                    <div className="card-product">
                        <div className="container-img">
                            <img src="https://github.com/roberto-aq/Website-Cafeteria-HTML-y-CSS/blob/main/img/cafe-helado.jpg?raw=true" alt="Cafe Irish" />
                            <span className="categoryProduct">Accesorio</span>
                            <div className="button-group">
                                <span>
                                    <i className="fa-regular fa-eye"></i>
                                </span>
                                <span>
                                    <i className="fa-regular fa-heart"></i>
                                </span>
                            </div>
                        </div>
                        <div className="content-card-product">
                            <h3>Cafe Helado</h3>
                            <div className="stars">
                                <p>Herramienta flexible con el uso </p>
                            </div>
                            <span className="add-cart">
                                <i className="fa-solid fa-cart-shopping"></i>
                            </span>
                            <p className="price">$5.60</p>
                        </div>
                    </div>
                </div>
    )
}

export default Product1;