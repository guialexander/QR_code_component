import React from 'react'
import './Album.css'

export const Album = (props) => {
   const {ficha}=props; //destructuración primero al objeto 
   const {cancion,album,aoo}=ficha;//destructuración del objeto alas variables 
   



  return (
    <>    
    <div className="container">
        <div className="Album">
        
                <div className="Album__Izquierda">
                    <h1 className="Album__Izquierda--title">{cancion}</h1>
                    <p className="Album__Izquierda--album">{album}</p>


                </div>


                <div className="Album__Derecha">
                    <h2 className="Album__Izquierda--title"> {cancion}</h2>
                    <p className="Album__Izquierda--album">{aoo}</p>
                    <p className="Album__Derecha--album"> {album}</p>

                </div>
               
        </div>
        <div class="corazon">     
                <a href="#" title="corazon">&#9829;</a>
             </div>
          </div>  
    </>
  )
}

export default Album;


