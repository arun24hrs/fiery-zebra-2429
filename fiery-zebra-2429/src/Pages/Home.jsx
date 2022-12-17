import NavbarMain from '../Components/NavbarMain';
import ButtonMenu from '../Components/ButtonMenu';
import { Header } from '../Components/Header';
import Footer from '../Components/Footer';
import LoginPage from './LoginPage';
import Carousel from '../Components/Carousel';

export const Home = () => {
    return(
        <div>
            <NavbarMain/>
            <ButtonMenu/>
            <Header/>
            <Carousel/>
            <LoginPage/>
            <Footer/>
        </div>
    )
}