import * as imagens from './assets/img/imagens'
import { Personagens } from './interfaces'

import { useSelector } from "react-redux";
import { selectNome } from "./redux/slice";

function AliadosCampo() {

    const nome = useSelector(selectNome)

    const encontrarPersonagem = (id: string) => {
        return Personagens.find(personagem => personagem.id === id);
    };

    const principal = encontrarPersonagem(nome);

    var parceiro1 = null;
    var parceiro2 = null;


    if (principal) {
        parceiro1 = encontrarPersonagem(principal.parceiro1);
        parceiro2 = encontrarPersonagem(principal.parceiro2)
    }

    const img = imagens[`${principal?.id}` as keyof typeof imagens];
    const imgParceiro1 = imagens[`${parceiro1?.id}` as keyof typeof imagens];
    const imgParceiro2 = imagens[`${parceiro2?.id}` as keyof typeof imagens];


    return (
        <div className='jogadores'>

            <div id='jogador1-3'>
                <div className='atributos'>
                    <h6>HP: {parceiro1?.hp}</h6>
                    <h6>ATK: {parceiro1?.atk}</h6>
                </div>
                <img className='imgTremer' src={imgParceiro1} />
                <img src={imagens.base} />

                <div className='atributos'>
                    <h6>HP: {parceiro2?.hp}</h6>
                    <h6>ATK: {parceiro2?.atk}</h6>
                </div>
                <img className='imgTremer' src={imgParceiro2} />
                <img src={imagens.base} />
            </div>

            <div id='jogador2'>

                <div className='atributos'>
                    <h6>HP: {principal?.hp}</h6>
                    <h6>ATK: {principal?.atk}</h6>
                </div>

                <img className='imgTremer' src={img} />
                <img src={imagens.base} />
            </div>

        </div>
    )
}

export default AliadosCampo