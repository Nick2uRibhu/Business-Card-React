import React from 'react'
import './Footer.css'
import gitLogo from './images/Github-logo.png'
import TwitterLogo from './images/Twitter-logo.png'

export default function About() {
    return (
        <footer className='footer'>
            <div className='socialMedia'>
            <a target="_blank" rel="noopener noreferrer" className="links" href="https://github.com/ribhu-sirpi">
                <img src={gitLogo} alt="Github Link" className='socialIcons'/>
            </a>
            <a target="_blank" rel="noopener noreferrer" className="links" href="https://twitter.com/">
                <img src={TwitterLogo} alt="Twitter Link" className='socialIcons'/>
            </a>
            </div>
        </footer>
    )
}