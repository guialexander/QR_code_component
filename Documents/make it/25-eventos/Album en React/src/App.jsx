import { useState } from 'react'
import './App.css'
import Album from './componentes/Album/Album'

function App() {
  const [index, setIndex] = useState(0);
  

  const handleClick=(evt)=>{
   
    setIndex(index+1) ;
    
    
}

  const personas =[
    {
        cancion:"El aguacate",
        album:"the Klaxxon",
        aoo:"2000"
    },
    {
        cancion:"La bicicleta",
        album: "Shakira y carlos vives",
        aoo:"2008"
    },
    {
        cancion: "Arenita playita",
        album: "kaffu banto",
        aoo:"2013"
    },
    {
      cancion: "El jardinero",
      album: "Wilfrido Vargas",
      aoo:"2020"
  },

]
console.log(personas.length);

   return (
    <>
      <Album
      ficha={(index< personas.length) ? personas[index]: alert("no hay mas canciones debes actualizar la pagina")}
      />
       <button className="cambio_de_cancion" onClick={handleClick} name="cambio">Cambiar Canción</button>


    </>
  )
}

export default App
