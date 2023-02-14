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

    return (
        <>
            <div className="myContainer page achievements-page">
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
                        <img className='certificates' src={SoftwareDevCert} alt="software_dev"/>
                </div>
                <div className="achievement right-container">
                        <img className='certificates' src={CyberSecurityCert} alt="cyber_sec"/>
                </div>
            </div>
            <Loader type="line-scale-pulse-out" />
        </>
    )
}

export default Achievements
