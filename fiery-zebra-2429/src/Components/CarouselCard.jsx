import React from 'react'
import styles from './CarouselCard.module.css'
const CarouselCard = (props) => {
    return (
        <div className={styles.mycard}>CarouselCard No. {props.cardno}</div>
    )
}

export default CarouselCard