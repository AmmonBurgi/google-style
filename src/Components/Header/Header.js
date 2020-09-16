import React, {useState} from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faTh} from '@fortawesome/free-solid-svg-icons'
import {faAngry} from '@fortawesome/free-solid-svg-icons'
import './header.css'

function Header(){
    const [toggle, setToggle] = useState(false)
    
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
                <FontAwesomeIcon onClick={() => setToggle(!toggle)} className='th-icon' icon={faTh}></FontAwesomeIcon>
                <div className='user-container'></div>
            </span>
            <section className={toggle === false ? 'box-none' : 'icon-box'}>
                {iconMap}
            </section>
        </header>
    )
}

export default Header