import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faClose } from '@fortawesome/free-solid-svg-icons'
import Clock from './Clock'
import Counter from './Counter'

const Hero = () => {

    const active = () => {
        const menulinks = document.getElementById('myLinks');
        menulinks.hidden = false;
    }
    const close = () => {
        const menulinks = document.getElementById('myLinks');
        menulinks.hidden = true;
    }
    return (
        <div className='hero'>
            <div className='topnav'>
                <div className="icon"><a href="#"><FontAwesomeIcon icon={faBars} onClick={active} id="menu" /></a></div>
                <div id="myLinks" hidden>
                    <a id="close"><FontAwesomeIcon icon={faClose} onClick= {close} /></a>
                    <a href="#hero">Start</a>
                    <a href="#portfolio">Portfolio</a>
                    <a href="#contact">Contact</a>
                    <a href="#about">About</a>
                </div>
            </div>
            <h3>Hi there!</h3>
            <Clock />
            <br />
            <Counter />
        </div>
    )
}

export default Hero
