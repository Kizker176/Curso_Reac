import logo from './logo.svg';
import './App.css';
/* import Greeting from './components/pure/greeting'; */
/* import GreetingF from './components/pure/greetingF'; */
import TaskListComponent from './components/container/task_list';
import Father from './components/container/father';
/* import GreetingStyled from './components/pure/greetingStyled'; */
/* import Ejemplo1 from './hooks/Ejemplo1'; */
/* import Ejemplo2 from './hooks/Ejemplo2'; */
/* import MiComponenteConContexto from './hooks/Ejmplo3'; */
/* import Ejemplo4 from './hooks/Ejemplo4'; */

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" /> */}
      {/* Componente propio Greeating.jsx */}
      {/* <Greeting name = "Martin"></Greeting> */}
      {/* Componente de ejemplo Funcional */}
      {/* <GreetingF name= "Martin"></GreetingF> */}
      {/* Componente de Listado de Tareas */}
      {/* <TaskListComponent></TaskListComponent> */}
      {/* Ejemplo de uso de HOOKS */}
      {/* <Ejemplo1></Ejemplo1> */}
      {/* <Ejemplo2></Ejemplo2> */}
      {/* <MiComponenteConContexto></MiComponenteConContexto> */}
      {/*Todo lo que hay aqui,m es tratado como props.children*/}
      {/* <Ejemplo4 nombre="Martin">
          <h3>
            contenido del props.children
          </h3>
        </Ejemplo4> */}
      {/* <GreetingStyled name="Martin"></GreetingStyled> */}
      {/* </header> */}
      {/* Gestion de eventos */}
      {/* <Father></Father> */}
      <TaskListComponent></TaskListComponent>
    </div>
  );
}

export default App;