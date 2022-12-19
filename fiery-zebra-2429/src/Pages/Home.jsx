import NavbarMain from '../Components/NavbarMain';
import ButtonMenu from '../Components/ButtonMenu';
import { Header } from '../Components/Header';
import Footer from '../Components/Footer';
import LoginPage from './LoginPage';
import data from '../hotelDB.json';
import Carousel from '../Components/Carousel';
import Banner from '../Components/Banner';
import TravelChoiceBanner from '../Components/TravelChoiceBanner';
import SubFooter from '../Components/SubFooter';
import React from 'react';

let delhi = data.filter((el)=>el.city=="New Delhi");
let mumbai = data.filter((el)=>el.city=="Mumbai");
let jaipur = data.filter((el)=>el.city=="Jaipur");
let banglore = data.filter((el)=>el.city=="Banglore");
let goa = data.filter((el)=>el.city=="Goa");




export const Home = () => {

    const [searchQuery, setSearchQuery] = React.useState("");

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value)
    }

    const handleSearchQuery = (e) => {
        e.preventDefault();
    }

    return(
        <div>
            <NavbarMain/>
            <ButtonMenu/>
            <Header handleSearchChange={handleSearchChange} handleSearchQuery={handleSearchQuery}/>
            <Carousel delhi={delhi}/>
            <Carousel delhi={banglore}/>
            <Banner/>
            <Carousel delhi={jaipur}/>
            <Carousel delhi={mumbai}/>
            {/* <LoginPage/> */}
            <TravelChoiceBanner/>
            <Carousel delhi={goa}/>
            <SubFooter/>
            <Footer/>
        </div>
    )
}