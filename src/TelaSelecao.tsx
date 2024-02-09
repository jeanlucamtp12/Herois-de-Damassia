import Cartoes from './Cartoes'
import Particle from './assets/particlesJs/Particle';
import {logo} from './assets/img/imagens'

function TelaSelecao() {
    return (
        <div>
            <div className="tela">
                <img id="logo" src={logo} />
                <Particle />
                <Cartoes />
            </div>
        </div>

    )
}

export default TelaSelecao;