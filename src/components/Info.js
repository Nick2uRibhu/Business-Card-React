import React from 'react';
import photo from './images/ami1.jpg'
import linkedinLogo from './images/LinkedIn-logo.png'
import emailLogo from './images/Email-logo.png'
import './Info.css'

export default function Info() {
    return (
        <div className='container'>
            <header className='header'>
                <img src={photo} alt="my-pic" className='avatar'/>
            </header>
            <div className='bio'>
                <h1 className='name'>Ribhu Guha</h1>
                <p className='title'>Frontend Developer</p>
                <p className='small'>(Website coming soon...)</p>
                <div className='contacts'>
                    <a target="_blank"
                        rel="noopener noreferrer"
                        className='links email'
                        href="mailto:rg2235@it.jgec.ac.in">
                    <img className='icons' src={emailLogo} alt="E-logo"/>
                    Email
                    </a>
                    <a  target="_blank"
                        rel="noopener noreferrer"
                        className='links linkedin'
                        href="https://www.linkedin.com/in/ribhu-guha-9658371a0/"
                    >
                        <img className='icons' src={linkedinLogo} alt="L-logo"/>
                        LinkenIn
                    </a>
                </div>
            </div>
        </div>
    )
}