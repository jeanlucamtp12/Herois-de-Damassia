import Cartoes from './Cartoes'
import Particle from './assets/particlesJs/Particle';

function TelaSelecao() {
    return (
        <div>
            <div className="tela">
                <img id="logo" src="./src/assets/img/logo.png" />
                <Particle id="tsparticles" />
                <Cartoes />
            </div>
        </div>

    )
}

export default TelaSelecao;