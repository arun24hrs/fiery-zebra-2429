import NavbarMain from '../Components/NavbarMain';
import ButtonMenu from '../Components/ButtonMenu';
import { Header } from '../Components/Header';
import Footer from '../Components/Footer';
import LoginPage from './LoginPage';
import data from '../hotelDB.json';
import Carousel from '../Components/Carousel';

let delhi = data.filter((el)=>el.city=="New Delhi");
console.log(delhi)

export const Home = () => {
    return(
        <div>
            <NavbarMain/>
            <ButtonMenu/>
            <Header/>
            <Carousel delhi={delhi}/>
            <LoginPage/>
            <Footer/>
        </div>
    )
}