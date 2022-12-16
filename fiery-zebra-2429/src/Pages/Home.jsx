import NavbarMain from '../Components/NavbarMain';
import ButtonMenu from '../Components/ButtonMenu';
import { Header } from '../Components/Header';
import Footer from '../Components/Footer';
import LoginPage from './LoginPage';

export const Home = () => {
    return(
        <div>
            <NavbarMain/>
            <ButtonMenu/>
            <Header/>
            <LoginPage/>
            <Footer/>
        </div>
    )
}