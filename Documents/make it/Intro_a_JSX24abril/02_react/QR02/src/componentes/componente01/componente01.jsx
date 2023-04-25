import React from 'react'
import qr2 from './image-qr-code.png'
import './componente01.css'

export const componente01 = () => {
  return (
    <>
    <div className='container'>
        <div className="card">
            <img className ="card__imgen"src={qr2} alt="" />
        <div className="card__texto">
            <h2 className='car__texto--h'>Improve your front-end <br />
                skills by building project</h2>
            <p className='car__texto--p'>Scan the QR code to visit FrontEnd <br />
                Mentor and take your coding skills to <br />
                the next level</p>
        </div>
        </div>
    </div>
    </>
  )
}

export default componente01;