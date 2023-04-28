import React from 'react'
import './main.css'
import Formulario from '../Formulario/Formulario'
export const Main = () => {

   /* const [isSelected,setIsSelected]=useState(false)
    const handleClick=()=>{
        setIsSelected(!isSelected)
    
      }

   // const classCard = isSelected ? 'contact-card--selector':'contact-card';*/

  return (
 <>
    <main>
    <div className='main__Tabla'> 
     <div className='Tabla__ProcdutsHoteles'>
        <h2>Product List</h2>
        <button className='Tabla__ProcdutsHoteles--btnadd'>add</button>
     
     </div>
   
  

      <table >
           
            <tr>
                <th><h2> Product name</h2></th>
                <th><h2> Ciudad</h2></th>
                <th><h2> Dirección</h2></th>
                <th><button>Edit</button><button>Delete</button></th>
            </tr>
            <tr>
                <td>A</td>
                <td>B</td>
                <td>C</td>
                <td>D</td>
            </tr>
           
            
        </table>
  
    </div>   
    <Formulario/> 
    </main>   
    <footer>
    <div class="fot1">
            <p>Proyecto en Parejas</p>
            <p>Abril-2023</p>
        </div>

        <div class="fot2">
          <p>Diseño de Guillermo Herrera</p>
          <p>Miguel Chaparro</p>
        </div>

                

    </footer> 
    </>
      )
}
export default Main