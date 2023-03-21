import { createStore } from "redux";

const initialState = {
    jugadores: [{
        id: 1,
        nombre: "Franco Armani",
        foto: "https://imgs.search.brave.com/J3KBm6Aa4NgMBlfIPgXqR7EgUAyzQC_rtFbIfRL5E68/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly90bnRz/cG9ydHMuY29tLmFy/L2ltZy8yMDIwLzA3/LzE5L2ZyYW5jby1h/cm1hbmktcml2ZXIt/cG9zYS5qcGc"
    },
    {
        id: 2,
        nombre: "Robert Rojas",
        foto: "https://www.cariverplate.com.ar/imagenes/jugadores/2022-08/1666-02-rojas-imagenprincipal.png"

    },
    {
        id: 3,
        nombre: "Jonatan Maidana",
        foto: "https://www.cariverplate.com.ar/imagenes/jugadores/2022-08/4-04-maidana-imagenprincipal.png"

    },
    {
        id: 4,
        nombre: "Franco Petroli",
        foto: "https://imgs.search.brave.com/HGSgO2ifWTmCiiuwFLrMKlu0NsAKXnwgCmTaKN8peeU/rs:fit:653:667:1/g:ce/aHR0cHM6Ly93d3cu/Y2FyaXZlcnBsYXRl/LmNvbS5hci9pbWFn/ZW5lcy9qdWdhZG9y/ZXMvMjAyMC0xMi8x/Mjg4LTY1M3g2Njdw/ZXRyb2xpZnJhbmNv/LnBuZw"

    },
    {
        id: 5,
        nombre: "Ezequiel Centurion",
        foto: "https://imgs.search.brave.com/x2n2a33r3saE7S39gn9ETVULzpulTzLhJnRuYTVs9Oc/rs:fit:660:371:1/g:ce/aHR0cHM6Ly9lMDAt/YXItbWFyY2EudWVj/ZG4uZXMvY2xhcm8v/YXNzZXRzL211bHRp/bWVkaWEvaW1hZ2Vu/ZXMvMjAyMC8wOC8w/OC8xNTk2OTA1NTg3/OTY1Ni5qcGc"
    },
    {
        id: 6,
        nombre: "David Martinez",
        foto: "https://www.cariverplate.com.ar/imagenes/jugadores/2022-08/1660-06-martinez-imagenprincipal.png"
    },
    {
        id: 7,
        nombre: "Enzo Diaz",
        foto: "https://www.cariverplate.com.ar/imagenes/jugadores/2022-08/1660-06-martinez-imagenprincipal.png"
    },
    {
        id: 8,
        nombre: "Leandro Gonzalez-Pirez",
        foto: "https://www.cariverplate.com.ar/imagenes/jugadores/2022-08/1824-14-gonzalezpirez-imagenprincipal.png"
    },
    {
        id: 9,
        nombre: "Marcelo Herrera",
        foto: "https://www.cariverplate.com.ar/imagenes/jugadores/2022-08/1829-15-herrera-imagenprincipal.png"
    },
    {
        id: 10,
        nombre: "Paulo Diaz",
        foto: "https://www.cariverplate.com.ar/imagenes/jugadores/2022-08/1760-17-diaz-imagenprincipal.png"
    },
    {
        id: 11,
        nombre: "Milton Casco",
        foto: "https://www.cariverplate.com.ar/imagenes/jugadores/2022-08/1230-20-casco-imagenprincipal.png"
    },
    {
        id: 12,
        nombre: "Emanuel Mammana",
        foto: "https://www.cariverplate.com.ar/imagenes/jugadores/2022-08/1825-23-mammana-imagenprincipal.png"
    },
    {
        id: 13,
        nombre: "Elias Gomez",
        foto: "https://www.cariverplate.com.ar/imagenes/jugadores/2022-08/1827-29-gomez-imagenprincipal.png"
    },
    {
        id: 14,
        nombre: "Bruno Zuculini",
        foto: "https://www.cariverplate.com.ar/imagenes/jugadores/2022-08/1641-05-zuculini-imagenprincipal.png"
    },
    {
        id: 15,
        nombre: "Agustin Palavecino",
        foto: "https://www.cariverplate.com.ar/imagenes/jugadores/2022-08/1816-08-palavecino-imagenprincipal.png"
    },
    {
        id: 16,
        nombre: "Ignacio Fernandez",
        foto: "https://www.cariverplate.com.ar/imagenes/jugadores/2022-12/1254-nacho_653x667.png"
    },
    {
        id: 17,
        nombre: "Nicolas de la Cruz",
        foto: "https://www.cariverplate.com.ar/imagenes/jugadores/2022-08/1623-11-delacruz-imagenprincipal.png"
    },
    {
        id: 18,
        nombre: "Esequil Barco",
        foto: "https://www.cariverplate.com.ar/imagenes/jugadores/2022-08/1828-21-barco-imagenprincipal.png"
    },
    {
        id: 19,
        nombre: "Matias Kranevitter",
        foto: "https://www.cariverplate.com.ar/imagenes/jugadores/2022-12/1834-kranevitter_653x667.png"
    },
    {
        id: 20,
        nombre: "Enzo Perez",
        foto: "https://www.cariverplate.com.ar/imagenes/jugadores/2022-08/1498-24-perez-imagenprincipal.png"
    },
    {
        id: 21,
        nombre: "Jose Paradela",
        foto: "https://www.cariverplate.com.ar/imagenes/jugadores/2022-08/1817-26-paradela-imagenprincipal.png"
    },
    {
        id: 22,
        nombre: "Rodrigo Aliendro",
        foto: "https://www.cariverplate.com.ar/imagenes/jugadores/2022-08/1830-27-aliendro-imagenprincipal.png"
    },
    {
        id: 23,
        nombre: "Santiago Simon",
        foto: "https://www.cariverplate.com.ar/imagenes/jugadores/2022-08/1352-31-simon-imagenprincipal.png"
    },
    {
        id: 24,
        nombre: "Tomas Castro-Ponce",
        foto: "https://www.cariverplate.com.ar/imagenes/jugadores/2023-02/867-castroponce_653x667.png"
    },
    {
        id: 25,
        nombre: "Franco Alfonso",
        foto: "https://www.cariverplate.com.ar/imagenes/jugadores/2023-01/1329-alfonso_653x667.png"
    },
    {
        id: 26,
        nombre: "Matias Suarez",
        foto: "https://www.cariverplate.com.ar/imagenes/jugadores/2022-08/1667-07-suarez-imagenprincipal.png"
    },
    {
        id: 27,
        nombre: "Miguel Borja",
        foto: "https://www.cariverplate.com.ar/imagenes/jugadores/2022-08/1831-09-borja-imagenprincipal.png"
    },
    {
        id: 28,
        nombre: "Lucas Beltran",
        foto: "https://www.cariverplate.com.ar/imagenes/jugadores/2022-08/850-18-beltran-imagenprincipal.png"
    },
    {
        id: 29,
        nombre: "Salomon Rondon",
        foto: "https://www.cariverplate.com.ar/imagenes/jugadores/2023-01/1836-rondon_653x667.png"
    },
    {
        id: 30,
        nombre: "Pablo Solari",
        foto: "https://www.cariverplate.com.ar/imagenes/jugadores/2022-08/1832-16-solari-imagenprincipal.png"
    },

],
    titulares: [],
    suplentes: []
}

const rootReducer = (state=initialState, action) =>{
   if (action.type === "AGREGAR_TITULAR") {
    return{
        ...state, 
        titulares: state.titulares.concat(action.jugador),
        jugadores: state.jugadores.filter(j => j.id!== action.jugador.id)
    }
   }
   if (action.type === "AGREGAR_SUPLENTE") {
    return{
        ...state, 
        suplentes: state.suplentes.concat(action.jugador),
        jugadores: state.jugadores.filter(j => j.id!== action.jugador.id)
    }
   }
   if (action.type === "QUITAR_TITULAR") {
    return{
        ...state, 
        titulares: state.titulares.filter(j => j.id!== action.jugador.id),
        jugadores: state.jugadores.concat(action.jugador)
    }
   }
   
   if (action.type === "QUITAR_SUPLENTE") {
    return{
        ...state, 
        suplentes: state.suplentes.filter(j => j.id!== action.jugador.id),
        jugadores: state.jugadores.concat(action.jugador)
    }
   }




    return state;
}


export default createStore(rootReducer); 