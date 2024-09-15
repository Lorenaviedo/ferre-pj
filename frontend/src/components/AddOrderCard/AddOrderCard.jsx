const OrderCard = (props) => {
    return (
        <>
            <div className="p-2 row border">
                <div className="col-sm-4 contentImgCart border-end">
                    <img className="w-100 card-img-top object-cover" src={props.image} alt={props.name_product} />
                </div>
                <div className="col-sm infoProductCart">
                    <div className="row infoProductCartbody">
                        <div className="col">
                            <p className="mb-2">{props.name_product}</p>
                            <span>${props.price}</span>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <span>cantidad: {props.cantidad}</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default OrderCard;