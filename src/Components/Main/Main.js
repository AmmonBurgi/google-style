import React from 'react'
import './main.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faMicrophone, faSearch} from '@fortawesome/free-solid-svg-icons'

function Main(){
    return(
        <section className='main'>
            <img alt='theImage' />
            <div className='input-section'>
                <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
                <input className='inner-input' />
                <FontAwesomeIcon icon={faMicrophone}></FontAwesomeIcon>
            </div>
            <span className='main-buttons'>
                <button>Google Search</button>
                <button>I'm Feeling Lucky</button>
            </span>
        </section>
    )
}

export default Main