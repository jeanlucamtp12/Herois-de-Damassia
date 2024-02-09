import Cartoes from './Cartoes'
import Particle from './assets/particlesJs/Particle';
import {logo} from './assets/img/imagens'
import { useEffect, useState } from 'react';
import Loading from './Loading';

function TelaSelecao() {

    const [loading, setLoading] = useState(true);

    useEffect (() =>{

        setTimeout(() => {
            setLoading(false);
        }, 10000);

    }, []);

    return (
        <div>
            <div className="tela">

                {loading && <Loading id="loading" />}

                <img id="logo" src={logo} />
                <Particle />
                <Cartoes />
            </div>
        </div>

    )
}

export default TelaSelecao;