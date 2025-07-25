import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import Jugadores from "./components/Jugadores.jsx"
import EquipoSeleccionado from "./components/EquipoSeleccionado";
import "./styles/styles.scss"; 


const App = () => (
  <Provider store={store}> 
    <main>
      <h1> Plantel de River Plate </h1>
      <Jugadores />
      <EquipoSeleccionado />
    </main>
  </Provider>
)

export default App;
