import React from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faTh} from '@fortawesome/free-solid-svg-icons'
import {faAngry} from '@fortawesome/free-solid-svg-icons'
import './header.css'

function Header(){
    
    const iconArray = () => {
        let resArr = []
        for(let i = 0; i < 15; i++){
            resArr.push(faAngry)
        }
        return resArr
    }
    const iconMap = iconArray().map((element, index) => {
        return <FontAwesomeIcon key={index} className='icon-list' icon={element}></FontAwesomeIcon>
    })

    return(
        <header>
            <span>
                <p>About</p>
                <p>Store</p>
            </span>
            <span>
                <p>Gmail</p>
                <p>Images</p>
                <FontAwesomeIcon className='th-icon' icon={faTh}></FontAwesomeIcon>
            </span>
            <section className='icon-box'>
                {iconMap}
            </section>
        </header>
    )
}

export default Header