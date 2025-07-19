import { createStore } from "redux";

const initialState = {
    jugadores: [{
        id: 1,
        nombre: "Franco Armani",
        foto: "https://www.cariverplate.com.ar/imagenes/jugadores/2025-05/1638-653x667.png"
    },
    {
        id: 2,
        nombre: "Jeremias Ledesma",
        foto: "https://www.cariverplate.com.ar/imagenes/jugadores/2025-05/1883-653x667.png"
    },
    {
        id: 3,
        nombre: "Lucas Lavagnino",
        foto: "https://www.cariverplate.com.ar/imagenes/jugadores/2025-05/1501-653x667.png"

    },
    {
        id: 4,
        nombre: "Santiago Beltran",
        foto: "https://www.cariverplate.com.ar/imagenes/jugadores/2025-05/1845-653x667.png"

    },
    {
        id: 5,
        nombre: "Federico Gattoni",
        foto: "https://www.cariverplate.com.ar/imagenes/jugadores/2025-05/1877-653x667.png"

    },
    {
        id: 6,
        nombre: "Gonzalo Montiel",
        foto: "https://www.cariverplate.com.ar/imagenes/jugadores/2025-05/1068-653x667.png"

    },
    {
        id: 7,
        nombre: "German Pezzella",
        foto: "https://www.cariverplate.com.ar/imagenes/jugadores/2025-05/1885-653x667.png"

    },
    {
        id: 8,
        nombre: "Fabricio Bustos",
        foto: "https://www.cariverplate.com.ar/imagenes/jugadores/2025-05/1886-653x667.png"
    },
    {
        id: 9,
        nombre: "Paulo Diaz",
        foto: "https://www.cariverplate.com.ar/imagenes/jugadores/2025-05/1760-653x667.png"
    },
    {
        id: 10,
        nombre: "Milton Casco",
        foto: "https://www.cariverplate.com.ar/imagenes/jugadores/2025-05/1230-653x667.png"
    },
    {
        id: 11,
        nombre: "Marcos Acuña",
        foto: "https://www.cariverplate.com.ar/imagenes/jugadores/2025-05/1888-653x667.png"
    },
    {
        id: 12,
        nombre: "Lucas Martinez Quarta",
        foto: "https://www.cariverplate.com.ar/imagenes/jugadores/2025-05/1108-653x667.png"
    },
    {
        id: 13,
        nombre: "Maximiliano Meza",
        foto: "https://www.cariverplate.com.ar/imagenes/jugadores/2025-05/1887-653x667.png"
    },
    {
        id: 14,
        nombre: "Gonzalo Martinez",
        foto: "https://www.cariverplate.com.ar/imagenes/jugadores/2025-05/702-653x667.png"
    },
    {
        id: 15,
        nombre: "Matias Galarza Fonda",
        foto: "https://i.postimg.cc/pLg6907G/Whats-App-Image-2025-07-17-at-10-38-27-PM.jpg"
    },
    {
        id: 16,
        nombre: "Juan Carlos Portillo",
        foto: "https://i.postimg.cc/BbLF1CRp/Whats-App-Image-2025-07-18-at-10-55-07-PM.jpg"
    },
    {
        id: 17,
        nombre: "Kevin Castaño",
        foto: "https://www.cariverplate.com.ar/imagenes/jugadores/2025-05/1911-653x667.png"
    },
    {
        id: 18,
        nombre: "Enzo Perez",
        foto: "https://www.cariverplate.com.ar/imagenes/jugadores/2025-05/1498-653x667.png"
    },
    {
        id: 19,
        nombre: "Ignacio Fernandez",
        foto: "https://www.cariverplate.com.ar/imagenes/jugadores/2025-05/1254-653x667.png"
    },
    {
        id: 20,
        nombre: "Giuliano Galoppo",
        foto: "https://www.cariverplate.com.ar/imagenes/jugadores/2025-05/1890-653x667.png"
    },
    {
        id: 21,
        nombre: "Santiago Lencina",
        foto: "https://www.cariverplate.com.ar/imagenes/jugadores/2025-05/1912-653x667.png"
    },
    {
        id: 22,
        nombre: "Juan Fernando Quintero",
        foto: "https://i.postimg.cc/wT9RhJn9/Whats-App-Image-2025-07-18-at-11-07-04-PM.jpg"
    },
    {
        id: 23,
        nombre: "Maximiliano Salas",
        foto: "https://www.cariverplate.com.ar/imagenes/jugadores/2025-07/1915-1847-653x667-salas.png"
    },
    {
        id: 24,
        nombre: "Miguel Borja",
        foto: "https://www.cariverplate.com.ar/imagenes/jugadores/2025-05/1831-653x667.png"
    },
    {
        id: 25,
        nombre: "Facundo Colidio",
        foto: "https://www.cariverplate.com.ar/imagenes/jugadores/2025-05/1842-653x667.png"
    },
    {
        id: 26,
        nombre: "Sebastian Driussi",
        foto: "https://www.cariverplate.com.ar/imagenes/jugadores/2025-05/1893-653x667.png"
    },
    {
        id: 27,
        nombre: "Agustin Ruberto",
        foto: "https://www.cariverplate.com.ar/imagenes/jugadores/2025-05/1566-653x667.png"
    },
    {
        id: 28,
        nombre: "Ian Subiabre",
        foto: "https://www.cariverplate.com.ar/imagenes/jugadores/2025-05/1847-653x667.png"
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