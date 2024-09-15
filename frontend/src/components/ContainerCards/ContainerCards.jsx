import { InfoProducts } from "../../utils/Dataproducts";
import Card from "../Card/Card";

const ContainerCard = () => {
    return(
        <div className="container p-0 mt-3">
            <div className="row">
                {
                    InfoProducts.map((product) => (
                        <div className="col-md-3 my-2" key={product.id}>
                            <Card product={product}/>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default ContainerCard;

/*<div className='container d-flex justify-content-center'>
            <div className='row'>  
                {
                    cards.map(card => (
                        <div className="col-md-3" key={card.id}>
                            <Card tittle={card.tittle} imageSource={card.image} text={card.text}/>
                        </div>
                    ))
                }
            </div>
        </div>
        
        
        
        <div className="grid gap-3 grid-cols-4 w-full max-w-screen-lg">
                {
                    infoProducts.map((product) => (
                        <Card key={product.id} product={product}/>
                    ))
                }
            </div>*/