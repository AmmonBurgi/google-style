import React from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faTh} from '@fortawesome/free-solid-svg-icons'
import './header.css'

function Header(){
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
        </header>
    )
}

export default Header