// import Product1 from "../../components/Aproduct1/product1"
import Carousel from "../../components/Carousel/Carousel"
import ContainerCard from "../../components/ContainerCards/ContainerCards"
import Footer from "../../components/Footer/Footer"
import Marcas from "../../components/Marcas/Marcas"
import ShopInfo from "../../components/ShopInfo/ShopInfo"

const Home = () =>{
    return(
        <>
            <Carousel />
            <ShopInfo />
            <Marcas />
            <ContainerCard />
            <Footer />
        </>
    )
}

export default Home