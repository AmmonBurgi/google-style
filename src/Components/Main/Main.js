import React from 'react'
import './main.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faMicrophone, faSearch} from '@fortawesome/free-solid-svg-icons'
import google from '../../google.png'

function Main(){
    return(
        <section className='main'>
            <img className='google-image' alt='google' src={google} />
            <div className='input-section'>
                <FontAwesomeIcon className='input-icon' icon={faSearch}></FontAwesomeIcon>
                <input className='inner-input' />
                <FontAwesomeIcon className='input-icon' icon={faMicrophone}></FontAwesomeIcon>
            </div>
            <span className='main-buttons'>
                <button>Google Search</button>
                <button>I'm Feeling Lucky</button>
            </span>
        </section>
    )
}

export default Main