import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import Loader from 'react-loaders'
import SoftwareDevCert from '../../assets/images/alex_sanderson_dev.PNG'
import CyberSecurityCert from '../../assets/images/alex_sanderson_cyber.PNG'
import './index.scss'

const Achievements = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    const h1Array = ['A', 'c', 'h', 'i', 'e', 'v', 'e', 'm', 'e', 'n', 't', 's']

    useEffect(() => {
        return setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    const SoftwareDevCertModal = () => {
        const softwareDevModal = document.querySelector('.softwareDevModal')
        softwareDevModal.classList.add('show')
        softwareDevModal.style.display = 'block'
        softwareDevModal.setAttribute('aria-modal', 'true')
        softwareDevModal.removeAttribute('aria-hidden')
        softwareDevModal.setAttribute('role', 'dialog')
        softwareDevModal.setAttribute('tabindex', '-1')
        softwareDevModal.classList.add('fade')
        softwareDevModal.classList.add('show')
        document.body.classList.add('modal-open')
        if (document.querySelector('.modal-backdrop') === null) {
            const backdrop = document.createElement('div')
            backdrop.classList.add('modal-backdrop')
            backdrop.classList.add('fade')
            backdrop.classList.add('show')
            document.body.appendChild(backdrop)
        }

        var SoftwareDevCertModalCloseButton = document.getElementById('softwareDevModalClose');
        SoftwareDevCertModalCloseButton.addEventListener('click', () => {
            const softwareDevModal = document.querySelector('.softwareDevModal')
            softwareDevModal.classList.remove('show')
            softwareDevModal.style.display = 'none'
            softwareDevModal.setAttribute('aria-hidden', 'true')
            softwareDevModal.removeAttribute('role')
            softwareDevModal.removeAttribute('tabindex')
            softwareDevModal.classList.remove('fade')
            softwareDevModal.classList.remove('show')
            document.body.classList.remove('modal-open')
            document.body.style.paddingRight = '0px'
            document.querySelector('.modal-backdrop').remove()
        });
    }

    const CyberSecurityCertModal = () => {
        const cyberModal = document.querySelector('.cyberModal')
        const cyberCert = document.getElementById('cyberCert')
        const page = document.getElementById('root');
        page.style.width = '100%';
        // if the cybercert image has a stlye of display: none, make it display: block
        if (cyberCert.style.display === 'none') {
            cyberCert.style.display = 'block'
        }
        cyberModal.classList.add('show')
        cyberModal.style.display = 'block'
        cyberModal.setAttribute('aria-modal', 'true')
        cyberModal.removeAttribute('aria-hidden')
        cyberModal.setAttribute('role', 'dialog')
        cyberModal.setAttribute('tabindex', '-1')
        cyberModal.classList.add('fade')
        cyberModal.classList.add('show')
        document.body.classList.add('modal-open')
        if (document.querySelector('.modal-backdrop') === null) {
            const backdrop = document.createElement('div')
            backdrop.classList.add('modal-backdrop')
            backdrop.classList.add('fade')
            backdrop.classList.add('show')
            document.body.appendChild(backdrop)
        }

        var cyberModalCloseButton = document.getElementById('cyberModalClose');
        cyberModalCloseButton.addEventListener('click', () => {
            const cyberModal = document.querySelector('.cyberModal')
            cyberModal.classList.remove('show')
            cyberModal.style.display = 'none'
            cyberModal.setAttribute('aria-hidden', 'true')
            cyberModal.removeAttribute('role')
            cyberModal.removeAttribute('tabindex')
            cyberModal.classList.remove('fade')
            cyberModal.classList.remove('show')
            document.body.classList.remove('modal-open')
            document.body.style.paddingRight = '0px'
            document.querySelector('.modal-backdrop').remove()
        });
    }





    return (
        <>
            <div className="myContainer achievements-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={h1Array}
                            idx={15}
                        />
                    </h1>
                </div>
                <div className="achievement left-container">
                    <img className='certificates' src={SoftwareDevCert} alt="software_dev" />
                    <div className="button-container justify-content-center text-center">
                        <button type="button" onClick={SoftwareDevCertModal} className="certificate-button" data-bs-toggle="softwareDevModal" data-bs-target="#softwareCert">Software Developer</button>
                    </div>
                </div>
                <div className="achievement right-container">
                    <img id='cyberCert' className='certificates' src={CyberSecurityCert} alt="cyber_sec" />
                    <div className="button-container justify-content-center text-center">
                        <button type="button" onClick={CyberSecurityCertModal} className="certificate-button" data-bs-toggle="cyberModal" data-bs-target="#cyberCert">Cyber Security</button>
                    </div>
                </div>
            </div>

            <div className="modal softwareDevModal fade" id="softwareCert" tabIndex="-1" aria-labelledby="softwareCertLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="softwareCertLabel">Software Development Certificate</h5>
                        </div>
                        <div className="modal-body">
                            <p>
                                The Software Development Certificate was an intensive program that teaches the fundamentals of software development. The program is designed to help students develop the skills needed to become a software developer. The program covers the following topics: HTML, CSS, JavaScript, jQuery, Bootstrap, SQL, C#, ASP.NET, and the .NET Framework.
                            </p>
                        </div>
                        <div className="modal-footer">
                            <button id='softwareDevModalClose' type="button" className="btn btn-secondary" data-bs-dismiss="softwareDevModal">Close</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal cyberModal fade" id="cyberCert" tabIndex="-1" aria-labelledby="cyberCertLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="cyberCertLabel">Cyber Security Certificate</h5>
                        </div>
                        <div className="modal-body">
                            <p>
                                The Cyber Security Certificate was an intensive program that teaches the fundamentals of cyber security. The program is designed to help students develop the skills needed to become a cyber security professional. The program covers the following topics: Cyber Security Fundamentals, Cyber Security Tools, Cyber Security Operations, Cyber Security Incident Response, and Cyber Security Law.
                            </p>
                        </div>
                        <div className="modal-footer">
                            <button id='cyberModalClose' type="button" className="btn btn-secondary" data-bs-dismiss="cyberModal">Close</button>
                        </div>
                    </div>
                </div>
            </div>

            <Loader type="line-scale-pulse-out" />
        </>
    )
}

export default Achievements
