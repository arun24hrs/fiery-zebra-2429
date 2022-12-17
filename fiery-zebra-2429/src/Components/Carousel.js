import React from 'react'
import Mycard from './CarouselCard'
import styles from './Carousel.module.css'
const Carousel = () => {
    let box = document.querySelector('.productCarousel');

    const btnpressprev = () => {
        let width = box.clientWidth;
        box.scrollLeft = box.scrollLeft - width;
        console.log(width)
    }

    const btnpressnext = () => {
        let width = box.clientWidth;
        box.scrollLeft = box.scrollLeft + width;
        console.log(width)
    }
    return (
        <div className="productCarousel">
            <button className={styles.prebtn} onClick={btnpressprev}><p>&lt;</p></button>
            <button className={styles.nextbtn} onClick={btnpressnext}><p>&gt;</p></button>


            <div className={styles.productContainer}>
                <Mycard cardno='1' />
                <Mycard cardno='2' />
                <Mycard cardno='3' />
                <Mycard cardno='4' />
                <Mycard cardno='5' />
                <Mycard cardno='6' />
                <Mycard cardno='7' />
                <Mycard cardno='8' />
                <Mycard cardno='9' />
                <Mycard cardno='10' />
                <Mycard cardno='11' />
                <Mycard cardno='12' />
                <Mycard cardno='13' />
            </div>
        </div>
    )
}

export default Carousel;