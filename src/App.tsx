import TelaSelecao from './TelaSelecao'
import './App.css'
import CampoBatalha from './CampoBatalha'
import { useSelector } from "react-redux";
import { selectInterruptor } from "./redux/slice";

function App() {

  const interruptor = useSelector(selectInterruptor);

  return (
    <div>
      {interruptor && <TelaSelecao />}
      {!interruptor && <CampoBatalha className="campoBatalha" />}
    </div>

  )
}

export default App

