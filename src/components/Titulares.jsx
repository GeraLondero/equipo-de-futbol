import React from "react";
import { connect } from "react-redux";
import cancha from "../cancha/cancha.svg"; 
//import styles from "./titulares.module.css"; 

// <img src={cancha} alt="Cancha de futbol" />

const Titulares = ({titulares, quitarTitular}) => (

    <section>
        <h2>Titulares</h2>
        <div className="cancha">
            {
               titulares.map(j => ( 
              <article className="titular" key={j.id}>
                 <div>
                  <img src={j.foto} alt={j.nombre}/>
                  <button onClick={() => quitarTitular(j)}>X</button>
                  </div>
                  <p>{j.nombre}</p>
             </article>
          ))

            }

          <img src={cancha} alt="Cancha de futbol"/>

        </div>
      
    </section>
)

const mapSatateToProps = state => ({
    titulares: state.titulares
 })

const mapDispatchToProps = dispatch =>({
    quitarTitular(jugador){
        dispatch({
            type: "QUITAR_TITULAR",
            jugador
        })
    }
})

export default connect(mapSatateToProps, mapDispatchToProps)(Titulares); 