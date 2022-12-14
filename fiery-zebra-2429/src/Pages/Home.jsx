import NavbarMain from '../Components/NavbarMain';
import ButtonMenu from '../Components/ButtonMenu';
import { Header } from '../Components/Header';
import Carousel from '../Components/Carousel';

export const Home = () => {
    return(
        <div>
            <NavbarMain/>
            <ButtonMenu/>
            <Header/>
            <Carousel/>
        </div>
    )
}