import React from 'react'
import './Formulario.css'

export const Formulario = () => {

  return (
    <>
      
      <form className="main__contact-form" >
        <div>
          <div className="contact-form__column">
            <label className="contact-form__label">
              Nombre:
            </label>
            <input
              type="text"
              name="name"
              placeholder='Enter your name'
              className="contact-form__input"
             required
            />
          </div>
          <div className="contact-form__column">
            <label className="contact-form__label">
              Teléfono:
            </label>
            <input
              type="text"
              name="phone"
              placeholder='Enter your phone'
              className="contact-form__input"
              required
            />
          </div>
          <div className="contact-form__column">
            <label className="contact-form__label">
              Foto:
            </label>
            <input
              type="url"
              name="photo"
              className="contact-form__input"
              placeholder='https://picsum.photos/200'
              />
          </div>
        </div>

        <button type="submit"  className="contact-form__button">
          Agregar
        </button>
      </form>
    </>
  )
}
export default Formulario